import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import {environment} from '../../environments/environment';
import {LoginService} from './login.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeslotService {

  private socket;

  constructor(
    private loginService: LoginService
  ) {
    this.socket = io(environment.api_base, {
      transportOptions: {
        polling: {
          extraHeaders: {
            'Authorization': 'Bearer ' + loginService.getAccessToken()
          }
        }
      }
    });
  }

  selectTimeslot(slot: number, user_id: string) {
    this.socket.emit('select', {slot, user_id});
  }

  getSelectedTimeslots(): Observable<any> {
    return new Observable(observable => {
      this.socket.on('select', (data) => {
        observable.next(data);
      });
    });
  }

  // FOR TESTING ONLY
  resetSlots(): Observable<any> {
    return new Observable(observable => {
      this.socket.on('reset', () => {
        observable.next();
      });
    });
  }

  sendRest() {
    this.socket.emit('reset');
  }
}
