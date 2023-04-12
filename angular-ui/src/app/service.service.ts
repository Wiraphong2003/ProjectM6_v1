import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  apiEndpoint = 'https://thankful-blue-bullfrog.cyclic.app';
  constructor() { }
}
