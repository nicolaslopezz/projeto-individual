var quizModel = require("../models/quizModel");



function cadastrar_resposta(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var pontuacao = req.body.resposta;
    var idUsuario = req.body.idUsuario;

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        quizModel.cadastrar_resposta(pontuacao, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }



    function chamar_graficos(req, res) {
        var idUsuario = req.body.idUsuario;
            quizModel.chamar_graficos(idUsuario)
                .then(
                    function (resultadoChamar_grafico) {
                        res.json({
                            resultadoChamar_grafico
                        });
                    }
                )
        }


module.exports = {
    cadastrar_resposta, 
    chamar_graficos
}