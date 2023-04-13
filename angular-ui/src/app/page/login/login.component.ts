import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username!: String;
  password!: String;
  hide: any;
  menu: any;
  data!: any;
  constructor(private http: HttpClient, private router: Router) {

  }
  login() {
    console.log('OK');
    let json = {
      "username": this.username,
      "password": this.password
    }
    // let json = {
    //   "username": "user1",
    //   "password": "1234"
    // }
    console.log(json);
    // http://202.28.34.250/webdev/login
    // http://localhost:9999/webAPI_ProjectWebFinal/login
    // https://a1-5ym4.onrender.com/login
    // http://localhost:3000/login


    this.http.post('http://localhost:8000/login', JSON.stringify(json))
      .subscribe(Response => {
        console.log(json);

        console.log("success");
        if (Response) {
          console.log("IN OK");
          // this.router.navigateByUrl('/member/' + this.username);
          this.router.navigateByUrl('/main');
        }
      }, Error => {
        console.log("Fail");
      });
  }
}
