import express from "express";
import cors from "cors";
import fileUpload from 'express-fileupload';
import { router as productos } from "../routes/productos.js";
import { router as usuarios } from "../routes/usuarios.js";
import { router as auth } from "../routes/auth-login.js";
import { router as categorias } from "../routes/categorias.js";
import { router as favoritos} from "../routes/favoritos.js";
import { router as uploads} from "../routes/uploads.js";

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT || 3001;

        this.productosPath = '/api/productos'
        this.usuariosPath  = '/api/usuarios'
        this.authPath  = '/api/auth'
        this.categoriasPath  = '/api/categorias'
        this.favoritosPath  = '/api/favoritos'
        this.uploadsPath  = '/api/uploads'

        this.middlewares();
        this.routes();
        this.startDataFetch();
    }

    middlewares(){
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(cors())
        this.app.use(fileUpload({
            // limits: { fileSize: 50 * 1024 * 1024 },
            useTempFiles : true,
            tempFileDir : '/tmp/',
            createParentPath: true
        }));
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
        this.app.use(this.favoritosPath, favoritos)
        this.app.use(this.uploadsPath, uploads)
    }

    async dataFetch() {
        const urlServer = process.env.VITE_REACT_APP_APIURL;
        try {
            const response = await fetch(`${urlServer}/api/productos`);
            const data = await response.json();
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    startDataFetch() {
        this.dataFetch(); // Ejecuta inmediatamente al iniciar el servidor
        setInterval(() => this.dataFetch(), 10 * 60 * 1000); // Cada 10 minutos
    }

    
}

    
export{Server}