import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sigup-page',
  templateUrl: './sigup-page.component.html',
  styleUrls: ['./sigup-page.component.css'],
})
export class SigupPageComponent implements OnInit {

  sigupFormControl: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.sigupFormControl = this.formBuilder.group({
      nome: [],
      email: [],
      tipo: [],
      cpfOuCnpj: [],
      senha: [],
      cep: [],
      bairro: [],
      logradouro: [],
      numero: [],
      complemento: [],
      telefone1: [],
      telefone2: [],
      telefone3: [],
      estadoId: [],
      cidadeId: [],
    });
  }

  sigupUser(): void {
    console.log('sigup user');
  }

}
