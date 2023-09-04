
import { response } from "express"

const getProductos = (req, res = response)=>{
    const get = 'GET'
    res.json({
        get
    })
}

export{
    getProductos
}