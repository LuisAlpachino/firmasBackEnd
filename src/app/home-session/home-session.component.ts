import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../servicios/user-service.service';

@Component({
  selector: 'app-home-session',
  templateUrl: './home-session.component.html',
  styleUrls: ['./home-session.component.css']
})
export class HomeSessionComponent implements OnInit {

  user: Array<any>;

  constructor( private _user: UserServiceService) {
    this.user = [];
  }

  ngOnInit() {
    this.user = this._user.getUserLoggedin();
    console.log(this.user);
  }

  logout(){
    localStorage.clear();
  }


}
