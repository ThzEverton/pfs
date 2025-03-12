# CRUD com Níveis de Acesso

Este projeto é um CRUD (Create, Read, Update, Delete) com níveis de acesso, desenvolvido para fins de estudo. Ele utiliza Node.js com Express para o backend e MySQL como banco de dados.

## 📌 Tecnologias Utilizadas
- **Backend:** Node.js, Express, MySQL
- **Banco de Dados:** MySQL
- **Template Engine:** EJS
- **CSS Framework:** Bootstrap

## 🎯 Funcionalidades
- Cadastro de usuários com diferentes níveis de acesso (Administrador e Usuário)
- Autenticação de usuários
- Listagem, edição e exclusão de usuários
- Controle básico de permissões

## 🚀 Como Executar o Projeto
### 1️⃣ Configurar o Banco de Dados
Antes de rodar a aplicação, crie o banco de dados e a tabela necessária:

```sql
CREATE DATABASE estudo_crud;
USE estudo_crud;

CREATE TABLE tb_usuario (
    usu_id INT AUTO_INCREMENT PRIMARY KEY,
    usu_nome VARCHAR(100) NOT NULL,
    usu_email VARCHAR(100) NOT NULL UNIQUE,
    usu_senha VARCHAR(255) NOT NULL,
    usu_nivel INT NOT NULL,
    usu_ativo TINYINT(1) DEFAULT 1
);
```

### 2️⃣ Clonar o Repositório
```bash
git clone https://github.com/seuusuario/crud-acesso.git
cd crud-acesso
```

### 3️⃣ Instalar as Dependências
```bash
npm install
```

### 4️⃣ Configurar o Banco de Dados no Projeto
Edite o arquivo `database.js` com suas credenciais do MySQL:

```js
const mysql = require("mysql2/promise");

const pool = mysql.createPool({
    host: "localhost",
    user: "seu_usuario",
    password: "sua_senha",
    database: "estudo_crud"
});

module.exports = pool;
```

### 5️⃣ Executar o Servidor
```bash
npm start
```
A aplicação estará rodando em **http://localhost:5000**

## 📂 Estrutura do Projeto
```
crud-acesso/
│-- controllers/
│   ├── usuarioController.js
│-- models/
│   ├── usuarioModel.js
│-- routes/
│   ├── rotaUsuario.js
│-- views/
│   ├── usuarios/
│   │   ├── adicionar.ejs
│   │   ├── listar.ejs
│-- public/
│-- server.js
│-- package.json
│-- README.md
```

## 🛠 Melhorias Futuras
- Implementação de autenticação JWT
- Criptografia de senhas com bcrypt
- Middleware para controle de permissões mais robusto

---

Projeto criado apenas para fins de estudo. 😊
