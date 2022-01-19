import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const COVID_INDIA_API = 'https://data.covid19india.org/v4/min/data.min.json';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  //getEmployeeById
  getAll():any {
    return this.httpClient.get(COVID_INDIA_API);
  }
}
