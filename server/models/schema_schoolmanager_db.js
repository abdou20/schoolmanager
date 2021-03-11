// Import Sequelize
import Sequelize from "sequelize";
import Database from "../classes/Database_Schoolmanager_db";

export default init => {
  let sequelize = Database.getConnection();


    /**
      * ------------------------------------
      * Start define generated schema
      *
      * The content of this section will be overwritten on each documentation, 
      * please insert your customization at the top or at the end of the file.
      * ------------------------------------
      */



    /**
      * ------------------------------------
      * User
      * ------------------------------------
      */
    class User extends Sequelize.Model{}
    User.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      mail: {
        type: Sequelize.STRING
      },
      
      name: {
        type: Sequelize.STRING
      },
      
      password: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      surname: {
        type: Sequelize.STRING
      },
      
      username: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      //RELATIONS
      
      
      //EXTERNAL RELATIONS
      /*
      */
    },
      { sequelize, tableName: "user", timestamps: false }
    );



    /**
      * ------------------------------------
      * course
      * ------------------------------------
      */
    class course extends Sequelize.Model{}
    course.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      description: {
        type: Sequelize.STRING
      },
      
      name: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      //RELATIONS
        
      
      
      //EXTERNAL RELATIONS
      /*
      courses: {
        type: Sequelize.INTEGER,
        references: {
          model: students,
          key: '_id',
        }
      },
      */
    },
      { sequelize, tableName: "course", timestamps: false }
    );



    /**
      * ------------------------------------
      * students
      * ------------------------------------
      */
    class students extends Sequelize.Model{}
    students.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      lastname: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      name: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      phone: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      //RELATIONS
        
      courses:  {
        type: Sequelize.INTEGER,
        references: {
          model: "course",
          key: '_id',
        },
      },
      
      
      //EXTERNAL RELATIONS
      /*
      */
    },
      { sequelize, tableName: "students", timestamps: false }
    );



    /**
      * ------------------------------------
      * teacher
      * ------------------------------------
      */
    class teacher extends Sequelize.Model{}
    teacher.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      lastname: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      name: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      phone: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      //RELATIONS
      
      
      //EXTERNAL RELATIONS
      /*
      */
    },
      { sequelize, tableName: "teacher", timestamps: false }
    );


    /**
      * ------------------------------------
      * Relations many to many
      * ------------------------------------
      */

    
    
    
    
  /**
   * ------------------------------------
   * End define generated schema
      * ------------------------------------
      */

    /**
      * ------------------------------------
      * Roles
      * ------------------------------------
      */
    class Roles extends Sequelize.Model{}
    Roles.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      role: {
        type: Sequelize.STRING
      },
      
      //RELATIONS
        
      _user:  {
        type: Sequelize.INTEGER,
        references: {
          model: "User",
          key: '_id',
        },
      }
      
      
      //EXTERNAL RELATIONS
      /*
      */
    },
      { sequelize, tableName: "roles", timestamps: false }
    );

    User.hasMany(Roles, {
      foreignKey: "_user"
    });

    /**
      * ------------------------------------
      * Insert here your custom models
      * ------------------------------------
      */

};
