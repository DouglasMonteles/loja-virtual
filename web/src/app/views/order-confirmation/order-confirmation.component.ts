import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EnderecoModel } from 'src/app/models/endereco.model';
import { StorageService } from 'src/app/services/storage.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { HandleMessageService } from 'src/app/services/handle-message.service';
import { PedidoModel } from 'src/app/models/pedido.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit {

  isEditable: boolean = true;

  enderecoFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  enderecos: EnderecoModel[];
  pedido: PedidoModel;
  
  constructor(
    private formBuilder: FormBuilder,
    private storage: StorageService,
    private clienteService: ClienteService,
    private cartService: CartService,
    private message: HandleMessageService,
  ) {}

  ngOnInit() {
    const localUser = this.storage.getLocalUser();

    if (localUser && localUser.email) {
      this.clienteService.findByEmail(localUser.email).subscribe({
        next: (data) => {
          this.enderecos = data['enderecos'];

          const cart = this.cartService.getCart();

          this.pedido = {
            cliente: { id: data['id'], },
            enderecoDeEntrega: null,
            pagamento: null,
            itens: cart.items.map(item => { 
              return { quantidade: item.quatidade, produto: { id: item.produto.id } }; 
            }),
          };
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

    this.enderecoFormGroup = this.formBuilder.group({});
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['']
    });
  }

  setEndereco(endereco: EnderecoModel): void {
    this.pedido.enderecoDeEntrega = { 
      id: endereco.id,
    };
    console.log(this.pedido)
  }

}
