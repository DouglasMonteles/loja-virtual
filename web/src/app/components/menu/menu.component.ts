import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  private router: Router;
  private loginComponent: LoginComponent;
  itensNoCarrinho: number = 0;
  

  constructor(router: Router, loginComponent: LoginComponent) { 
    this.router = router;
    this.loginComponent = loginComponent;
  }

  ngOnInit(): void {
  }

  login() : void {
    this.loginComponent.openDialog();
  }

  sair(): void {
    this.router.navigateByUrl('/');
  }

}
