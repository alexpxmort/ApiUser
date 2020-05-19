'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users_api', {
      id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
      },
      name:{
        type:Sequelize.STRING,
        allowNull:false,
      },
      user_name:{
        type:Sequelize.STRING,
        allowNull:false,
      },
      email:{
        type:Sequelize.STRING,
        allowNull:false,
      },
      password:{
        type:Sequelize.STRING,
        allowNull:false,
      },
      deleted:{
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull:false
      },
      created_at:{
        type:Sequelize.DATE,
        allowNull:false
      },
      updated_at:{
        type:Sequelize.DATE,
        allowNull:false
      }
  
  });

},

  

  down: (queryInterface, Sequelize) => {
  
      return queryInterface.dropTable('users_api');
    
  }
};
