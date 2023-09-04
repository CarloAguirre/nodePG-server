import express from "express";
import cors from "cors";
import { router as productos } from "../routes/productos.js";


class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        this.productosPath = '/api/productos'

        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use(cors())
        this.app.use(express.json())
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Servidor corriendo en puerto ${this.port}`)
        })
    }

    routes(){
        this.app.use(this.productosPath, productos)
    }
}
    
export{Server}