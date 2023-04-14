import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';

import { Browser, getComponent } from '@syncfusion/ej2-base';
import { ImageEditorComponent } from '@syncfusion/ej2-angular-image-editor';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  @ViewChild('myCanvas')
  private myCanvas: ElementRef = {} as ElementRef;
  @ViewChild('ImageEditor')
  public ImageEditorInstance!: ImageEditorComponent;
  public toolbarItems: string[] = ['Annotate', 'Text', 'Rectangle', 'Ellipse'];
  public created = (): void => {
    this.ImageEditorInstance.open("https://i.ibb.co/w4QhYBr/340618868-899903277951742-6679712580878809918-n.jpg");
  }
  public text = (): void => {
    this.ImageEditorInstance.drawText(50, 50, 'Syncfusion');
  }

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
  imageuser !: any;



  constructor(
    private dataService: ServiceService,
    private http: HttpClient,
    @Inject(DOCUMENT) document: Document
  ) {


    http.get(dataService.apiEndpoint + '/image/user1').subscribe((data: any) => {
      console.log(data);
      this.imageuser = data;
      let img = this.imageuser[0]
      
    });

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
  if (this.isSelected) {
    this.isSelected = false
    this.remove();
  } else {
    this.isSelected = true
    this.remove();
    console.log(this.ALL1);
    this.Lottary.forEach((element: any) => {
      this.ALL1.push(element)
    });
  }
  console.log(this.ALL1);
}
checkis(ischk: boolean) {
  if (ischk) {

  } else {

  }
}
remove() {
  this.ALL1 = this.ALL1.filter(item => item !== item);
}

}

// https://thankful-blue-bullfrog.cyclic.app/read
