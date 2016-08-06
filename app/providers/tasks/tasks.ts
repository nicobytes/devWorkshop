import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise'

/*
  Generated class for the Tasks provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class TasksService {

  path: string = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: Http) {}

  getTasks():Promise<any>{
    return this.http.get(this.path)
    .map(res => res.json())
    .toPromise();
  }

  getTask(id: number):Promise<any>{
    return this.http.get(`${this.path}/${id}`)
    .map(res => res.json())
    .toPromise();
  }

  createTask(data:any):Promise<any>{
    return this.http.post(this.path, data)
    .map(res => res.json())
    .toPromise();
  }

  updateTask(id:number, data: any):Promise<any>{
    return this.http.put(`${this.path}/${id}`, data)
    .map(res => res.json())
    .toPromise();
  }

  deleteTask(id:number):Promise<any>{
    return this.http.delete(`${this.path}/${id}`)
    .map(res => res.json())
    .toPromise();
  }

}

