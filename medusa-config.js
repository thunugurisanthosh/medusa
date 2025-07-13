const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  projectConfig: {
    redis_url: process.env.REDIS_URL || "redis://localhost:6379",
    database_url: process.env.DATABASE_URL || "postgres://localhost/medusa-db",
    database_type: "postgres",
    store_cors: "http://localhost:8000",
    admin_cors: "http://localhost:7000",
  },
};
