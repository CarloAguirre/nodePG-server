import { Router } from "express";
import { postUsuario } from "../controllers/usuarios.js";
import { existeMail } from "../middlewares/verificarCredenciales.js";

const router = Router()

router.post("/", [existeMail], postUsuario);



export{router}