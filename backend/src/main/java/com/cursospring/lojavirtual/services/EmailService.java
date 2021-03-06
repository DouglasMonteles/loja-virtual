package com.cursospring.lojavirtual.services;

import org.springframework.mail.SimpleMailMessage;

import com.cursospring.lojavirtual.domain.Cliente;
import com.cursospring.lojavirtual.domain.Pedido;

public interface EmailService {

	void sendOrderConfirmationEmail(Pedido pedido);
	
	void sendEmail(SimpleMailMessage mailMessage);
	
	void sendNewPasswordByEmail(Cliente cliente, String novaSenha);
	
}
