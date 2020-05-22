const express = require("express")
const server = express()

// Configurando o servidor para apresentar arquivos estáticos.
server.use(express.static("public"))

// Configurando a template engine
const nunjucks = require("nunjucks")
nunjucks.configure("./", {
    express: server
})

// Configurando requisições.
server.get("/", function(req, res) {
    return res.render("index.html")
})

// Iniciando servidor e permitindo acesso pela porta 3000.
server.listen(3000)