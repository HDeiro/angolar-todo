import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { map, filter, find } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Array<User>> {
    return this.http.get<Array<any>>('assets/mocks/users.json').pipe(
      map(items => items.map(item => {
        let user = new User();
        Object.keys(item).forEach(key => user[key] = item[key]);
        return user;
      }))
    );
  }

  getUser(id:number): User {
    let user = new User();
    user.id = id;
    user.name = "Hugo Deiró";
    user.email = "hugodeiro@gmail.com";
    return user;
  }

  async deleteUser(user: User) {
    return new Promise((resolve, reject) => {
      console.log('Deleted user: ', user);
      resolve(true);
    });
  }
}
