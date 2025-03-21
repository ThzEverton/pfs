const Database = require("../utils/database");


class UsuarioModel {

    #id;
    #nome;
    #email;
    #senha;
    #ativo;

    #perfilId;

    get id() {
        return this.#id;
    }
    set id(value) {
        this.#id = value;
    }

    get nome() {
        return this.#nome;
    }
    set nome(value) {
        this.#nome = value;
    }

    get email() {
        return this.#email;
    }
    set email(value) {
        this.#email = value;
    }

    get senha() {
        return this.#senha;
    }
    set senha(value) {
        this.#senha = value;
    }

    get ativo() {
        return this.#ativo;
    }
    set ativo(value) {
        this.#ativo = value;
    }

    get perfilId() {
        return this.#perfilId;
    }
    set perfilId(value) {
        this.#perfilId = value;
    }

    constructor(id, nome, email, senha, ativo, perfilId) {
        this.#id = id;
        this.#nome = nome;
        this.#email = email;
        this.#senha = senha;
        this.#ativo = ativo;
        this.#perfilId = perfilId;
    }

    async obter(id) {
        let sql = "SELECT * FROM tb_usuario WHERE usu_id = ?";
        let valores = [id];
        let banco = new Database();
        let lista = [];
        let rows = await banco.ExecutaComando(sql, valores);

        for (let i = 0; i < rows.length; i++) {
            lista.push(new UsuarioModel(
                rows[i]["usu_id"],
                rows[i]["usu_nome"],
                rows[i]["usu_email"],
                rows[i]["usu_senha"],
                rows[i]["usu_ativo"],
                rows[i]["per_id"]
            ));
        }

        return lista;
    }

    async listar() {
        let sql = "SELECT * FROM tb_usuario";
        let banco = new Database();
        let lista = [];
        let rows = await banco.ExecutaComando(sql);

        for (let i = 0; i < rows.length; i++) {
            lista.push(new UsuarioModel(
                rows[i]["usu_id"],
                rows[i]["usu_nome"],
                rows[i]["usu_email"],
                rows[i]["usu_senha"],
                rows[i]["usu_ativo"],
                rows[i]["per_id"]
            ));
        }

        return lista;
    }

    async inserir(nome, email, senha, nivel) {
        let sql = "INSERT INTO tb_usuario (usu_nome, usu_email, usu_senha, usu_nivel, usu_ativo) VALUES (?, ?, ?, ?, ?)";
        let valores = [nome, email, senha, nivel, 1]; // Define usu_ativo como 1 e per_id como NULL
        
        

        let banco = new Database();
        return await banco.ExecutaComando(sql, valores);
    }
}

module.exports = UsuarioModel;
