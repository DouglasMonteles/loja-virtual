package com.cursospring.lojavirtual.services;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.cursospring.lojavirtual.domain.Categoria;
import com.cursospring.lojavirtual.repositories.CategoriaRepository;
import com.cursospring.lojavirtual.services.exceptions.ObjectNotFoundException;

@Service
public class CategoriaService {

	private CategoriaRepository repository;
	
	public CategoriaService(CategoriaRepository repository) {
		this.repository = repository;
	}
	
	public Categoria findById(Integer id) {
		Optional<Categoria> categoria = repository.findById(id);
		return categoria.orElseThrow(
				() -> new ObjectNotFoundException("Categoria não encontrada! Id informado: " + id)
			);
	}
	
}