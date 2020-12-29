import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginModel } from 'src/app/models/login.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { HandleMessageService } from 'src/app/services/handle-message.service';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginModel: LoginModel = {
    email: '', 
    senha: '',
  }

  loginFormControl: FormGroup;

  constructor(
    private dialog: MatDialog, 
    private formBuilder: FormBuilder,
    private auth: AuthenticationService,
    private message: HandleMessageService,
  ) {
  }

  ngOnInit(): void {
    this.loginFormControl = this.formBuilder.group({
      email: [this.loginModel.email, [Validators.required, Validators.email]],
      senha: [this.loginModel.senha, [Validators.required, Validators.minLength(5), Validators.maxLength(10)]]
    });

    this.loginFormControl.valueChanges.forEach((value: LoginModel) => {
      this.loginModel = value;
    });
  }

  openDialog(): void {
    const loginDialog = this.dialog.open(LoginComponent, {
      width: '30vw',
      minWidth: '350px',
      data: {
        email: this.loginModel.email,
        senha: this.loginModel.senha,
      }
    });

    loginDialog.afterClosed().subscribe(() => {
      this.loginModel.email = '',
      this.loginModel.senha = ''
    });
  }

  login(): void {
    this.auth.authenticate(this.loginModel).subscribe({
      next: (data) => {
        console.log(data.headers.get('Authorization'));
        this.message.showMessage('Login efetuado com sucesso!');
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

  cancelar(): void {
    this.dialog.closeAll();
  }

}
