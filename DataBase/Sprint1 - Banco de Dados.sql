drop table USUARIO cascade constraints;
drop table TIPO_ITEM cascade constraints;
drop table FORNECEDOR cascade constraints;
drop table COMPRA cascade constraints;
drop table ITENS cascade constraints;
drop table FORNECEDOR_ITENS cascade constraints;
drop table COMPRA_ITENS cascade constraints;

- CRIANDO TABELAS

create table USUARIO(
CPF number(11) primary key,
NOME varchar(50) not null,
EMAIL varchar(50) not null,
SENHA varchar(50) not null,
TELEFONE varchar(50) not null,
CEP_ENTREGA number(8) not null,
LOGRADOURO varchar(50) not null,
NUMERO_LOGRADOURO number(5) not null,
COMPLEMENTO varchar(50)
);

create table TIPO_ITEM(
ID_TIPO_ITEM number(3) primary key,
NOME varchar(50) not null,
DESCRICAO varchar(250) not null
);

create table FORNECEDOR(
CNPJ number(14) primary key,
NOME varchar(50) not null,
TELEFONE number(11) not null,
REPUTACAO varchar(50) not null
);

create table COMPRA(
ID_COMPRA number(9) primary key,
COD_CONTRATO varchar(50) not null,
DATA_COMPRA date,
VALOR_TOTAL number(11,2),
FK_USUARIO_CPF number(11) references USUARIO(CPF)
);

create table ITENS(
ID_ITENS number(5) primary key,
NOME varchar(50) not null,
VALOR number(11,2) not null,
DESCRICAO varchar(250) not null,
FK_TIPO_ITEM_ID number(3) references TIPO_ITEM(ID_TIPO_ITEM)
);

create table FORNECEDOR_ITENS(
QUANTIDADE number(11,2) not null,
FK_ITENS_ID number(5) references ITENS(ID_ITENS),
FK_FORNECEDOR_CNPJ number(14) references FORNECEDOR(CNPJ)
);

create table COMPRA_ITENS(
QUANTIDADE number(11,2) not null,
FK_COMPRA_ID number(9) references COMPRA(ID_COMPRA),
FK_ITENS_ID number(5) references ITENS(ID_ITENS)
);

---Inserindo Dados---


INSERT INTO USUARIO VALUES(45678901234, 'Luiz Pereira', 'luiz.pereira@email.com', 'senhaluiz', '555-890-1234', 12340, 'Rua das Estrelas', 90, 'Apartamento 101');
INSERT INTO USUARIO VALUES(12345678901, 'João Silva', 'joao.silva@email.com', 'senhajoao', '555-987-6543', 54321, 'Rua das Flores', 456, 'Apto 202');
INSERT INTO USUARIO VALUES(98765432109, 'Maria Santos', 'maria.santos@email.com', 'senhamaria', '555-123-4567', 12345, 'Avenida Central', 123, NULL);
INSERT INTO USUARIO VALUES(45678912305, 'Carlos Oliveira', 'carlos.oliveira@email.com', 'senhacarlos', '555-789-1234', 98765, 'Travessa dos Sonhos', 789, 'Bloco B, Sala 101');
INSERT INTO USUARIO VALUES(78901234506, 'Ana Costa', 'ana.costa@email.com', 'senhaana', '555-234-5678', 67890, 'Praça da Liberdade', 234, 'Casa 3');
INSERT INTO USUARIO VALUES(23456789012, 'Fernanda Pereira', 'fernanda.pereira@email.com', 'senhafernanda', '555-345-6789', 12345, 'Rua do Bosque', 56, 'Casa Verde');
INSERT INTO USUARIO VALUES(34567890123, 'Ricardo Santos', 'ricardo.santos@email.com', 'ricardo123', '555-456-7890', 67890, 'Alameda das Palmeiras', 789, 'Apartamento 405');
INSERT INTO USUARIO VALUES(56789012345, 'Lucia Souza', 'lucia.souza@email.com', 'senha123lucia', '555-567-8901', 89012, 'Avenida dos Ventos', 789, NULL);
INSERT INTO USUARIO VALUES(89012345678, 'Pedro Fernandes', 'pedro.fernandes@email.com', 'senhafernandes', '555-678-9012', 90123, 'Rua das Montanhas', 123, 'Bloco C, Sala 302');
INSERT INTO USUARIO VALUES(67890123456, 'Sandra Lima', 'sandra.lima@email.com', 'limasandra', '555-789-0123', 90123, 'Rua das Rosas', 234, 'Casa 2');


