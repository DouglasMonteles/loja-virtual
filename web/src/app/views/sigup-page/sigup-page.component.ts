import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClienteCadastroModel } from 'src/app/models/cliente-cadastro.model';

@Component({
  selector: 'app-sigup-page',
  templateUrl: './sigup-page.component.html',
  styleUrls: ['./sigup-page.component.css'],
})
export class SigupPageComponent implements OnInit {

  sigupFormControl: FormGroup;
  cliente: ClienteCadastroModel;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.sigupFormControl = this.formBuilder.group({
      nome: [
        this.cliente.nome, [
          Validators.required, 
          Validators.minLength(5), 
          Validators.maxLength(120),
        ],
      ],
      email: [
        this.cliente.email, [
          Validators.required, 
          Validators.email,
        ],
      ],
      tipo: [
        this.cliente.tipo, [
          Validators.required,
        ],
      ],
      cpfOuCnpj: [
        this.cliente.cpfOuCnpj, [
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(14),
        ],
      ],
      senha: [
        this.cliente.senha, [
          Validators.required,
          Validators.minLength(5), 
          Validators.maxLength(10),
        ],
      ],

      cep: [
        this.cliente.cep, [
          Validators.required,
        ],
      ],
      bairro: [
        this.cliente.bairro, [
          Validators.required,
        ],
      ],
      logradouro: [
        this.cliente.logradouro, [
          Validators.required,
        ],
      ],
      numero: [
        this.cliente.numero, [
          Validators.required,
        ]
      ],
      complemento: [
        this.cliente.complemento, [
          Validators.required,
        ],
      ],

      telefone1: [
        this.cliente.telefone1, [
          Validators.required,
        ],
      ],
      telefone2: [
        this.cliente.telefone2,
      ],
      telefone3: [
        this.cliente.telefone3,
      ],

      estadoId: [
        this.cliente.estadoId,
        Validators.required,
      ],
      cidadeId: [
        this.cliente.cidadeId, [
          Validators.required,
        ]
      ],
    });
  }

  sigupUser(): void {
    console.log(this.sigupFormControl.value);
  }

}
