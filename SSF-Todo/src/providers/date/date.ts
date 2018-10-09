import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment  from '../../../node_modules/moment';
/*
  Generated class for the DateProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DateProvider {

  now = moment();

  constructor(public http: HttpClient) {
    
  }
}
