import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  email: string;

  constructor(
    private storage: StorageService,
  ) { }

  ngOnInit(): void {
    const localUser = this.storage.getLocalUser();
    
    if (localUser && localUser.email) {
      this.email = localUser.email;
    } 
  }

}
