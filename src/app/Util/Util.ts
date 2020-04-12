import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class Util {
  public validateCurp( curp: string){
    if(this.curpValid(curp.toUpperCase()))
      return true;
    return false;
  }

  private curpValid(curp: string) {
    var re = /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0\d|1[0-2])(?:[0-2]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/;
    let valido;
    valido = curp.match(re);
    if(!valido)
      return false;
    function getVerifyDigit(curpp) {
      var dictionary = "0123456789ABCDEFGHIJKLMNÑOPQRSTUVWXYZ",
        lngSum   = 0.0,
        lngDigit = 0.0;
      for (var  i=0; i<curpp.length; i++)
        lngSum = lngSum + dictionary.indexOf(curpp.charAt(i)) * (18-i);
      lngDigit = 10 -lngSum % 10;
      console.log(lngDigit);
      if (lngDigit == 10)
        return 0
      return lngDigit;
    }
    if (valido[2] != getVerifyDigit(valido[1]))
      return  false
    return true;//curp valida
  }
}
