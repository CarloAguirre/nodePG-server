import { buscarUsuarioPorEmail, verificarCredenciales } from "../helpers/dbHelpers.js";


const existeUsuario = async(req, res, next) => {
    const { email, password } = req.body;
    try {
      await verificarCredenciales(email, password);
      next(); 
    } catch (error) {
      res.status(error.code || 401).send(error);
    }
  };

  const existeMail = async (req, res, next) => {
    const { email } = req.body;
    try {
      const existingUser = await buscarUsuarioPorEmail(email);
      if (existingUser) {
        return res.status(409).json({ msg: "Este correo electrónico ya está en uso." });
      }
      next();
    } catch (error) {
      res.status(error.code || 500).json(error);
    }
  }
  

export {
    existeUsuario, 
    existeMail
}