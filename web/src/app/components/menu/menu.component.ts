import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  itensNoCarrinho: number = 0;
  private router: Router;

  constructor(router: Router) { 
    this.router = router;
  }

  ngOnInit(): void {
  }

  login() : void {
    
  }

  sair(): void {
    this.router.navigateByUrl('/');
  }

}
