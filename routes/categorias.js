import { Router } from "express";
import { validarToken } from "../middlewares/validarJWT.js";
import { getCategoria, getCategorias, postCategoria } from "../controllers/categorias.js";

const router = Router()

router.get('/', getCategorias)

router.get('/:id', getCategoria)

router.post('/', [validarToken], postCategoria)

export{router}