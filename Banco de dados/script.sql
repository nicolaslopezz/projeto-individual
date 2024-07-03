create database projetoindividual;
use projetoindividual;


create table usuario(
idUsuario int primary key auto_increment,
nome varchar(99),
email varchar(99),
cpf char(11),
senha varchar(45));

select * from usuario;
select * from quiz;

CREATE TABLE quiz (
    idResposta INT PRIMARY KEY AUTO_INCREMENT,
    resposta VARCHAR(99),
    fkUsuario INT,
    FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
);

SELECT quiz.resposta as resposta,
    usuario.nome as nome,
    usuario.idUsuario as idUsuario
FROM quiz JOIN usuario ON fkUsuario = idUsuario 
where idUsuario = idUsuario
limit 5;


CREATE TABLE ranking (
    idRanking INT PRIMARY KEY AUTO_INCREMENT,
    fkUsuario INT,
    acertos INT,
    FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
);

SELECT usuario.nome AS nome,
    ranking.acertos AS acertos
FROM ranking
JOIN usuario ON ranking.fkUsuario = usuario.idUsuario
ORDER BY ranking.acertos DESC
LIMIT 10;
