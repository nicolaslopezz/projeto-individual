var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.get("/ranking", function(req, res){
    usuarioController.ranking(req, res);
})

router.post("/noticias", function (req, res) {
    usuarioController.noticias(req, res);
}); // Criando a rota para as noticias 

module.exports = router;