import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  apiEndpoint = 'https://nodejsapim6.herokuapp.com';
  apiEndpointLocal = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) {

  }

}
