import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpHeaderResponse} from '@angular/common/http';
import {User} from "../users/user";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  url: string;
  api_token: string;
  pathUser: string;
  pathSendUSer: string;
  pathLogin: string;

  //Variables de sessión
  private isUserLoggedIn;
  public usserLogged: Array<any>;

  constructor( private _httpClient:HttpClient) {
    this.url = "http://10.1.1.35/eFirmas/public/";
    this.api_token = "w15ehW4D3SXSi20CukFKZALyRfmkRkv7mNZgmTA7lzG9p96HFKr4Sj1jifie";
    this.pathUser = "getUsers";
    this.pathSendUSer = "createUser";
    this.pathLogin = "login";

    //Variables de sessión
    this.isUserLoggedIn = false;
  }

  setUserLoggedIn(user: Array<any>){
    this.isUserLoggedIn = true;
    this.usserLogged = user;
    localStorage.setItem('usuario', JSON.stringify(user));
  }

  getUserLoggedin(){
    return JSON.parse(localStorage.getItem('usuario'));
  }


  getUsers(){
    let headers = new HttpHeaders().set("Content-Type", "application/json");
                                    // .set("Authorization", this.api_token);
    return this._httpClient.get(this.url + this.pathUser,{
      headers: headers
    });
  }
  createUsers(usuario: User){
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    return this._httpClient.post(this.url + this.pathSendUSer,{
      "user_name": usuario.getName(),
      "last_name" : usuario.getPaterno(),
      "second_last_name" : usuario.getMaterno(),
      "rfc" : usuario.getRfc(),
      "curp" : usuario.getCurp(),
      "user_type" : usuario.getUserType(),
      "genders" : usuario.getGenders(),
      "telephone" : usuario.getTelephone(),
      "fk_localities" : usuario.getLocalities(),
        "fk_user_status" : usuario.getUserStatus(),
      "email" : usuario.getEmail(),
      "password" : usuario.getPassword(),
      "address" : usuario.getAddress()
    },{
      headers: headers
    });

  }

  getUserLogin(email: string, pass: string){
    let headers =  new HttpHeaders().set("Content-Type", "application/json");
    return this._httpClient.post(this.url+this.pathLogin,{
      "email" : email,
      "password" : pass,
    },{
      headers: headers
    });
  }
}


