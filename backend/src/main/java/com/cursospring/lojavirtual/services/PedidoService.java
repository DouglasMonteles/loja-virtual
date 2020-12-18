package com.cursospring.lojavirtual.services;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.cursospring.lojavirtual.domain.Pedido;
import com.cursospring.lojavirtual.repositories.PedidoRepository;
import com.cursospring.lojavirtual.services.exceptions.ObjectNotFoundException;

@Service
public class PedidoService {

	private PedidoRepository repository;
	
	public PedidoService(PedidoRepository repository) {
		this.repository = repository;
	}
	
	public Pedido findById(long id) {
		Optional<Pedido> pedido = repository.findById(id);
		return pedido.orElseThrow(
				() -> new ObjectNotFoundException("Nenhum pedido foi encontrado com o Id: " + id)
			);
	}
	
}
