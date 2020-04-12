import { Component, OnInit, Input, Output } from '@angular/core';
import  {UserServiceService} from '../servicios/user-service.service';
import {User} from './user';
import {ZipCodeService} from '../servicios/zip-code.service';
import  {Util} from '../Util/Util';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UserServiceService, User, ZipCodeService]
})
export class UsersComponent implements OnInit {
  usuarios: Array<any>;
  arrayCodigo: Array<any>;
  codigo: string;
  nombre: string;
  estado: string;


  constructor(private _userServiceService: UserServiceService, private _per: User, private _zipCode: ZipCodeService, private _util: Util) {
    this.usuarios = [];
    this.nombre= '';
    this.codigo = '';
    this.arrayCodigo= [];
    this.estado='Estado';
  }

  ngOnInit() {
    this._userServiceService.getUsers().subscribe(
      res=>{
        this.usuarios = res['users'];
        console.log(this.usuarios);
      },
        error => {}
    );

       this.usuarios = [
      "correo@corre.com",
      "password"];

  }
  addName(){
    // this._per.setName(this.nombre);
    // this._userServiceService.createUsers(this._per).subscribe();
    // this.nombre ="";
  }
  llamarCP(event: any){
    if(event.target.value.length == 18){
      console.log(this._util.validateCurp(event.target.value));
    }
    // if(event.target.value.length == 5 && !isNaN(event.target.value)){
    //   this.codigo = event.target.value;
    //   this._zipCode.getcodigoPostal(this.codigo).subscribe(
    //     res=>{
    //       this.arrayCodigo = res ['localities'];
    //       if(this.arrayCodigo.length != 0){
    //         this.estado = this.arrayCodigo[0].state;
    //         console.log(this.arrayCodigo[0].state);
    //       }
    //
    //     },
    //     error => {}
    //   );
    //
    // }
  }


}
