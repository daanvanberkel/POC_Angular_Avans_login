import {Component, OnInit} from '@angular/core';
import {LoginService} from './services/login.service';
import {User} from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  user: User;

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.loginService.getUser().subscribe(user => this.user = user);
  }
}
