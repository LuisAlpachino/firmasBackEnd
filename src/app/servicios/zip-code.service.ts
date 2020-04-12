import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ZipCodeService {
  url: string;
  pathRfc: string;
  pathLocalities: string;


  constructor(private _zipCodeService: HttpClient, private _rfcService: HttpClient) {
    this.url = "http://10.1.1.35/eFirmas/public/";
    this.pathLocalities = "addresses/getLocalitiesByCP/";
    this.pathRfc = "api/rfc/";
  }

  getcodigoPostal(codigo: string){
    let headers = new HttpHeaders().set("Content-Type", "application/json");

     return this._zipCodeService.get(this.url+ this.pathLocalities +codigo, {
     headers: headers
    });
  }

  getRfc(rfc: string){
    let headers = new HttpHeaders().set("Content-Type", "application/json");

    return this._rfcService.get(this.url + this.pathRfc + rfc,{
      headers: headers
    })
  }
}
