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

INSERT INTO tb_estado (nome) VALUES ('Distrito Federal');
INSERT INTO tb_estado (nome) VALUES ('Maranhão');

INSERT INTO tb_cidade (nome, estado_id) VALUES ('Brasília', 1);
INSERT INTO tb_cidade (nome, estado_id) VALUES ('São Luís', 2);

INSERT INTO tb_cliente (cpf_ou_cnpj, email, nome, senha, tipo) VALUES ('19219569094', 'teste@gmail.com', 'Douglas Silva', '123', 1);

INSERT INTO tb_endereco (bairro, cep, complemento, logradouro, numero, cidade_id, cliente_id) VALUES ('Areinha', '65032542', 'Próximo a Igreja', '3ª Rua Nossa Senhora da Aparecida', '100', 1, 1);



