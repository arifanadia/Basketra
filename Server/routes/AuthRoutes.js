const { Router } = require("express");
const { signUp } = require("../controllers/AuthControllers");

const authRoutes = Router();

authRoutes.post('/signup' , signUp)

module.exports = authRoutes;