import pkg from 'pg';
const { Pool } = pkg;
import bcrypt from "bcrypt";

const pool = new Pool({
 host: 'localhost',
 user: 'postgres',
 password: '$Ony3434', 
 database: 'marketplace',
 allowExitOnIdle: true
})

const crearUsuario = async (email, password, rol, nombre) => {

    const saltRounds = 5; // Número de rondas de hashing
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashedPassword = bcrypt.hashSync(password, salt);
    const values = [email, hashedPassword, rol, nombre];
    const consulta = "INSERT INTO usuarios (email, password, rol, nombre) VALUES ($1, $2, $3, $4)";
    const insercion = await pool.query(consulta, values);
    console.log(insercion)
};

const buscarUsuarioPorEmail = async (email) => {
    const consulta = "SELECT * FROM usuarios WHERE email = $1";
    const values = [email];
    const { rows, rowCount } = await pool.query(consulta, values);
    if (!rowCount) throw { code: 404, message: "No se encontró ningún usuario con este email" };
    return rows[0];
  };

export{
    crearUsuario,
    buscarUsuarioPorEmail
}