import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Credentials } from '../models/credentials';
import { UserResponse } from '../models/user-response';


@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  constructor(private httpClient: HttpClient) {}

  user: UserResponse = {
    id: '',
    givenName: '',
    surname: '',
    email: '',
    username: '',
    role: '',
    password: '',
    isActive: false,
  };

  login(credentials: Credentials): Observable<HttpResponse<UserResponse>> {
    console.log(this.user)
    return this.httpClient.post('http://localhost:5000/project2/auth', credentials, {
      observe: 'response',
    }) as Observable<HttpResponse<UserResponse>>;
  }
}
