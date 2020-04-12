import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  @Input()
  fileUploadProgress: string;
  @Input()
  uploadedFilePath: string;
  //nobre del titulo
  @Input()
  nameTitle: string;

  constructor() {
  }

  ngOnInit() {
  }

}
