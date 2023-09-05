import { Router } from "express";
import { getProducto, getProductos, postProducto } from "../controllers/productos.js";
import { validarToken } from "../middlewares/validarJWT.js";

const router = Router()

router.get('/', getProductos)

router.get('/:id', getProducto)

router.post('/', [validarToken], postProducto)

export{router}