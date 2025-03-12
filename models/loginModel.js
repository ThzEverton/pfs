const Database = require("../utils/database");

class LoginModel {
    async autenticar(email, senha) {
        let sql = "SELECT * FROM tb_usuario WHERE usu_email = ? AND usu_senha = ? AND usu_ativo = 1";
        let valores = [email, senha];

        let banco = new Database();
        let rows = await banco.ExecutaComando(sql, valores);

        return rows.length > 0 ? rows[0] : null; // Retorna o usuário se encontrado, senão retorna null
    }
}

module.exports = LoginModel;