INSERT INTO TIPO_ITEM VALUES(1, 'Eletrônicos', 'Aparelhos e dispositivos eletrônicos');
INSERT INTO TIPO_ITEM VALUES(2, 'Roupas', 'Vestuário e itens de moda');
INSERT INTO TIPO_ITEM VALUES(3, 'Livros', 'Livros de diversos gêneros');
INSERT INTO TIPO_ITEM VALUES(4, 'Alimentos', 'Produtos alimentícios e mantimentos');
INSERT INTO TIPO_ITEM VALUES(5, 'Móveis', 'Móveis para a casa e escritório');
INSERT INTO TIPO_ITEM VALUES(6, 'Esportes', 'Equipamentos esportivos e artigos relacionados');
INSERT INTO TIPO_ITEM VALUES(7, 'Beleza', 'Produtos de beleza e cuidados pessoais');
INSERT INTO TIPO_ITEM VALUES(8, 'Jogos', 'Jogos e entretenimento digital');
INSERT INTO TIPO_ITEM VALUES(9, 'Automóveis', 'Peças e acessórios automotivos');
INSERT INTO TIPO_ITEM VALUES(10, 'Ferramentas', 'Ferramentas e equipamentos de construção');



INSERT INTO FORNECEDOR VALUES(12345678901234, 'TecnologiaBrasil Ltda.', 8005551234, 'Excelente');
INSERT INTO FORNECEDOR VALUES(98765432109876, 'ModaElegante S.A.', 8005559876, 'Bom');
INSERT INTO FORNECEDOR VALUES(11112222333445, 'LivrosCultura Ltda.', 8005555544, 'Médio');
INSERT INTO FORNECEDOR VALUES(88888888888888, 'AlimentosDeliciosos S.A.', 8005558888, 'Ótimo');
INSERT INTO FORNECEDOR VALUES(77777777777777, 'MóveisConforto Ltda.', 8005557777, 'Bom');
INSERT INTO FORNECEDOR VALUES(55555555555555, 'EsportesAtivos S.A.', 8005555555, 'Excelente');
INSERT INTO FORNECEDOR VALUES(66666666666666, 'BelezaBrilhante Ltda.', 8005556666, 'Muito Bom');
INSERT INTO FORNECEDOR VALUES(99999999999999, 'JogosDivertidos S.A.', 8005559999, 'Bom');
INSERT INTO FORNECEDOR VALUES(22222222222222, 'AutomóveisPotentes S.A.', 8005552222, 'Excelente');
INSERT INTO FORNECEDOR VALUES(44444444444444, 'FerramentasÚteis Ltda.', 8005554444, 'Bom');




