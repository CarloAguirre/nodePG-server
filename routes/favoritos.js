import { Router } from "express";
import { validarToken } from "../middlewares/validarJWT.js";
import { getFavoritos, postFavorito } from "../controllers/favoritos.js";

const router = Router()

router.get('/', getFavoritos)

router.post('/', [validarToken], postFavorito)

export{router}