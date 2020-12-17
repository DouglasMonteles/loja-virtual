package com.cursospring.lojavirtual.services;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.cursospring.lojavirtual.domain.Cliente;
import com.cursospring.lojavirtual.repositories.ClienteRepository;
import com.cursospring.lojavirtual.services.exceptions.ObjectNotFoundException;

@Service
public class ClienteService {

	private ClienteRepository repository;
	
	public ClienteService(ClienteRepository repository) {
		this.repository = repository;
	}
	
	public Cliente findById(long id) {
		Optional<Cliente> cliente = repository.findById(id);
		return cliente.orElseThrow(
				() -> new ObjectNotFoundException("Cliente não encontrado! Id informado: " + id)
			);
	}
	
}
