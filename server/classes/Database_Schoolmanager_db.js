// Import Sequelize
import Sequelize from "sequelize";
import InitSchema from "../models/schema_schoolmanager_db";
import UserModel from "../models/Schoolmanager_db/UserModel";

// Logging
import Logger from "./Logger";
// Properties
import properties from "../properties.js";

class Database {
  constructor() {}

  /**
   * Init database
   */
  async init() {
    await this.authenticate();
    Logger.info(
      "Database connected at: " +
        properties.schoolmanager_db.host +
        ":" +
        properties.schoolmanager_db.port +
        "//" +
        properties.schoolmanager_db.user +
        "@" +
        properties.schoolmanager_db.name
    );

    // Import schema
    InitSchema();

    await UserModel.createAdminUser();

  }

  /**
   * Start database connection
   */
  async authenticate() {
    Logger.info("Authenticating to the databases...");

    const sequelize = new Sequelize(
      properties.schoolmanager_db.name,
      properties.schoolmanager_db.user,
      properties.schoolmanager_db.password,
      {
        host: properties.schoolmanager_db.host,
        dialect: properties.schoolmanager_db.dialect,
        port: properties.schoolmanager_db.port,
        logging: false
      }
    );
    this.dbConnection_schoolmanager_db = sequelize;

    try {
      await sequelize.sync();
    } catch (err) {
      // Catch error here
      Logger.error(`Failed connection to the DB`);
      Logger.error(err);
      await new Promise(resolve => setTimeout(resolve, 5000));
      await this.authenticate();
    }
  }

  /**
   * Get connection db
   */
  getConnection() {
    return this.dbConnection_schoolmanager_db;
  }
}

export default new Database();
