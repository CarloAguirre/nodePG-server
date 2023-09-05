import { Router } from "express";
import { getProductos, postProducto } from "../controllers/productos.js";
import { validarToken } from "../middlewares/validarJWT.js";

const router = Router()

router.get('/', getProductos)

router.post('/', [validarToken], postProducto)

export{router}