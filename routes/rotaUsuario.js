const express = require("express");
const UsuarioController = require("../controller/usuarioController");

const router = express.Router();

let ctrl = new UsuarioController();
router.get("/", ctrl.listarView);
router.get("/adicionar", (req, res) => ctrl.cadastrarView(req, res));
router.post("/cadastrar", (req, res) => ctrl.cadastrar(req, res));

module.exports = router;