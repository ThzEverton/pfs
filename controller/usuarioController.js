const UsuarioModel = require("../models/usuarioModel");

class UsuarioController {

    async listarView(req, res) {
        let model = new UsuarioModel();
        let listaUsuarios = await model.obter(1);
        res.render('usuarios/listar.ejs', { usuarios: listaUsuarios });
    }

    async cadastrarView(req, res) {
        res.render('usuarios/adicionar.ejs'); // Exibe o formulário de cadastro
    }

    async cadastrar(req, res) {
        const { nome, email, senha, nivel } = req.body;
        let model = new UsuarioModel();

        try {
            await model.inserir(nome, email, senha, nivel);
            res.redirect("/usuarios"); 
        } catch (error) {
            console.error("Erro ao cadastrar usuário:", error);
            res.status(500).send("Erro no cadastro");
        }
    }
}

module.exports = UsuarioController;
