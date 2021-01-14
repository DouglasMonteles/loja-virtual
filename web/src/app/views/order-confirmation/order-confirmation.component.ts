import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EnderecoModel } from 'src/app/models/endereco.model';
import { StorageService } from 'src/app/services/storage.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { HandleMessageService } from 'src/app/services/handle-message.service';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit {

  isEditable: boolean = true;

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  enderecos: EnderecoModel[];
  
  constructor(
    private _formBuilder: FormBuilder,
    private storage: StorageService,
    private clienteService: ClienteService,
    private message: HandleMessageService,
  ) {}

  ngOnInit() {
    const localUser = this.storage.getLocalUser();

    if (localUser && localUser.email) {
      this.clienteService.findByEmail(localUser.email).subscribe({
        next: (data) => {
          console.log(data)
          this.enderecos = data['enderecos'];
        },
        error: (error) => {
          if (error.status === 403) {
            this.message.showMessage('Acesso não autorizado! Faça login novamente.', true);
          }
        },
      });
    } else {
      this.message.showMessage('Sessão expirou! Faça login novamente.', true);
    }


    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['']
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['']
    });
  }

}
