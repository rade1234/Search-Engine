import { Injectable } from '@angular/core';
import { RequestOptions } from '@angular/http';

@Injectable()
export class AuthorizationService {

  constructor(private baseOptions: RequestOptions) { }

  getToken() {
    let token = localStorage.getItem('token');

    if (!token) {
      const match = window.location.hash.match(/#access_token=(.*?)&/);
      token = match && match[1];
      localStorage.setItem('token', token);
    }

    if (!token) {
      this.authorize();
    }

    this.baseOptions.headers.set('Authorization', 'Bearer ' + token);

    return token;
  }

  authorize() {
    localStorage.removeItem('token');

    const client_id = '33708254afcf45c382afd2c203ea53ad';
    const redirect_uri = 'http://localhost:4200/';

    window.location.replace(`https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&redirect_uri=${redirect_uri}`);
  }

}
