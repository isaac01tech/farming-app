
// const { config } = require("dotenv"); 

// config();



  //PORT : 
    const PORT = process.env.PORT || 3500;  
    // const PORT = process.env.PORT; // port is undefined ...
    // HOST : 
    const FARM_APP_MONGODB_HOST = process.env.FARM_APP_MONGODB_HOST || "localhost:27017";

    // DATABASE : 
    const FARM_APP_MONGODB_DATABASE = process.env.MONGODB_DB || "test01";

    const MONGODB_URI = `mongodb+srv://${process.env.MONGODB_HOST || "localhost:27017"}/${process.env.MONGODB_DATABASE || "test01"}`;    

module.exports = {  PORT, FARM_APP_MONGODB_HOST, FARM_APP_MONGODB_DATABASE, MONGODB_URI }; 


// // -------------------------------
// // -------------------------------

// const configurations = {
//   PORT: process.env.PORT || 4000,
//   FARM_APP_MONGODB_HOST: process.env.FARM_APP_MONGODB_HOST || "localhost:27017",
//   FARM_APP_MONGODB_DATABASE: process.env.MONGODB_DB || "test01",
//   MONGODB_URI: `mongodb://${process.env.MONGODB_HOST || "localhost:27017"}/${
//     process.env.MONGODB_DATABASE || "test01"
//   }`,
// };

// // export default configurations;
// module.exports = {  configurations }; 
