
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

CREATE TABLE noticia (
    idNoticia INT PRIMARY KEY AUTO_INCREMENT,
    visualizadas INT,
    naoVisualizadas INT,
    fkUsuario INT,
    FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
);





select * from noticia;




SELECT 
    noticia.visualizadas AS vizualização,
    noticia.naoVisualizadas AS naoVisualizadas,
    usuario.nome AS nomeUsuario
FROM noticia
JOIN usuario ON noticia.fkUsuario = usuario.idUsuario;
