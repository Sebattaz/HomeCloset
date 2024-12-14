const  pool  = require("../config/db");
require("dotenv").config();
const bcrypt = require("bcrypt")

const getAdministradores = async () => {
  try {
    const data = await pool.query("SELECT * FROM administradores;");
    return data.rows;
  } catch (err) {
    console.error("Error en obtener los admi", err);
  }
};

const agregarUsuario = async (rut, password, email, nombre, edad, direccion) =>{
    try
    {
        console.log(password);
        const passwordEncriptada = bcrypt.hash(password,10);
        
        
        

        const add =
        "INSERT INTO usuarios VALUES ($1, $2, $3, $4, $5, $6)";
        const values =[rut, passwordEncriptada, email, nombre, edad, direccion];
        const { rowsCount } = await pool.query(add, values);
        return rowsCount;
    }
    catch(err){
        console.log("Error al ingresar Usuario", err);
        res.status(500).json({ error: "Error al ingresar usuario" });
    }
}

module.exports = { getAdministradores, agregarUsuario };