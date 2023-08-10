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

    app.listen(PORT, '0.0.0.0',() => {
      logger.info(`⚡️[server]: Server is running at http://localhost:${PORT}`);
    });
  } catch (error) {
    logger.error(error.message);
    process.exit(1);
  }
};

start();
