import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../servicios/user-service.service';
import {Router} from '@angular/router';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserServiceService]
})
export class LoginComponent implements OnInit {

  email: string;
  pwd: string;
  user: Array<any>;

  constructor(private _userService: UserServiceService, private router: Router) {
    this.email = "";
    this.pwd = "";
    this.user= [];

  }

  ngOnInit() {
  }

  login(event: Event){

    event.preventDefault();
    this._userService.getUserLogin(this.email, this.pwd).subscribe(
      res =>{
        this.user= res['user'];
        this._userService.setUserLoggedIn(this.user);
      },
        error => {
        if(error['status']== 401){
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'correo y/o contraseña incorrecto',
            showConfirmButton: false,
            timer: 2000
          })
          console.log('Datos incorrectos');
        }

        },
      () => this.navigate()
    );
  }

  navigate(){
    this.router.navigateByUrl('/home');
  }
}
