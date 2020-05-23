const express = require("express")
const server = express()

// Configurando o servidor para apresentar arquivos estáticos.
server.use(express.static("public"))

// Habilitando o body do formulário.
server.use(express.urlencoded({ extended: true }))

// Configurando a template engine
const nunjucks = require("nunjucks")
nunjucks.configure("./", {
    express: server,
    noCache: true
})

const donors = [
    {
        name: "Nardo Gomes",
        blood: "AB+"
    },
    {
        name: "Rodrigo Silva",
        blood: "A+"
    },
    {
        name: "Mateus Pereira",
        blood: "B+"
    },
    {
        name: "Lucas Santos",
        blood: "O+"
    }
]

// Configurando requisições.
server.get("/", function(req, res) {
    return res.render("index.html", { donors })
})

server.post("/", function(req, res) {
    const name = req.body.name
    const email = req.body.email
    const blood = req.body.blood

    donors.push({
        name,
        blood
    })

    return res.redirect("/")
})

// Iniciando servidor e permitindo acesso pela porta 3000.
server.listen(3000)