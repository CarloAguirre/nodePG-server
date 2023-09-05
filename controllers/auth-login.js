
import { response } from "express"
import  jwt  from "jsonwebtoken";
import { buscarUsuarioPorEmail } from "../helpers/dbHelpers.js";


const loginUsuario = async(req, res = response) =>{
    try {
      const {email} = req.body
      const token = jwt.sign({ email: req.body.email }, "az_AZ");
      const usuario = await buscarUsuarioPorEmail(email);
      res.json({
        usuario,
        token
    });
    } catch (error) {
      console.log(error);
      res.status(error.code || 500).send(error);
    }
  }

export{
    loginUsuario
}