import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginModel } from 'src/app/models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private dialog: MatDialog;
  private formBuilder: FormBuilder;

  loginModel: LoginModel = {
    email: '', 
    senha: '',
  }

  loginFormControl: FormGroup;

  constructor(dialog: MatDialog, formBuilder: FormBuilder) {
    this.dialog = dialog;
    this.formBuilder = formBuilder;
  }

  ngOnInit(): void {
    this.loginFormControl = this.formBuilder.group({
      email: [this.loginModel.email, [Validators.required, Validators.email]],
      senha: [this.loginModel.senha, [Validators.required, Validators.minLength(5), Validators.maxLength(10)]]
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
    console.log(this.loginFormControl.value);
  }

  cancelar(): void {
    this.dialog.closeAll();
  }

}
