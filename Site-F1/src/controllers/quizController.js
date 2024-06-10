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
                        console.log("voltei no controller com o parametro de", resultadoChamar_grafico)
                        if(resultadoChamar_grafico.length == 1){
                            res.json({
                                resultadoServer1: resultadoChamar_grafico[0].resposta,
                                resultadoServer2: 'não existe',
                                resultadoServer3: 'não existe',
                                resultadoServer4: 'não existe',
                                resultadoServer5: 'não existe'
                            })
                        } else if(resultadoChamar_grafico.length == 2){
                            res.json({
                                resultadoServer1: resultadoChamar_grafico[0].resposta,
                                resultadoServer2: resultadoChamar_grafico[1].resposta,
                                resultadoServer3: 'não existe',
                                resultadoServer4: 'não existe',
                                resultadoServer5: 'não existe',
                            })
                        } else if(resultadoChamar_grafico.length == 3){
                            res.json({
                                resultadoServer1: resultadoChamar_grafico[0].resposta,
                                resultadoServer2: resultadoChamar_grafico[1].resposta,
                                resultadoServer3: resultadoChamar_grafico[2].resposta,
                                resultadoServer4: 'não existe',
                                resultadoServer5: 'não existe'
                            })
                        } else if(resultadoChamar_grafico.length == 4){
                            res.json({
                                resultadoServer1: resultadoChamar_grafico[0].resposta,
                                resultadoServer2: resultadoChamar_grafico[1].resposta,
                                resultadoServer3: resultadoChamar_grafico[2].resposta,
                                resultadoServer4: resultadoChamar_grafico[3].resposta,
                                resultadoServer5: 'não existe',
                            })
                        } else if(resultadoChamar_grafico.length == 5) {
                            res.json({
                                resultadoServer1: resultadoChamar_grafico[0].resposta,
                                resultadoServer2: resultadoChamar_grafico[1].resposta,
                                resultadoServer3: resultadoChamar_grafico[2].resposta,
                                resultadoServer4: resultadoChamar_grafico[3].resposta,
                                resultadoServer5: resultadoChamar_grafico[4].resposta,
                            })
                        } else {
                            console.log("deu erro")
                        }
                       
                    }
                )
        }


module.exports = {
    cadastrar_resposta, 
    chamar_graficos
}