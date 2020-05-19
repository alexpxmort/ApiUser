

const config = require("./dbsConf");
module.exports ={
    dialect:'mysql',
    host:config.DB_MYSQL_HOST,
    username:config.DB_MYSQL_USER,
    password:config.DB_MYSQL_PASSWORD,
    database:config.DB_MYSQL_DBNAME,
    define:{
        timestamps:true,
        underscored:true
    }
}


