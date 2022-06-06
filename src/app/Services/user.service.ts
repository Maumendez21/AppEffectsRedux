import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string = 'https://reqres.in/api/';

  constructor(private http: HttpClient) { }

  public getUsers(){
    return this.http.get( `${this.url}users?per_page=6&delay=4`)
    .pipe(
      map((resp: any) => {
        return resp['data'];
      })
    )
  }
  
  public getUserById(id: string){
    return this.http.get( `${this.url}users/${id}`)
    .pipe(
      map((resp: any) => {
        return resp['data'];
      })
    )
  }
}
