package com.cursospring.lojavirtual.resources;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cursospring.lojavirtual.domain.Pedido;
import com.cursospring.lojavirtual.services.PedidoService;

@RestController
@RequestMapping(value = "/pedidos")
public class PedidoResource {

	private PedidoService service;
	
	public PedidoResource(PedidoService service) {
		this.service = service;
	}
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<Pedido> findById(@PathVariable long id) {
		Pedido pedido = service.findById(id);
		return ResponseEntity.ok().body(pedido);
	}
	
}
