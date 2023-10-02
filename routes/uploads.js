import { Router } from "express";
import { postProductoImagenes } from "../controllers/uploads.js";

const router = Router()

router.put('/productos/:id', postProductoImagenes)

export{router}