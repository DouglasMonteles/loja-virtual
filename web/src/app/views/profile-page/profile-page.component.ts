import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { ClienteModel } from 'src/app/models/cliente.model';
import { ClienteService } from 'src/app/services/cliente.service';
import { HandleMessageService } from 'src/app/services/handle-message.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  cliente: ClienteModel;
  img: File;

  constructor(
    private storage: StorageService,
    private clienteService: ClienteService,
    private message: HandleMessageService,
  ) { }

  ngOnInit(): void {
    const localUser = this.storage.getLocalUser();

    if (localUser && localUser.email) {
      this.clienteService.findByEmail(localUser.email).subscribe({
        next: (data) => {
          this.cliente = data;
          //this.getIfImageExists();
        },

        error: (data) => {
          if (data.status !== 0) {
            this.message.showMessage(data.error.message, true);
          } else {
            this.message.showDefaultMessage();
          }
        }
      });
    }
  }

  getIfImageExists(): Observable<any> {
    return this.clienteService.getClientImage(this.cliente.imgPath);
      // .subscribe(data => {
      //   //this.cliente.imgPath = `${environment.baseURL}/clientes/picture/${this.cliente.imgPath}`;
      //   return data;
      // });
  }

}
