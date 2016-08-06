import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the User provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UsersService {

  constructor(private http: Http) {}

  getUsers(){
    return this.http.get('http://api.randomuser.me/?results=50')
    .map(res => res.json())
    .toPromise();
  }



}

