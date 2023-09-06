
import { response } from "express"
import { borrarProducto, buscarProductos, nuevoProducto, productoPorId } from "../helpers/dbHelpers.js";

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

const getProducto = async(req, res = response)=>{
    try {
        const {id} = req.params;
        const producto = await productoPorId(id)
        res.status(200).json({
                producto
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
        res.status(201).json({
            producto
        })
    } catch (error) {
        console.log(error);
        res.status(error.code || 500).json(error);
    }
}

const deleteProducto = async(req, res = response) =>{
    const { id } = req.params
    const productos = await buscarProductos()
    const productoIndexFound = productos.findIndex(producto => producto.id == id)

    if (productoIndexFound >= 0) {
        await borrarProducto(id)
        res.status(200).json({
            msg: `Producto de id ${id} eliminado con exito`,
        })
    } else {
        res.status(404).send({ msg: "No se encontró ningún producto con ese id" })
    }
}

export{
    getProductos,
    postProducto,
    getProducto, 
    deleteProducto
}