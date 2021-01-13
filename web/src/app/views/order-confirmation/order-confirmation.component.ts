import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EnderecoModel } from 'src/app/models/endereco.model';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit {

  isEditable: boolean = true;

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  enderecos: EnderecoModel[] = [
    {
      id: 1,
      logradouro: "Rua Quinze de Novembro",
      numero: "300",
      complemento: "Apto 200",
      bairro: "Santa Mônica",
      cep: "48293822",
      cidade: {
        id: 1,
        nome: "Uberlândia",
        estado: {
          id: 1,
          nome: "Minas Gerais"
        }
      }
    },
    {
      id: 3,
      logradouro: "Rua Alexandre Toledo da Silva",
      numero: "405",
      complemento: null,
      bairro: "Centro",
      cep: "88933822",
      cidade: {
        id: 3,
        nome: "São Paulo",
        estado: {
          id: 3,
          nome: "São Paulo"
        }
      }
    }
  ];
  
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['']
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['']
    });
  }

}
