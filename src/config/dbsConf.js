

const getConnections = () => {
    if (process.env.NODE_ENV == "production") {
      return {
        DB_MYSQL_HOST: "mgs0iaapcj3p9srz.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        DB_MYSQL_PORT: 3306,
        DB_MYSQL_USER: "hnayrt8acthzccg8",
        DB_MYSQL_PASSWORD: "xmflllymrs5i1hcn",
        DB_MYSQL_DBNAME: "x10795mnx91gg6n6",
        DB_MYSQL_TIMEOUT: 10000000
      };
    } else if (process.env.NODE_ENV == "development") {
      return {
        DB_MYSQL_HOST: "mgs0iaapcj3p9srz.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        DB_MYSQL_PORT: 3306,
        DB_MYSQL_USER: "hnayrt8acthzccg8",
        DB_MYSQL_PASSWORD: "xmflllymrs5i1hcn",
        DB_MYSQL_DBNAME: "x10795mnx91gg6n6",
        DB_MYSQL_TIMEOUT: 10000000
      };
    } else {
      return {
        DB_MYSQL_HOST: "mgs0iaapcj3p9srz.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        DB_MYSQL_PORT: 3306,
        DB_MYSQL_USER: "hnayrt8acthzccg8",
        DB_MYSQL_PASSWORD: "xmflllymrs5i1hcn",
        DB_MYSQL_DBNAME: "x10795mnx91gg6n6",
        DB_MYSQL_TIMEOUT: 10000000
      };
    }
  };
  
  module.exports = getConnections();