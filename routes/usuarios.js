import { Router } from "express";
import { postUsuario } from "../controllers/usuarios.js";

const router = Router()

router.post("/", postUsuario);

export{router}