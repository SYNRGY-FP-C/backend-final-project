const { decodeToken } = require("../../utils/jwt");
const { Account, Role, AccountRoles } = require("../models");

const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      const error = new Error("Unauthenticated");
      error.status_code = 401;
      throw error;
    }
    const decoded = decodeToken(token);
    if (!decoded.sub) {
      const error = new Error("Unauthorized");
      error.status_code = 401;
      throw error;
    }
    const user = await Account.findOne({
      where: {
        email: decoded.sub,
      },
      attributes: ["id"],
      include: [
        {
          model: AccountRoles,
          required: true,
          as: "account_role",
          attributes: ["role_id"],
          include: [
            {
              model: Role,
              attributes: ["name"],
              as: "role",
            },
          ],
        },
      ],
      raw: true,
      nest: true,
    });
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

const isAuthorized = (allowed) => async (req, res, next) => {
  try {
    const user = req.user;
    if (!allowed.includes(user.account_role.role.name)) {
      const error = new Error("Forbidden");
      error.status_code = 403;
      throw error;
    }
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  isAuthenticated,
  isAuthorized,
};
