package com.cursospring.lojavirtual.resources;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cursospring.lojavirtual.domain.Cliente;
import com.cursospring.lojavirtual.services.ClienteService;

@RestController
@RequestMapping(value = "/clientes")
public class ClienteResource {

	private ClienteService service;
	
	public ClienteResource(ClienteService service) {
		this.service = service;
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Cliente> findClientById(@PathVariable long id) {
		Cliente cliente = service.findById(id);
		return ResponseEntity.ok().body(cliente);
	}

}
