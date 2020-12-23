package com.cursospring.lojavirtual.resources;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cursospring.lojavirtual.domain.Cidade;
import com.cursospring.lojavirtual.domain.Estado;
import com.cursospring.lojavirtual.dto.CidadeDTO;
import com.cursospring.lojavirtual.dto.EstadoDTO;
import com.cursospring.lojavirtual.services.CidadeService;
import com.cursospring.lojavirtual.services.EstadoService;

@RestController
@RequestMapping(value = "/estados")
public class EstadoResource {

	private EstadoService service;
	private CidadeService cidadeService;
	
	public EstadoResource(EstadoService service, CidadeService cidadeService) {
		this.service = service;
		this.cidadeService = cidadeService;
	}
	
	@GetMapping
	public ResponseEntity<List<EstadoDTO>> findAll() {
		List<Estado> estados = service.findAll();
		List<EstadoDTO> estadosDTO = estados.stream()
				.map(estado -> new EstadoDTO(estado))
				.collect(Collectors.toList());
		
		return ResponseEntity.ok().body(estadosDTO);
	}
	
	@GetMapping(value = "/{estadoId}/cidades")
	public ResponseEntity<List<CidadeDTO>> findCidades(@PathVariable int estadoId) {
		List<Cidade> cidades = cidadeService.findCidadesByEstado(estadoId);
		List<CidadeDTO> cidadesDTO = cidades.stream()
				.map(cidade -> new CidadeDTO(cidade))
				.collect(Collectors.toList());
		
		return ResponseEntity.ok().body(cidadesDTO);
	}
	
}
