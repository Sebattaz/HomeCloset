const  pool  = require("../config/db");
require("dotenv").config();

const getAdministradores = async () => {
  try {
    const data = await pool.query("SELECT * FROM administradores;");
    return data.rows;
  } catch (err) {
    console.error("Error en obtener los admi", err);
  }
};

module.exports = { getAdministradores };
