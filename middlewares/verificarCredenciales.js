import { verificarCredenciales } from "../helpers/dbHelpers.js";


const existeUsuario = async (req, res, next) => {
    const { email, password } = req.body;
    try {
      await verificarCredenciales(email, password);
      next(); 
    } catch (error) {
      res.status(error.code || 401).send(error);
    }
  };

export {
    existeUsuario
}