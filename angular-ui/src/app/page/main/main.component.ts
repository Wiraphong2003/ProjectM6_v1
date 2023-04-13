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
  Lottary !: any;
  t1 !: any;
  t2 !: any;
  t3 !: any;
  t4 !: any;
  t5 !: any;
  t6 !: any;
  type !: any;
  All !: any[];
  checked = false;
  ALL1: any[] = [];
  chk: any[] = []
  value: any[] = [];
  isSelected = false;

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
      this.Lottary = data;
    });

  }

  // checkbox(obj: any) {
  //   // console.log(this.checked);
  //   console.log(obj.lid);

  //   let lid = obj.lid;
  //   let isck = false;
  //   this.ALL1.forEach(element => {
  //     if (element.lid == obj.lid) {
  //       console.log(true);
  //       isck = true;
  //     } else {
  //       isck = false;
  //     }
  //   });

  //   console.log(isck);
  //   if (isck) {
  //     console.log(false);
  //     this.ALL1.forEach((element, index) => {
  //       if (element.lid == lid) {
  //         this.ALL1.splice(index, 1);
  //       }
  //     });
  //   }
  //   else {
  //     this.ALL1.push(obj);
  //   }

  //   console.log(this.ALL1);
  // }

  checkbox(obj: any) {
    const lid = obj.lid;
    const index = this.ALL1.findIndex((element) => element.lid === lid);
    console.log(lid);

    if (index >= 0) {
      // The checkbox is already selected, so remove it from the array
      this.ALL1.splice(index, 1);
    } else {
      // The checkbox is not selected, so add it to the array
      this.ALL1.push(obj);

      // Remove any existing items from the array with the same `lid` value
      // this.ALL1 = this.ALL1.filter((element) => element.lid !== lid);
    }

    console.log(this.ALL1);
  }


  checkALL() {
    console.log("Check ALL");
    if (this.isSelected){
      this.isSelected =false
    }else{
      this.isSelected = true
    }
  }

}

// https://thankful-blue-bullfrog.cyclic.app/read
