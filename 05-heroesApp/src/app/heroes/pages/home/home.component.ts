import { Component } from '@angular/core';
import { Auth } from 'src/app/auth/interfaces/auth.interfaces';
import { AuthService } from '../../../auth/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
    .container{
      padding: 10px
    }
  `]
})
export class HomeComponent {

  private user: Auth = {
    id: '',
    email: '',
    usuario: ''
  };

  get auth(): Auth {
    return this.authService.auth || this.user ;
  }

  constructor(private authService: AuthService, private route: Router) { }

  logout(){
    this.authService.logout();
    this.route.navigate(["/heroes"])
  }

}
