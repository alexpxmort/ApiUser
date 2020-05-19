const {Model,DataTypes} = require('sequelize');

class User extends Model{
    static init(sequelize){
        super.init({
            createdAt: {
                field: 'created_at',
                type: DataTypes.DATE,
            },
            updatedAt: {
                type: DataTypes.DATE,
                field: 'updated_at',
            },
            email:{
                type: DataTypes.STRING,
                field: 'email',
            },
             name:{
                type: DataTypes.STRING,
                field: 'name',
            },
            user_name:{
                type: DataTypes.STRING,
                field: 'user_name',
            },
            deleted:{
                type: DataTypes.BOOLEAN,
                field: 'deleted',
            },
            password:{
                type: DataTypes.STRING,
                field: 'password',
            },
        },
        {
            sequelize,
            freezeTableName: true,
            tableName: 'users_api',
        })
    }

}

module.exports = User;
