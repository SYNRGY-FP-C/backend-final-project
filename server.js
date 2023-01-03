const app = require("./app");

const PORT = process.env.PORT || 8080;
const { sequelize } = require("./app/models");
const logger = require("./utils/logger");

const start = async () => {
  try {
    await sequelize.authenticate();
    logger.info(
      "⚡️[database]: Database connection has been established successfully."
    );

    app.listen(PORT, () => {
      logger.info(`⚡️[server]: Server is running at http://localhost:${PORT}`);
    });
  } catch (error) {
    logger.error(error);
    process.exit(1);
  }
};

start();
