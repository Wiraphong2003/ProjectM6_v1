import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  data !: any;
  t1 !: any;
  t2 !: any;
  t3 !: any;
  t4 !: any;
  t5 !: any;
  t6 !: any;
  type !: any;
  All !: any[];
  checked = false;

  constructor(
    private dataService: ServiceService,
    private http: HttpClient,

  ) {

    http.get(dataService.apiEndpoint + '/Lottary/1').subscribe((data: any) => {
      console.log(data);
      this.t1 = data;
    });

    http.get(dataService.apiEndpoint + '/Lottary/2').subscribe((data: any) => {
      console.log(data);
      this.t2 = data;
    });


    http.get(dataService.apiEndpoint + '/Lottary/3').subscribe((data: any) => {
      console.log(data);
      this.t3 = data;
    });

    http.get(dataService.apiEndpoint + '/Lottary/4').subscribe((data: any) => {
      console.log(data);
      this.t4 = data;
    });

    http.get(dataService.apiEndpoint + '/Lottary/5').subscribe((data: any) => {
      console.log(data);
      this.t5 = data;
    });

    http.get(dataService.apiEndpoint + '/read').subscribe((data: any) => {
      console.log(data);
      this.data = data;
    });

  }

  checkbox(lid: any) {
    // console.log(this.checked);
    console.log(lid);

    // const result = this.All.some((obj: any) => {
    //   return obj.id === lid;
    // });

    // if (result) {
    //   // 👇️ this runs
    //   console.log('✅ The value is contained in array');
    // } else {
    const s  = this.All.push(lid);
    console.log(s);

    //   console.log('⛔️ The value is NOT contained in array');
    // }

    console.log(this.All);

  }


}

// https://thankful-blue-bullfrog.cyclic.app/read
