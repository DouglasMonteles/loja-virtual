package com.cursospring.lojavirtual.services;

import org.springframework.security.core.context.SecurityContextHolder;

import com.cursospring.lojavirtual.security.UserSS;

public class UserService {

	public static UserSS authenticaded() {
		try {
			return (UserSS) SecurityContextHolder.getContext().getAuthentication()
					.getPrincipal();
		} catch (Exception e) {
			return null;
		}
	}
	
}
