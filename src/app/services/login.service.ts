import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {User} from '../models/user';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  getUser(): Observable<User> {
    return this.http.get<User>(`${environment.api_base}/me`);
  }

  getAccessToken(): string {
    return localStorage.getItem('access_token');
  }

  setAccessToken(token: string) {
    localStorage.setItem('access_token', token);
  }

  removeAccessToken() {
    localStorage.removeItem('access_token');
  }
}
