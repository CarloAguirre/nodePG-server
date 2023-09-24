
import { response } from "express"
import { buscarFavoritos, nuevoFavorito } from "../helpers/dbHelpers.js";

const getFavoritos = async(req, res = response)=>{
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
        const favorito = await nuevoFavorito(id_usuario, id_producto)
        res.status(201).json({
            favorito
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