
import { response } from "express"
import { buscarFavoritos, categoriaPorNombre, nuevaCategoria } from "../helpers/dbHelpers.js";

const getFavoritos = async(req, res = response)=>{
    console.log('estoy aca')
    try {
       const favoritos = await buscarFavoritos()
       res.status(200).json({
            favoritos
       })
    } catch (error) {
        console.log(error);
        res.status(error.code || 500).json(error);
    }
}

const postFavorito = async(req, res = response)=>{
    try {
        const {id_usuario, id_producto} = req.body
        const categoria = await nuevoFavorito(id_usuario, id_producto)
        res.status(201).json({
            categoria
        })
    } catch (error) {
        console.log(error);
        res.status(error.code || 500).json(error);
    }
}


export{
    getFavoritos,
    postFavorito
}