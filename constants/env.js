module.exports = {
  JWT_SECRET: process.env.JWT_SECRET,
  DB_HOST: process.env.DB_HOST || "localhost",
  DB_USER: process.env.DB_USER || "root",
  DB_PASSWORD: process.env.DB_PASSWORD || "",
  DB_NAME: process.env.DB_NAME || "database_development",
  DB_DIALECT: process.env.DB_DIALECT || "postgres",
};
