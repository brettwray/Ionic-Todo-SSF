import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class Account {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
export class User {
  id: string;
  created: string;
  ttl: number;
  userId: number;
}

export class IdentityConfirmation {
  uid: string;
  token: string;
}

export class NewPasswordContext {
  accessToken: string;
  newPassword: string;
}

const base = "http://localhost:3000/api/AppUsers"
const login = "/login"
const logout = "/logout"
const confirm = "/confirm"
const set_password="/reset-password"

const TOKEN = "token"
const UID = "uid"
const ACCESS_TOKEN = "access_token"

@Injectable()
export class AuthProvider {

  constructor(public http: HttpClient) {
    
  }
  public createAccount(account: Account){
    return this
    .http
    .post(base, account, {observe : 'response'});
  }
  public login(account: Account){
    return this
    .http
    .post(`${base}${login}`, account, { observe: 'response' });
  }

  public logout(accessToken: string) {
    const params = new HttpParams()
    .set(ACCESS_TOKEN, accessToken);

    return this
    .http
    .post(`${base}${logout}`, {}, { params: params, observe: 'response' });
  }

  public confirm(identity: IdentityConfirmation){

    const params = new HttpParams()
    .set(UID, identity.uid)
    .set(TOKEN, identity.token)

    return this
      .http
      .get(`${base}${confirm}`, { params: params, observe: 'response' });
  }

  public setPassword(newPasswordContext: NewPasswordContext) {

    const params = new HttpParams()
      .set(ACCESS_TOKEN, newPasswordContext.accessToken);

    return this
      .http
      .post(`${base}${set_password}`, newPasswordContext, { params: params, observe: 'response' });
  }
}
