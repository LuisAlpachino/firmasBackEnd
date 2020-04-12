import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class User {
  private EN_PROCESO: number;
  private name: string;
  private paterno: string;
  private materno: string;
  private  rfc: string;
  private curp:string;
  private genders: number;
  private telephone: bigint;
  private fk_localities: bigint;
  private fk_user_status: number;
  private email: string;
  private password: string;
  private user_type: number;
  private address: string;

  //tipos de usuarios
  private EMPLEADO = 1;
  private CONTADOR = 2;
  private EMPRESA = 3;

  constructor() {
    this.name = "";
    this.paterno = "";
    this.EN_PROCESO= 3;
  }

  public getName(){
    return this.name;

  }
  public setName( name: string){
    this.name = name;
    return this.name;
  }
  public getPaterno(){
    return this.paterno;
  }

  public setPaterno(paterno: string){
    this.paterno = paterno;
    return this.paterno;
  }
  public getMaterno(){
    return this.materno;
  }

  public setMaterno(materno: string){
    this.materno = materno;
    return this.materno;
  }

  public getRfc(){
    return this.rfc;
  }

  public setRfc(rfc: string){
    this.rfc = rfc;
    return this.rfc;
  }

  public getCurp(){
    return this.curp;
  }

  public setCurp(curp: string){
    this.curp =curp;
    return this.curp;
  }
  public getGenders(){
    return this.genders;
  }

  public setGenders(genders: number){
    this.genders = genders;
    return this.genders;
  }

  public getEmail(){
    return this.email;
  }

  public setEmail(email: string){
    this.email = email;
    return this.email;
  }

  public getPassword(){
    return this.password;
  }

  public setPassword(pass: string){
    this.password = pass;
    return this.password;
  }

  public getTelephone(){
    return this.telephone;
  }

  public setTelephone(tel: bigint){
    this.telephone = tel;
    return this.telephone;
  }

  public getLocalities(){
    return this.fk_localities;
  }

  public setLocalities(id: bigint){
    this.fk_localities = id;
    return this.fk_localities;
  }
  public getUserStatus(){
    this.fk_user_status = this.EN_PROCESO;
    return this.fk_user_status;
  }

  public getUserType(){
    this.user_type = this.EMPLEADO;
    return this.user_type;
  }

  public setAddress(add: string){
    this.address = add;
    return this.address;
  }
  public getAddress(){
    return this.address;
  }

}
