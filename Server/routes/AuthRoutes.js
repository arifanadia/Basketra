const { Router } = require("express");
const { signUp, login } = require("../controllers/AuthControllers");

const authRoutes = Router();

authRoutes.post('/signup' , signUp);
authRoutes.post('/login' , login);

module.exports = authRoutes;