INSERT INTO COMPRA VALUES(1, 'COMPRA123', TO_DATE('2023-10-01', 'YYYY-MM-DD'), 500.00, 12345678901);
INSERT INTO COMPRA VALUES(2, 'COMPRA456', TO_DATE('2023-10-02', 'YYYY-MM-DD'), 750.25, 98765432109);
INSERT INTO COMPRA VALUES(3, 'COMPRA789', TO_DATE('2023-10-03', 'YYYY-MM-DD'), 400.50, 45678912305);
INSERT INTO COMPRA VALUES(4, 'COMPRA987', TO_DATE('2023-10-04', 'YYYY-MM-DD'), 600.75, 12345678901);
INSERT INTO COMPRA VALUES(5, 'COMPRA654', TO_DATE('2023-10-05', 'YYYY-MM-DD'), 350.20, 98765432109);
INSERT INTO COMPRA VALUES(6, 'COMPRA321', TO_DATE('2023-10-06', 'YYYY-MM-DD'), 480.90, 45678912305);
INSERT INTO COMPRA VALUES(7, 'COMPRA789', TO_DATE('2023-10-07', 'YYYY-MM-DD'), 550.60, 12345678901);
INSERT INTO COMPRA VALUES(8, 'COMPRA456', TO_DATE('2023-10-08', 'YYYY-MM-DD'), 700.30, 98765432109);
INSERT INTO COMPRA VALUES(9, 'COMPRA123', TO_DATE('2023-10-09', 'YYYY-MM-DD'), 420.40, 45678912305);
INSERT INTO COMPRA VALUES(10, 'COMPRA999', TO_DATE('2023-10-10', 'YYYY-MM-DD'), 900.00, 12345678901);



  
INSERT INTO ITENS VALUES(1, 'Smartphone Avançado', 1599.99, 'Smartphone de última geração', 1);
INSERT INTO ITENS VALUES(2, 'Camiseta de Algodão', 29.99, 'Camiseta de algodão confortável', 2);
INSERT INTO ITENS VALUES(3, 'Livro de Mistério', 19.99, 'Livro de mistério emocionante', 3);
INSERT INTO ITENS VALUES(4, 'Notebook Poderoso', 2499.99, 'Notebook de alto desempenho', 1);
INSERT INTO ITENS VALUES(5, 'Vestido Elegante', 49.99, 'Vestido de festa elegante', 2);
INSERT INTO ITENS VALUES(6, 'Aventura Literária', 14.99, 'Livro de aventura cativante', 3);
INSERT INTO ITENS VALUES(7, 'Fone de Ouvido Sem Fio', 99.99, 'Fones de ouvido bluetooth', 1);
INSERT INTO ITENS VALUES(8, 'Calça Jeans Confortável', 34.99, 'Calça jeans de qualidade', 2);
INSERT INTO ITENS VALUES(9, 'Livro de Poesia', 9.99, 'Coletânea de poemas inspiradores', 3);
INSERT INTO ITENS VALUES(10, 'Tablet Multifuncional', 499.99, 'Tablet versátil para trabalho e lazer', 1);




INSERT INTO FORNECEDOR_ITENS VALUES(100, 1, 12345678901234);
INSERT INTO FORNECEDOR_ITENS VALUES(500, 2, 98765432109876);
INSERT INTO FORNECEDOR_ITENS VALUES(200, 3, 11112222333445);
INSERT INTO FORNECEDOR_ITENS VALUES(300, 4, 12345678901234);
INSERT INTO FORNECEDOR_ITENS VALUES(150, 5, 98765432109876);
INSERT INTO FORNECEDOR_ITENS VALUES(250, 6, 11112222333445);
INSERT INTO FORNECEDOR_ITENS VALUES(50, 7, 12345678901234);
INSERT INTO FORNECEDOR_ITENS VALUES(350, 8, 98765432109876);
INSERT INTO FORNECEDOR_ITENS VALUES(75, 9, 11112222333445);
INSERT INTO FORNECEDOR_ITENS VALUES(400, 10, 12345678901234);


INSERT INTO COMPRA_ITENS VALUES(2, 1, 1);
INSERT INTO COMPRA_ITENS VALUES(5, 2, 2);
INSERT INTO COMPRA_ITENS VALUES(3, 3, 3);
INSERT INTO COMPRA_ITENS VALUES(4, 4, 4);
INSERT INTO COMPRA_ITENS VALUES(6, 5, 5);
INSERT INTO COMPRA_ITENS VALUES(1, 6, 6);
INSERT INTO COMPRA_ITENS VALUES(3, 7, 7);
INSERT INTO COMPRA_ITENS VALUES(7, 8, 8);
INSERT INTO COMPRA_ITENS VALUES(2, 9, 9);
INSERT INTO COMPRA_ITENS VALUES(8, 10, 10);


