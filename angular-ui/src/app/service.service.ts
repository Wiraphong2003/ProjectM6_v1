import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  // apiEndpoint = 'https://thankful-blue-bullfrog.cyclic.app';
  apiEndpoint = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) {

  }

}
