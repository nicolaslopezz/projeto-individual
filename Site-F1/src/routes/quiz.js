var express = require("express");
var router = express.Router();
var quizController = require("../controllers/quizController");

router.post("/cadastrar_resposta/", function (req, res) {
    quizController.cadastrar_resposta(req, res);
});

router.post("/chamar_graficos/", function (req, res) {
    quizController.chamar_graficos(req, res);
});





module.exports = router;

