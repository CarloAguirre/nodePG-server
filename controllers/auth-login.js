
import { response } from "express"
import  jwt  from "jsonwebtoken";
import { buscarUsuarioPorEmail, verificarCredenciales } from "../helpers/dbHelpers.js";


const loginUsuario = async(req, res = response) =>{
    try {
      const {email, password} = req.body
      const token = jwt.sign({ email: req.body.email }, "az_AZ");
      const usuario = await verificarCredenciales(email, password);
      res.json({
        usuario,
        token
    });
    } catch (error) {
      console.log(error);
      res.status(error.code || 500).json(error);
    }
  }

export{
    loginUsuario
}