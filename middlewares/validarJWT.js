import jwt from "jsonwebtoken";

const validarToken = (req, res, next) => {
    const Authorization = req.header("Authorization");
    const token = Authorization ? Authorization.split("Bearer ")[1] : null;
    try {
      if (!token) throw { code: 401, message: "Token no proporcionado" };
      jwt.verify(token, "az_AZ");
      const { email } = jwt.decode(token);
      req.email = email;
      next(); 
    } catch (error) {
      res.status(error.code || 401).json({ message: "Token inválido" });
    }
  };

export{
    validarToken
}