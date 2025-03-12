const LoginModel = require("../models/loginModel");

class LoginController {
    loginView(req, res) {
        res.render('login.ejs', { layout: false });
    }

    async login(req, res) {
        const { usuario, senha } = req.body;
        let msg = "Usuário ou senha inválidos";
        let cor = "red";

        try {
            let loginModel = new LoginModel();
            let usuarioAutenticado = await loginModel.autenticar(usuario, senha);

            if (usuarioAutenticado) {
               
                if (usuarioAutenticado.usu_nivel === 1) {
                    return res.redirect("/usuario");
                }
                return res.redirect("/");
            }
        } catch (error) {
            console.error("Erro na autenticação:", error);
        }

        res.render('login.ejs', { mensagem: msg, color: cor, layout: false });
    }
}

module.exports = LoginController;
