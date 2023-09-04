
import { response } from "express";
import { buscarUsuarioPorEmail, crearUsuario } from "../models/db.js";

const postUsuario = async(req, res = response) => {
    try {
      const { email, password, rol, nombre } = req.body;
      await crearUsuario(email, password, rol, nombre);
      const usuarioCreado = await buscarUsuarioPorEmail(email);
      res.status(201).json({
        usuraio: usuarioCreado
      });

    } catch (error) {
      console.log(error);
      res.status(error.code || 500).send(error);
    }
  }

  export{
    postUsuario
  }