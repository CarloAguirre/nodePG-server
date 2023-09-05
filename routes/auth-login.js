import { Router } from "express";
import { loginUsuario } from "../controllers/auth-login.js";
import { existeUsuario } from "../middlewares/verificarCredenciales.js";


const router = Router()

router.post("/login", [existeUsuario], loginUsuario)

export{router}