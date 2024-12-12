require("dotenv").config();
const { Pool } = require("pg");

    const pool = new Pool({
      host: process.env.PG_HOST,
      user: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      port: process.env.PG_PORT,
      database:  process.env.PG_DATABASE,
      allowExitOnIdle: true,
    });
  
module.exports =  pool ;