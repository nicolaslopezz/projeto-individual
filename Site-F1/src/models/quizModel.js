var database = require("../database/config")
function cadastrar_resposta(pontuacao, idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", pontuacao,idUsuario);
    var instrucaoSql = `
        INSERT INTO quiz (resposta, fkUsuario) VALUES (${pontuacao}, ${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function chamar_graficos(idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", idUsuario);
    var instrucaoSql = `
    SELECT quiz.resposta as resposta,
    usuario.nome as nome,
    usuario.idUsuario as idUsuario
FROM quiz JOIN usuario ON fkUsuario = idUsuario 
 WHERE idResposta = (SELECT max(idResposta) from quiz) ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    cadastrar_resposta,
    chamar_graficos
};