
import { response } from "express"
import { buscarCategorias, categoriaPorNombre, nuevaCategoria } from "../helpers/dbHelpers.js";

const getCategorias = async(req, res = response)=>{
    try {
       const categorias = await buscarCategorias()
       res.status(200).json({
            categorias
       })
    } catch (error) {
        console.log(error);
        res.status(error.code || 500).json(error);
    }
}

const getCategoria = async(req, res = response)=>{
    try {
        const {nombre} = req.params;
        const categoria = await categoriaPorNombre(nombre)
        res.status(200).json({
                categoria
        })
    } catch (error) {
        console.log(error);
        res.status(error.code || 500).json(error);
    }
}

const postCategoria = async(req, res = response)=>{
    try {
        const {nombre} = req.body
        const categoria = await nuevaCategoria(nombre)
        res.status(201).json({
            categoria
        })
    } catch (error) {
        console.log(error);
        res.status(error.code || 500).json(error);
    }
}


export{
    getCategorias,
    postCategoria,
    getCategoria
}