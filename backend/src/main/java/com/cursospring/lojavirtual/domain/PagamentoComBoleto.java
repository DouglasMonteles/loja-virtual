package com.cursospring.lojavirtual.domain;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Table;

import com.cursospring.lojavirtual.enums.EstadoPagamento;

@Entity
@Table(name = "tb_pagamento_com_boleto")
public class PagamentoComBoleto extends Pagamento {

	private static final long serialVersionUID = 1L;

	private Date dataVencimeto;
	private Date dataPagamento;
	
	public PagamentoComBoleto() {}

	public PagamentoComBoleto(Long id, EstadoPagamento estado, Pedido pedido, Date dataVencimeto, Date dataPagamento) {
		super(id, estado, pedido);
		this.dataVencimeto = dataVencimeto;
		this.dataPagamento = dataPagamento;
	}

	public Date getDataVencimeto() {
		return dataVencimeto;
	}

	public void setDataVencimeto(Date dataVencimeto) {
		this.dataVencimeto = dataVencimeto;
	}

	public Date getDataPagamento() {
		return dataPagamento;
	}

	public void setDataPagamento(Date dataPagamento) {
		this.dataPagamento = dataPagamento;
	}
	
}
