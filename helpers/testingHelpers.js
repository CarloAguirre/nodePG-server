import request from "supertest";
import jwt from "jsonwebtoken";
import { Server } from "../models/server";
const server = new Server()

const getProductos = async()=>{
    const response = await request(server.app)
           .get("/api/productos")
       return response
}

const postLogin = async(userData)=>{
    const response = await request(server.app)
           .post("/api/auth/login")
           .send(userData)
       return response
}

const nonexistentId = (productosArray)=>{
    const maxId = productosArray.reduce((max, producto) => {
        const productId = parseInt(producto.id);
        return productId > max ? productId : max;
    }, 0);
    const newId = maxId + 1;
    return newId
}

const postProduct = async(nuevoProducto)=>{
    const token = jwt.sign({ usuarioId: "123456" }, "az_AZ");
    const response = await request(server.app)
    .post("/api/productos/")
    .set("Authorization", `Bearer ${token}`)
    .send(nuevoProducto);
    return response
}

const deleteProduct = async(body)=>{
    const jwt = "";
    const response = await request(server.app)
    .delete(`/api/productos/${body.productos[0].id}`)
    .set("Authorization", `Bearer ${jwt}`)
    .send();
    return response
}

export{
    getProductos,
    nonexistentId,
    postLogin,
    postProduct,
    deleteProduct
}