package com.cursospring.lojavirtual.services;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.cursospring.lojavirtual.domain.Cidade;
import com.cursospring.lojavirtual.domain.Cliente;
import com.cursospring.lojavirtual.domain.Endereco;
import com.cursospring.lojavirtual.dto.ClienteCadastroDTO;
import com.cursospring.lojavirtual.dto.ClienteDTO;
import com.cursospring.lojavirtual.enums.TipoCliente;
import com.cursospring.lojavirtual.repositories.ClienteRepository;
import com.cursospring.lojavirtual.repositories.EnderecoRepository;
import com.cursospring.lojavirtual.services.exceptions.DataIntegrityException;
import com.cursospring.lojavirtual.services.exceptions.ObjectNotFoundException;

@Service
public class ClienteService {

	private ClienteRepository repository;
	private EnderecoRepository enderecoRepository;
	
	@Autowired
	private BCryptPasswordEncoder encoder;
	
	public ClienteService(ClienteRepository repository, EnderecoRepository enderecoRepository) {
		this.repository = repository;
		this.enderecoRepository = enderecoRepository;
	}
	
	public List<Cliente> findAll() {
		return repository.findAll();
	}
	
	public Cliente findById(long id) {
		Optional<Cliente> cliente = repository.findById(id);
		return cliente.orElseThrow(
				() -> new ObjectNotFoundException("Cliente não encontrado! Id informado: " + id)
			);
	}
	
	@Transactional
	public Cliente insert(Cliente cliente) {
		cliente.setId(null);
		cliente = repository.save(cliente);
		enderecoRepository.saveAll(cliente.getEnderecos());
		return cliente;
	}
	
	public Cliente update(Cliente cliente) {
		Cliente clienteAtualizado = findById(cliente.getId());
		
		clienteAtualizado.setNome(cliente.getNome());
		clienteAtualizado.setEmail(cliente.getEmail());
		
		return repository.save(clienteAtualizado);
	}
	
	public void delete(long id) {
		findById(id);
		
		try {
			repository.deleteById(id);
		} catch (DataIntegrityViolationException e) {
			throw new DataIntegrityException("Não é possível excluir este cliente, pois há pedidos relacionadas a ele");
		}
	}
	
	public Page<Cliente> findAllPageable(int page, int linesPerPage, String direction, String orderBy) {
		PageRequest clientesPaginados = PageRequest.of(page, linesPerPage, Direction.valueOf(direction), orderBy);
		return repository.findAll(clientesPaginados);
	}

	public Cliente fromDTO(@Valid ClienteDTO clienteDTO) {
		return new Cliente(clienteDTO.getId(), clienteDTO.getNome(), clienteDTO.getEmail(), null, null, null);
	}
	
	public Cliente fromDTO(@Valid ClienteCadastroDTO cadastro) {
		Cliente cliente = new Cliente(null, cadastro.getNome(), cadastro.getEmail(), cadastro.getCpfOuCnpj(), encoder.encode(cadastro.getSenha()), TipoCliente.toEnum(cadastro.getTipo()));
		Cidade cidade = new Cidade(cadastro.getCidadeId(), null, null);
		Endereco endereco = new Endereco(null, cadastro.getLogradouro(), cadastro.getNumero(), cadastro.getComplemento(), cadastro.getBairro(), cadastro.getCep(), cliente, cidade);
		
		cliente.getEnderecos().add(endereco);
		cliente.getTelefones().add(cadastro.getTelefone1());
		
		if (cadastro.getTelefone2() != null)
			cliente.getTelefones().add(cadastro.getTelefone2());
		
		if (cadastro.getTelefone3() != null)
			cliente.getTelefones().add(cadastro.getTelefone3());
		
		return cliente;
	}
	
}
