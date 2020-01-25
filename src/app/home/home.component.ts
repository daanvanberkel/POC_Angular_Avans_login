import { Component, OnInit } from '@angular/core';
import {User} from '../models/user';
import {LoginService} from '../services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user: User;

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.loginService.getUser().subscribe(user => this.user = user);
  }

}
