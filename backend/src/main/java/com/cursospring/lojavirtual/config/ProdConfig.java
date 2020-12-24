package com.cursospring.lojavirtual.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import com.cursospring.lojavirtual.services.EmailService;
import com.cursospring.lojavirtual.services.SmtpEmailService;
import com.sun.el.parser.ParseException;

@Configuration
@Profile(value = "prod")
public class ProdConfig {

	@Value(value = "${spring.jpa.hibernate.ddl-auto}")
	private String strategy;
	
	public boolean instantiateDatabase() throws ParseException {
		if (!"create".equals(strategy))
			return false;
		
		return true;
	}
	
	@Bean
	public EmailService emailService() {
		return new SmtpEmailService();
	}
	
}
