import { Component, OnInit, Input, Output } from '@angular/core';
import Swal from 'sweetalert2';

//importar el sevicio para obtener las localidades
import {ZipCodeService} from '../servicios/zip-code.service';
import {User} from '../users/user';
import {UserServiceService} from '../servicios/user-service.service';
import {Util} from '../Util/Util';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers:[ZipCodeService, User, UserServiceService]
})
export class FormComponent implements OnInit {
  user: Array<any>;
  localities: Array<any>;
  locality: string;
  name: string;
  lastName: string;
  secondLastName: string;
  email: string;
  pwd: string;
  passConfirm: string;
  rfc: string;
  curp: string;
  sex: number;
  fkLocality: bigint;
  telephone: bigint;
  state: string;
  municipality: string;
  street: string;
  //guardamos la respuesta de la api
  capRfc: string;


  //expresiones regulares
  regexEmail;
  regexCurp;
  regexRfc;
  regexPwd;



  constructor(private _getLocalities: ZipCodeService,
              private _users: User,
              private _userService: UserServiceService,
              private _getRfc: ZipCodeService,
              private _util: Util) {
    this.user = [];
    this.localities = [];
    this.locality = "";
    this.name = "";
    this.lastName = "";
    this.secondLastName = "";
    this.email = "";
    this.pwd = "";
    this.rfc = "";
    this.curp= "";
    this.sex =0;
    this.fkLocality= null;
    this.telephone = null;
    this.regexEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    this.regexRfc = /^(([ÑA-Z|ña-z|&]{3}|[A-Z|a-z]{4})\d{2}((0[1-9]|1[012])(0[1-9]|1\d|2[0-8])|(0[13456789]|1[012])(29|30)|(0[13578]|1[02])31)(\w{2})([A|a|0-9]{1}))$|^(([ÑA-Z|ña-z|&]{3}|[A-Z|a-z]{4})([02468][048]|[13579][26])0229)(\w{2})([A|a|0-9]{1})$/;
    this.regexPwd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    this.passConfirm = "";
    this.state= "";
    this.municipality= "";
    this.street = "";
    this.capRfc = "";
  }

  ngOnInit() {
  }

  enviarDatos(){
    if(this.validar()){
      this._users.setName(this.name);
      this._users.setPaterno(this.lastName);
      this._users.setMaterno(this.secondLastName);
      this._users.setCurp(this.curp);
      this._users.setEmail(this.email);
      this._users.setPassword(this.pwd);
      this._users.setGenders(this.sex);
      this._users.setLocalities(this.fkLocality);
      this._users.setRfc(this.rfc);
      this._users.setTelephone(this.telephone);
      this._users.setAddress(this.street);
      this._userService.createUsers(this._users).subscribe(
        res =>{
          this.user = res['user'];

          if(this.user.length != 0){
            Swal.fire({
              icon: 'success',
              title: 'Exito',
              text:  'El usuario ' + this.name + ' ha sido creado',
              html:'<a class="btn btn-outline-success " href="/login"  role="button">OK</a>',
              showConfirmButton: false
            })
          }else {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Su solicitud no puede ser procesada intente más tarde',
            })
          }

        },
        error => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ha ocurrido un error, intente más tarde',
          })
        }
      )
    }
  }

  private  validar(){
    if(!this.regexEmail.test(this.email)){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'El email no es valido'
      })
      return false;
    }
    if(!this.regexPwd.test(this.pwd)){
      Swal.fire({
        icon: 'error',
        text: 'La contraseña debe contener una longitud mínimo de 8 carácteres, una mayúscula, una minúscula y un carácter especial: @$!%*#?&'
      })
      return  false;
    }
    if(!(this.pwd == this.passConfirm)){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'El password no coincide'
      })
      return false;
    }
    if(!this._util.validateCurp(this.curp)){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'La curp no es valida'
      })
      return false;
    }
    if(this.regexRfc.test(this.rfc)){
      this._getRfc.getRfc(this.rfc).subscribe(
        res => {
          this.capRfc = res['status'];
          console.log(this.capRfc);
          if (this.capRfc != "success") {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'El RFC no es valido '
            });
            return false;
          }
        }, error1 => {}

      );
    }else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'El rfc no es valido'
      });
      return  false;
    }
    if(!(typeof this.telephone == 'bigint')){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'El numero telefonico no es valido'
      });
      return false;
    }
    return true;
  }

  obtenerCP(event: any){
    if(event.target.value.length == 5 && !isNaN(event.target.value)){
      this._getLocalities.getcodigoPostal(event.target.value).subscribe(
        res=>{
          this.localities = res ['localities'];
          if(this.localities.length != 0){
            this.state = this.localities[0].state;
            this.municipality = this.localities[0].municipality;
          }

        },
        error => {}
      );

    }
  }



}
