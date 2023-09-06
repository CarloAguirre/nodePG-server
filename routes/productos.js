import { Router } from "express";
import { deleteProducto, getProducto, getProductos, postProducto } from "../controllers/productos.js";
import { validarToken } from "../middlewares/validarJWT.js";

const router = Router()

router.get('/', getProductos)

router.get('/:id', getProducto)

router.post('/', [validarToken], postProducto)

router.delete("/:id",[validarToken], deleteProducto)

export{router}