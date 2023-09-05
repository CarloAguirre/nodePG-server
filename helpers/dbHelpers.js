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
    if (!rowCount) throw { code: 404, msg: "No se encontró ningún usuario con este email" };
    return rows[0];
};

const verificarCredenciales = async (email, password) => {
    const values = [email]
    const consulta = "SELECT * FROM usuarios WHERE email = $1"
    const { rows: [usuario], rowCount } = await pool.query(consulta, values)
    if (!usuario){
        throw { code: 401, msg: "Email incorrecto" }
    }else{     
        const { password: hashedPassword } = usuario
        const passwordEsCorrecta = bcrypt.compareSync(password, hashedPassword)
        if (!passwordEsCorrecta || !rowCount)
        throw { code: 401, msg: "Contraseña incorrecta" }
        return usuario;
    }
}

const buscarProductos = async()=>{
    const consulta = "SELECT * FROM productos"
    const { rows, rowCount } = await pool.query(consulta);
    if (!rowCount) throw { code: 404, msg: "No se encontró ningún producto" };
    return rows
}

const nuevoProducto = async(id_usuario, id_categoria, nombre, precio, descripcion, img1, img2)=>{
    const values = [id_usuario, id_categoria, nombre, precio, descripcion, img1, img2]
    const consulta = "INSERT INTO productos (id_usuario, id_categoria, nombre, precio, descripcion, img1, img2) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *";
    const { rows, rowCount } = await pool.query(consulta, values);
    if (!rowCount) throw { code: 404, msg: "No se pudo crear el producto" };
    return rows[0]
}

export{
    crearUsuario,
    buscarUsuarioPorEmail,
    verificarCredenciales,
    buscarProductos,
    nuevoProducto
}