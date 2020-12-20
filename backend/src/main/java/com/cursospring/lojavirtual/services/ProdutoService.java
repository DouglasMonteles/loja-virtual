package com.cursospring.lojavirtual.services;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;

import com.cursospring.lojavirtual.domain.Categoria;
import com.cursospring.lojavirtual.domain.Produto;
import com.cursospring.lojavirtual.repositories.CategoriaRepository;
import com.cursospring.lojavirtual.repositories.ProdutoRepository;
import com.cursospring.lojavirtual.services.exceptions.ObjectNotFoundException;

@Service
public class ProdutoService {

	private ProdutoRepository repository;
	private CategoriaRepository categoriaRepository;
	
	public ProdutoService(ProdutoRepository repository, CategoriaRepository categoriaRepository) {
		this.repository = repository;
		this.categoriaRepository = categoriaRepository;
	}
	
	public Produto findById(long id) {
		Optional<Produto> produto = repository.findById(id);
		return produto.orElseThrow(
				() -> new ObjectNotFoundException("Produto não encontrado! Id: " + id)
			);
	}
	
	public Page<Produto> search(String nome, List<Integer> categoriasId, int page, int linesPerPage, String orderBy, String direction) {
		PageRequest produtosPaginados = PageRequest.of(page, linesPerPage, Direction.valueOf(direction), orderBy);
		List<Categoria> categorias = categoriaRepository.findAllById(categoriasId);
		return repository.findDistinctByNomeContainingAndCategoriasIn(nome, categorias, produtosPaginados);
	}
	
}
