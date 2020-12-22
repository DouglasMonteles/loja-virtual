package com.cursospring.lojavirtual.services;

import java.util.Date;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;

import com.cursospring.lojavirtual.domain.Cliente;
import com.cursospring.lojavirtual.domain.ItemPedido;
import com.cursospring.lojavirtual.domain.PagamentoComBoleto;
import com.cursospring.lojavirtual.domain.Pedido;
import com.cursospring.lojavirtual.enums.EstadoPagamento;
import com.cursospring.lojavirtual.repositories.ItemPedidoRepository;
import com.cursospring.lojavirtual.repositories.PagamentoRepository;
import com.cursospring.lojavirtual.repositories.PedidoRepository;
import com.cursospring.lojavirtual.security.UserSS;
import com.cursospring.lojavirtual.services.exceptions.AuthorizationException;
import com.cursospring.lojavirtual.services.exceptions.ObjectNotFoundException;

@Service
public class PedidoService {

	private PedidoRepository repository;
	private BoletoService boletoService;
	private PagamentoRepository pagamentoRepository;
	private ItemPedidoRepository itemPedidoRepository;
	private ProdutoService produtoService;
	private ClienteService clienteService;
	private EmailService emailService;
	
	public PedidoService(PedidoRepository repository, BoletoService boletoService, 
			PagamentoRepository pagamentoRepository, ItemPedidoRepository itemPedidoRepository, 
			ProdutoService produtoService, ClienteService clienteService, EmailService emailService) {
		this.repository = repository;
		this.boletoService = boletoService;
		this.pagamentoRepository = pagamentoRepository;
		this.itemPedidoRepository = itemPedidoRepository;
		this.produtoService = produtoService;
		this.clienteService = clienteService;
		this.emailService = emailService;
	}
	
	public Pedido findById(long id) {
		Optional<Pedido> pedido = repository.findById(id);
		return pedido.orElseThrow(
				() -> new ObjectNotFoundException("Nenhum pedido foi encontrado com o Id: " + id)
			);
	}
	
	public Pedido insert(Pedido pedido) {
		pedido.setId(null);
		pedido.setInstante(new Date());
		pedido.setCliente(clienteService.findById(pedido.getCliente().getId()));
		pedido.getPagamento().setEstado(EstadoPagamento.PENDENTE);
		pedido.getPagamento().setPedido(pedido);
		
		if (pedido.getPagamento() instanceof PagamentoComBoleto) {
			PagamentoComBoleto boleto = (PagamentoComBoleto) pedido.getPagamento();
			boletoService.preencherPagamentoComBoleto(boleto, pedido.getInstante());
		}
		
		pedido = repository.save(pedido);
		pagamentoRepository.save(pedido.getPagamento());
		
		for (ItemPedido item : pedido.getItens()) {
			item.setDesconto(0.0);
			item.setProduto(produtoService.findById(item.getProduto().getId()));
			item.setPreco(item.getProduto().getPreco());
			item.setPedido(pedido);
		}
		
		itemPedidoRepository.saveAll(pedido.getItens());
		//System.out.println(pedido);
		emailService.sendOrderConfirmationEmail(pedido);
		return pedido;
	}
	
	public Page<Pedido> findPedidoByCliente(int page, int linesPerPage, 
			String direction, String orderBy) {
		UserSS user = UserService.authenticaded();
		
		if (user == null)
			throw new AuthorizationException("Acesso negado!");
		
		PageRequest pedidosDoCliente = PageRequest.of(page, linesPerPage, Direction.valueOf(direction), orderBy);
		Cliente cliente = clienteService.findById(user.getId());
		
		return repository.findByCliente(cliente, pedidosDoCliente);
	}
	
}
