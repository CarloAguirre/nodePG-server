import bcrypt from "bcrypt";
import { pool } from "../models/db.js";

const crearUsuario = async (email, password, rol, nombre) => {
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashedPassword = bcrypt.hashSync(password, salt);
    const values = [email, hashedPassword, rol, nombre];
    const consulta = "INSERT INTO usuarios (email, password, rol, nombre) VALUES ($1, $2, $3, $4)";
    const insercion = await pool.query(consulta, values);
};

const buscarUsuarioPorEmail = async (email) => {
    const consulta = "SELECT * FROM usuarios WHERE email = $1";
    const values = [email];
    const { rows, rowCount } = await pool.query(consulta, values);
    if (!rowCount) throw { code: 404, message: "No se encontró ningún usuario con este email" };
    return rows[0];
};

const verificarCredenciales = async (email, password) => {
    const values = [email]
    const consulta = "SELECT * FROM usuarios WHERE email = $1"
    const { rows: [usuario], rowCount } = await pool.query(consulta, values)
    const { password: hashedPassword } = usuario
    const passwordEsCorrecta = bcrypt.compareSync(password, hashedPassword)
    if (!passwordEsCorrecta || !rowCount)
    throw { code: 401, message: "Email o contraseña incorrecta" }
}

export{
    crearUsuario,
    buscarUsuarioPorEmail,
    verificarCredenciales
}