import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-validar-documents',
  templateUrl: './validar-documents.component.html',
  styleUrls: ['./validar-documents.component.css']
})
export class ValidarDocumentsComponent implements OnInit {
  //cargar archivo
  fileData: File;
  previewUrl: any;
  fileUploadProgress: string;

  //documentos Path Name
  actaPath: string;
  curpPath: string;
  credencialPath: string;
  domicilioPath: string;

  //base64
  base64: FileReader;
  acta: any;
  curp: any;
  ine: any;
  domicilio: any;

  constructor() {
    this.fileData = null;
    this.previewUrl = null;
    this.fileUploadProgress = null;
    this.actaPath = null;
    this.credencialPath =  null;
    this.domicilioPath = null;
    this.curpPath = null;
    this.base64 = null;
    this.acta = null;
    this.curp = null;
    this.ine = null;
    this.domicilio = null;
  }

  ngOnInit() {
  }

  onSubmit(){
    const formData = new FormData();
    formData.append('acta', this.acta);
    formData.append('curp', this.curp);
    formData.append('domicilio',this.domicilio);
    formData.append('ine',this.ine);
    this.fileUploadProgress = '0%';

  }

  fileActa(fileInput: any){
    this.fileData = <File>fileInput.target.files[0];
    this.actaPath = this.fileData.name;
    this.base64 = new FileReader();
    this.base64.onloadend = (e) =>{
      this.acta =this.base64.result;
    }
    this.base64.readAsDataURL(this.fileData);

  }

  fileIne(fileInput: any){
    this.fileData = <File>fileInput.target.files[0];
    this.credencialPath = this.fileData.name;
    this.base64 = new FileReader();

    this.base64.onloadend = (e) =>{
      this.ine =this.base64.result;
    }
    this.base64.readAsDataURL(this.fileData);

  }
  filedomicilio(fileInput: any){
    this.fileData = <File>fileInput.target.files[0];
    this.domicilioPath = this.fileData.name;
    this.base64 = new FileReader();

    this.base64.onloadend = (e) =>{
      this.domicilio =this.base64.result;
    }
    this.base64.readAsDataURL(this.fileData);

  }
  fileCurp(fileInput: any){
    this.fileData = <File>fileInput.target.files[0];
    this.curpPath = this.fileData.name;
    this.base64 = new FileReader();

    this.base64.onloadend = (e) =>{
      this.curp =this.base64.result;
    }
    this.base64.readAsDataURL(this.fileData);

  }
  fileOthers(fileInput: any){
    this.fileData = <File>fileInput.target.files[0];
    // this.actaPath = this.fileData.name;
    this.base64 = new FileReader();

    this.base64.onloadend = (e) =>{
      // this =this.base64.result;
    }
    this.base64.readAsDataURL(this.fileData);

  }


}
