package com.cursospring.lojavirtual.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.cursospring.lojavirtual.domain.Cliente;
import com.cursospring.lojavirtual.repositories.ClienteRepository;
import com.cursospring.lojavirtual.security.UserSS;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

	@Autowired
	private ClienteRepository repository;
	
	@Override
	public UserDetails loadUserByUsername(String email) 
			throws UsernameNotFoundException {
		Cliente cliente = repository.findByEmail(email);
		
		if (cliente == null)
			throw new UsernameNotFoundException(email);
		
		return new UserSS(cliente.getId(), cliente.getEmail(), cliente.getSenha(), cliente.getPerfis());
	}

}
