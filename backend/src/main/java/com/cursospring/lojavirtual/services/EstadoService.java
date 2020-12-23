package com.cursospring.lojavirtual.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.cursospring.lojavirtual.domain.Estado;
import com.cursospring.lojavirtual.repositories.EstadoRepository;

@Service
public class EstadoService {

	private EstadoRepository repository;
	
	public EstadoService(EstadoRepository repository) {
		this.repository = repository;
	}
	
	public List<Estado> findAll() {
		return repository.findAllByOrderByNome();
	}
	
}
