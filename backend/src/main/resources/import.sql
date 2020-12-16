/*ARQUIVO PARA INSERSÃO DE DADOS DE FORMA AUTOMÁTICA E TEMPORÁRIA (H2)*/

INSERT INTO tb_categoria (nome) VALUES ('Informática');
INSERT INTO tb_categoria (nome) VALUES ('Eletrônicos');
INSERT INTO tb_categoria (nome) VALUES ('Limpeza');

INSERT INTO tb_produto (nome, preco) VALUES ('Computador', 2000.00);
INSERT INTO tb_produto (nome, preco) VALUES ('Máquina de Lavar', 600.00);
INSERT INTO tb_produto (nome, preco) VALUES ('Rádio Portátil', 200.00);

INSERT INTO tb_produto_categoria (produto_id, categoria_id) VALUES (1, 1);
INSERT INTO tb_produto_categoria (produto_id, categoria_id) VALUES (1, 2);
INSERT INTO tb_produto_categoria (produto_id, categoria_id) VALUES (2, 3);
INSERT INTO tb_produto_categoria (produto_id, categoria_id) VALUES (3, 2);