---Gerando relatorios---

---Retatório 1- Fornece informações sobre cada compra, incluindo quais itens foram comprados, a quantidade de cada item e o usuário responsável pela compra.---
SELECT
    C.ID_COMPRA,
    C.COD_CONTRATO,
    C.DATA_COMPRA,
    C.VALOR_TOTAL,
    U.NOME AS NOME_USUARIO,
    I.NOME AS NOME_ITEM,
    CI.QUANTIDADE AS QUANTIDADE_COMPRADA
FROM COMPRA C
JOIN USUARIO U ON C.FK_USUARIO_CPF = U.CPF
JOIN COMPRA_ITENS CI ON C.ID_COMPRA = CI.FK_COMPRA_ID
JOIN ITENS I ON CI.FK_ITENS_ID = I.ID_ITENS;

---Relatorio 2- Este relatório mostra o valor total das compras feitas por cada usuário. Ele lista o nome de cada usuário e o valor 
---total de todas as compras associadas a esse usuário.
SELECT
    U.NOME AS NOME_USUARIO,
    SUM(C.VALOR_TOTAL) AS VALOR_TOTAL_COMPRAS
FROM USUARIO U
LEFT JOIN COMPRA C ON U.CPF = C.FK_USUARIO_CPF
GROUP BY U.NOME;


---Relatorio 3- Esse relatório lista os itens mais comprados, exibindo o nome de cada item e a quantidade total de vezes que esses 
---itens foram comprados. Os itens são ordenados em ordem decrescente com base na quantidade comprada.
SELECT
    I.NOME AS NOME_ITEM,
    SUM(CI.QUANTIDADE) AS QUANTIDADE_TOTAL_COMPRAS
FROM ITENS I
LEFT JOIN COMPRA_ITENS CI ON I.ID_ITENS = CI.FK_ITENS_ID
GROUP BY I.NOME
ORDER BY QUANTIDADE_TOTAL_COMPRAS DESC;

---Relatorio 4- Neste relatório, são exibidos os fornecedores associados a cada item, incluindo o nome do item, o nome do fornecedor
---e a quantidade fornecida desse item. Isso ajuda a identificar quais fornecedores estão fornecendo quais itens.
SELECT
    I.NOME AS NOME_ITEM,
    F.NOME AS NOME_FORNECEDOR,
    FI.QUANTIDADE AS QUANTIDADE_FORNECIDA
FROM ITENS I
LEFT JOIN FORNECEDOR_ITENS FI ON I.ID_ITENS = FI.FK_ITENS_ID
LEFT JOIN FORNECEDOR F ON FI.FK_FORNECEDOR_CNPJ = F.CNPJ;

---Relatorio 5- Este relatório mostra o valor total gasto em compras agrupadas por tipo de item. Ele lista o nome de cada tipo de item
---e o valor total de todas as compras associadas a esse tipo. Isso é útil para avaliar o desempenho de categorias de produtos específicas.
SELECT
    TI.NOME AS NOME_TIPO_ITEM,
    SUM(C.VALOR_TOTAL) AS VALOR_TOTAL_COMPRAS
FROM TIPO_ITEM TI
LEFT JOIN ITENS I ON TI.ID_TIPO_ITEM = I.FK_TIPO_ITEM_ID
LEFT JOIN COMPRA_ITENS CI ON I.ID_ITENS = CI.FK_ITENS_ID
LEFT JOIN COMPRA C ON CI.FK_COMPRA_ID = C.ID_COMPRA
GROUP BY TI.NOME;
