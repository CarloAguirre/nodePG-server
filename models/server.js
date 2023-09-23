import express from "express";
import cors from "cors";
import { router as productos } from "../routes/productos.js";
import { router as usuarios } from "../routes/usuarios.js";
import { router as auth } from "../routes/auth-login.js";
import { router as categorias } from "../routes/categorias.js";

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT || 3001;

        this.productosPath = '/api/productos'
        this.usuariosPath  = '/api/usuarios'
        this.authPath  = '/api/auth'
        this.categoriasPath  = '/api/categorias'

        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use(express.json())
        this.app.use(cors())
    }

    listen(){
        this.app.listen((this.port), ()=>{
            console.log(`Servidor corriendo en puerto ${this.port}`)
        })
    }

    routes(){
        this.app.use(this.productosPath, productos)
        this.app.use(this.usuariosPath, usuarios)
        this.app.use(this.authPath, auth)
        this.app.use(this.categoriasPath, categorias)
    }
    
}

    
export{Server}