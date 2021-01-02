import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClienteCadastroModel } from 'src/app/models/cliente-cadastro.model';
import { EstadoModel } from 'src/app/models/estado.model';
import { CidadeModel } from 'src/app/models/cidade.model';
import { EstadoService } from 'src/app/services/estado.service';
import { CidadeService } from 'src/app/services/cidade.service';

@Component({
  selector: 'app-sigup-page',
  templateUrl: './sigup-page.component.html',
  styleUrls: ['./sigup-page.component.css'],
})
export class SigupPageComponent implements OnInit {

  sigupFormControl: FormGroup;

  cliente: ClienteCadastroModel = {
    nome: '',
      email: '',
      tipo: 1,
      cpfOuCnpj: '',
      senha: '',

      cep: '',
      bairro: '',
      logradouro: '',
      numero: '',
      complemento: '',

      telefone1: '',
      telefone2: '',
      telefone3: '',

      cidadeId: null,
  };
  estados: EstadoModel[];
  cidades: CidadeModel[];

  constructor(
    private formBuilder: FormBuilder,
    private estadoService: EstadoService,
    private cidadeService: CidadeService,
  ) { 
    this.sigupFormControl = this.formBuilder.group({
      nome: [
        this.cliente.nome, [
          Validators.required, 
          Validators.minLength(5), 
          Validators.maxLength(120),
        ]
      ],
      email: [
        this.cliente.email, [
          Validators.required, 
          Validators.email,
        ]
      ],
      tipo: [
        this.cliente.tipo, [
          Validators.required,
        ]
      ],
      cpfOuCnpj: [
        this.cliente.cpfOuCnpj, [
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(14),
        ]
      ],
      senha: [
        this.cliente.senha, [
          Validators.required,
          Validators.minLength(5), 
          Validators.maxLength(10),
        ]
      ],
    
      cep: [
        this.cliente.cep, [
          Validators.required,
        ]
      ],
      bairro: [
        this.cliente.bairro, [
          Validators.required,
        ]
      ],
      logradouro: [
        this.cliente.logradouro, [
          Validators.required,
        ]
      ],
      numero: [
        this.cliente.numero, [
          Validators.required,
        ]
      ],
      complemento: [
        this.cliente.complemento, [
          Validators.required,
        ]
      ],
    
      telefone1: [
        this.cliente.telefone1, [
          Validators.required,
        ]
      ],
      telefone2: [
        this.cliente.telefone2,
      ],
      telefone3: [
        this.cliente.telefone3,
      ],
    
      estadoId: [
        null, [
          Validators.required,
        ]
      ],
      cidadeId: [
        this.cliente.cidadeId, [
          Validators.required,
        ]
      ],
    });
  }

  ngOnInit(): void {
    this.estadoService.findAll().subscribe({
      next: (data) => {
        this.estados = data;
        this.sigupFormControl.controls.estadoId.setValue(this.estados[0].id);
        this.updateCidades();
      }
    });
  }

  updateCidades() {
    const estadoId = this.sigupFormControl.value.estadoId;
    this.cidadeService.findAll(estadoId).subscribe({
      next: (data) => {
        this.cidades = data;
        this.sigupFormControl.controls.cidadeId.setValue(null);
      },
    });
  }

  sigupUser(): void {
    console.log(this.sigupFormControl.value);
  }

}
