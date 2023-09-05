
import { response } from "express"
import { buscarProductos, nuevoProducto } from "../helpers/dbHelpers.js";

const getProductos = async(req, res = response)=>{
    try {
       const productos = await buscarProductos()
       res.status(200).json({
            productos
       })
    } catch (error) {
        console.log(error);
        res.status(error.code || 500).json(error);
    }
}

const postProducto = async(req, res = response)=>{
    try {
        const {id_usuario, id_categoria, nombre, precio, descripcion, img1, img2} = req.body
       const producto = await nuevoProducto(id_usuario, id_categoria, nombre, precio, descripcion, img1, img2)
       res.status(200).json({
            producto
       })
    } catch (error) {
        console.log(error);
        res.status(error.code || 500).json(error);
    }
}

export{
    getProductos,
    postProducto
}