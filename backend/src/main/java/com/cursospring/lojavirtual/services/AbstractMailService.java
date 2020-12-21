package com.cursospring.lojavirtual.services;

import java.util.Date;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;

import com.cursospring.lojavirtual.domain.Pedido;

public abstract class AbstractMailService implements EmailService {

	@Value("${default.sender}")
	private String sender;
	
	@Override
	public void sendOrderConfirmationEmail(Pedido pedido) {
		SimpleMailMessage mailMessage = prepareSimpleMailMessageFromPedido(pedido);
		sendEmail(mailMessage);
	}
	
	private SimpleMailMessage prepareSimpleMailMessageFromPedido(Pedido pedido) {
		SimpleMailMessage message = new SimpleMailMessage();
		
		message.setTo(pedido.getCliente().getEmail()); // Email que receberá a mensagem
		message.setFrom(sender); // Email que enviará a mensagem
		message.setSubject("Pedido confirmado! Código: " + pedido.getId());
		message.setSentDate(new Date(System.currentTimeMillis()));
		message.setText(pedido.toString());
		
		return message;
	}

}
