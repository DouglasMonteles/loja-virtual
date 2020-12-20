/*ARQUIVO PARA INSERSÃO DE DADOS DE FORMA AUTOMÁTICA E TEMPORÁRIA (H2)*/

INSERT INTO tb_categoria (nome) VALUES ('Informática');
INSERT INTO tb_categoria (nome) VALUES ('Eletrônicos');
INSERT INTO tb_categoria (nome) VALUES ('Limpeza');
INSERT INTO tb_categoria (nome) VALUES ('Cama, Mesa e Banho');
INSERT INTO tb_categoria (nome) VALUES ('Móveis');
INSERT INTO tb_categoria (nome) VALUES ('Celulares');
INSERT INTO tb_categoria (nome) VALUES ('Moda');

INSERT INTO tb_produto (nome, preco) VALUES ('Computador', 2000.00);
INSERT INTO tb_produto (nome, preco) VALUES ('Máquina de Lavar', 600.00);
INSERT INTO tb_produto (nome, preco) VALUES ('Rádio Portátil', 200.00);
INSERT INTO tb_produto (nome, preco) VALUES ('Mesa de escritório', 300.00);
INSERT INTO tb_produto (nome, preco) VALUES ('Toalha', 50.00);
INSERT INTO tb_produto (nome, preco) VALUES ('Colcha', 200.00);
INSERT INTO tb_produto (nome, preco) VALUES ('TV true color', 1200.00);
INSERT INTO tb_produto (nome, preco) VALUES ('Roçadeira', 800.00);

INSERT INTO tb_produto_categoria (produto_id, categoria_id) VALUES (1, 1);
INSERT INTO tb_produto_categoria (produto_id, categoria_id) VALUES (1, 2);
INSERT INTO tb_produto_categoria (produto_id, categoria_id) VALUES (2, 3);
INSERT INTO tb_produto_categoria (produto_id, categoria_id) VALUES (3, 2);
INSERT INTO tb_produto_categoria (produto_id, categoria_id) VALUES (4, 5);
INSERT INTO tb_produto_categoria (produto_id, categoria_id) VALUES (5, 4);
INSERT INTO tb_produto_categoria (produto_id, categoria_id) VALUES (6, 4);
INSERT INTO tb_produto_categoria (produto_id, categoria_id) VALUES (7, 4);
INSERT INTO tb_produto_categoria (produto_id, categoria_id) VALUES (8, 2);
INSERT INTO tb_produto_categoria (produto_id, categoria_id) VALUES (9, 2);

INSERT INTO tb_estado (nome) VALUES ('Distrito Federal');
INSERT INTO tb_estado (nome) VALUES ('Maranhão');

INSERT INTO tb_cidade (nome, estado_id) VALUES ('Brasília', 1);
INSERT INTO tb_cidade (nome, estado_id) VALUES ('São Luís', 2);

INSERT INTO tb_cliente (cpf_ou_cnpj, email, nome, senha, tipo) VALUES ('19219569094', 'teste@gmail.com', 'Douglas Silva', '123', 1);
INSERT INTO tb_cliente (cpf_ou_cnpj, email, nome, senha, tipo) VALUES ('19219569094', 'teste@gmail.com', 'Teste', '123', 1);

INSERT INTO tb_endereco (bairro, cep, complemento, logradouro, numero, cidade_id, cliente_id) VALUES ('Areinha', '65032542', 'Próximo a Igreja', '3ª Rua Nossa Senhora da Aparecida', '100', 1, 1);

INSERT INTO tb_telefones (cliente_id, telefones) VALUES (1, '98991295331');
INSERT INTO tb_telefones (cliente_id, telefones) VALUES (1, '6181241849');

INSERT INTO tb_pedido (instante, cliente_id, endereco_de_entrega_id) VALUES (now(), 1, 1);

INSERT INTO tb_pagamento (pedido_id, estado) VALUES (1, 1);

INSERT INTO tb_pagamento_com_cartao (numero_de_parcelas, pedido_id) VALUES (5, 1);

INSERT INTO tb_item_pedido (desconto, preco, quantidade, produto_id, pedido_id) VALUES (10.00, 300.00, 2, 1, 1);














