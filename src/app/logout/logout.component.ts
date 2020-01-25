import { Component, OnInit } from '@angular/core';
import {LoginService} from '../services/login.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.loginService.removeAccessToken();
    window.location.href = '/';
  }
}
