import { Router } from "express";
import { getProductos } from "../controllers/productos.js";

const router = Router()

router.get('/', getProductos)

export{router}