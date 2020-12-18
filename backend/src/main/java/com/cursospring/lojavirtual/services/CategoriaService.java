package com.cursospring.lojavirtual.services;

import java.util.Optional;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import com.cursospring.lojavirtual.domain.Categoria;
import com.cursospring.lojavirtual.repositories.CategoriaRepository;
import com.cursospring.lojavirtual.services.exceptions.DataIntegrityException;
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
	
	public Categoria insert(Categoria categoria) {
		categoria.setId(null);
		return repository.save(categoria);
	}
	
	public Categoria update(Categoria categoriaAtualizada) {
		findById(categoriaAtualizada.getId());
		return repository.save(categoriaAtualizada);
	}
	
	public void delele(int id) {
		findById(id);
		
		try {
			repository.deleteById(id);
		} catch (DataIntegrityViolationException e) {
			throw new DataIntegrityException("Não é possível excluir esta categoria, pois existem produtos relacionados a ela");
		}
	}
	
}
