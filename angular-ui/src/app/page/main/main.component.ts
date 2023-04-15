import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';

import { Browser, getComponent } from '@syncfusion/ej2-base';
import { ImageEditorComponent } from '@syncfusion/ej2-angular-image-editor';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
// import { saveAs } from 'file-saver';
// import {JSZip} from 'jszip';

import * as JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { Image } from './imageD.model';
import { LocalService } from 'src/app/local.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements AfterViewInit, OnInit {
  // @ViewChild('canvas') canvas !: ElementRef;
  @ViewChild('canvas', { static: true }) myCanvas !: ElementRef;
  @ViewChild('Arraycanvas', { static: true }) Arraycanvas!: ElementRef[];
  // @ViewChild('item', { static: true }) myCanvas !: ElementRef;
  ctx!: CanvasRenderingContext2D;
  areAllImagesLoaded = false;

  // imagesD = [
  //   { src: 'https://i.ibb.co/w4QhYBr/340618868-899903277951742-6679712580878809918-n.jpg', alt: 'Image 1' },
  //   { src: 'https://i.ibb.co/w4QhYBr/340618868-899903277951742-6679712580878809918-n.jpg', alt: 'Image 2' },
  //   { src: 'https://i.ibb.co/w4QhYBr/340618868-899903277951742-6679712580878809918-n.jpg', alt: 'Image 3' },
  //   // ...
  // ];
  imagesD: Image[] = [
    { src: '' + this.local.getData("img1"), alt: 'Image 1' },
    { src: '' + this.local.getData("img1"), alt: 'Image 2' },
    { src: '' + this.local.getData("img1"), alt: 'Image 3' },
  ];



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
  name = 'Angular 5';
  listImage: any[] = []
  arrayOfIndexes: any[] = []
  listimages: HTMLCanvasElement[] = [];



  constructor(
    private dataService: ServiceService,
    private http: HttpClient,
    private local: LocalService,
    @Inject(DOCUMENT) document: Document,
    private el: ElementRef
  ) {

    http.get(dataService.apiEndpoint + '/image/user1').subscribe((data: any) => {
      console.log(data);
      let img = data[0].img1
      this.imageuser = img;
      console.log("img: " + img);
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
  trackByFn(index: any) {
    return (index);
  }
  async Cimg(ee: any) {
    this.arrayOfIndexes = this.arrayOfIndexes.filter(item => item !== item);
    this.listimages = this.listimages.filter(item => item !== item);
    console.log(ee);

    for (let index = 0; index < this.ALL1.length; index++) {
      const element = this.ALL1[index];
      const nameimg = element.name;
      console.log(nameimg);
      this.arrayOfIndexes.push(index)

      let canvas = <HTMLCanvasElement>this.el.nativeElement.querySelector('#canvas-' + index);
      const context = canvas.getContext('2d')
      if (context) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.strokeStyle = 'red';
        context.fillStyle = 'rgba(17, 0, 255, 0.5)';
        const img = await this.loadImage(this.local.getData("img1") + '');

        // Calculate the new width and height
        const newWidth = 500;
        const newHeight = (img.height / img.width) * newWidth;

        // Draw the resized image on the canvas
        this.ctx.drawImage(img, 0, 0, newWidth, newHeight);
        let w = 500;
        let h = 500;
        let lenHH = nameimg.length;
        context.shadowOffsetX = 4;
        context.shadowOffsetY = 4;
        context.shadowBlur = 3;
        context.fillStyle = 'red';
        context.font = '36px Arial';
        context.fillText(nameimg, (w / 2) - (lenHH * 9), 145);
        context.fillText('7', 190, 200);
        context.fillText('7', 290, 200);
        let A1 = ["12", "23", "31"];
        A1.forEach((element, index) => {
          context.fillText(element, (80 * index) + 150, 250);
        });

        let A2 = ["11", "22", "32"];
        A2.forEach((element, index) => {
          context.fillText(element, (80 * index) + 150, 300);
        });

        let A3 = ["123", "223", "334", "467"];
        A3.forEach((element, index) => {
          context.fillText(element, (80 * index) + 90, 350);
        });
        console.log("imgs " + this.ctx);


        // Convert the canvas to an image and add it to the array
        // images.push(await this.canvasToImage(canvas, nameimg));
        console.log(canvas);
        this.listimages.push(canvas);
        console.log(this.listimages);
      }
    }

  }
  async myDrawingFunction(index: number) {
    //here you retrieve your element by id eg: '#canvas-2'
    let canvas = <HTMLCanvasElement>this.el.nativeElement.querySelector('#canvas-' + index);
    const context = canvas.getContext('2d') //just an example
    for (let index = 0; index < this.ALL1.length; index++) {
      const element = this.ALL1[index];
      const nameimg = element.name;
      if (context) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.strokeStyle = 'red';
        context.fillStyle = 'rgba(17, 0, 255, 0.5)';
        const img = await this.loadImage(this.local.getData("img1") + '');

        // Calculate the new width and height
        const newWidth = 500;
        const newHeight = (img.height / img.width) * newWidth;

        // Draw the resized image on the canvas
        this.ctx.drawImage(img, 0, 0, newWidth, newHeight);
        let w = 500;
        let h = 500;
        let lenHH = nameimg.length;
        context.shadowOffsetX = 4;
        context.shadowOffsetY = 4;
        context.shadowBlur = 3;
        context.fillStyle = 'red';
        context.font = '36px Arial';
        context.fillText(nameimg, (w / 2) - (lenHH * 9), 145);
        context.fillText('7', 190, 200);
        context.fillText('7', 290, 200);
        let A1 = ["12", "23", "31"];
        A1.forEach((element, index) => {
          context.fillText(element, (80 * index) + 150, 250);
        });

        let A2 = ["11", "22", "32"];
        A2.forEach((element, index) => {
          context.fillText(element, (80 * index) + 150, 300);
        });

        let A3 = ["123", "223", "334", "467"];
        A3.forEach((element, index) => {
          context.fillText(element, (80 * index) + 90, 350);
        });
        console.log("imgs " + this.ctx);


        // Convert the canvas to an image and add it to the array
        // images.push(await this.canvasToImage(canvas, nameimg));
        console.log(canvas);
        this.listimages.push(canvas);
        console.log(this.listimages);
      }
    }
  }

  ngOnInit(): void {
    const canvas: HTMLCanvasElement = this.myCanvas.nativeElement;
    const context = canvas.getContext('2d');
    if (context) {
      context.strokeStyle = 'red';
      context.fillStyle = 'rgba(17, 0, 255, 0.5)';
      const img = new Image();
      img.onload = () => {
        // Calculate the new width and height
        const newWidth = 500;
        const newHeight = (img.height / img.width) * newWidth;

        // Draw the resized image on the canvas
        this.ctx.drawImage(img, 0, 0, newWidth, newHeight);
        // this.#drawText(context);
      };
      img.src = this.local.getData("img1") + "";
    }
  }
  animate(): void { }

  #drawText(context: CanvasRenderingContext2D) {
    var NameHost = "บ้านทดสอบ"
    let w = 500
    let h = 500
    let len = NameHost.length;
    console.log(NameHost.length);
    context.shadowOffsetX = 4;
    context.shadowOffsetY = 4;
    context.shadowBlur = 3;
    context.fillStyle = 'red';
    context.font = '36px Arial';
    context.fillText(NameHost, (w / 2) - (len * 10), 145);
    context.fillText('7', 190, 200);
    context.fillText('7', 290, 200);
    let A1 = ["12", "23", "31"]
    A1.forEach((element, index) => {
      context.fillText(element, (80 * index) + 150, 250);
    });

    let A2 = ["11", "22", "32"]
    A2.forEach((element, index) => {
      context.fillText(element, (80 * index) + 150, 300);
    });

    let A3 = ["123", "223", "334", "467"]
    A3.forEach((element, index) => {
      context.fillText(element, (80 * index) + 90, 350);
    });
  }
  downloadImage(imageUrl: string, imageName: string) {
    // สร้าง XMLHttpRequest object
    const xhr = new XMLHttpRequest();
    xhr.open('GET', imageUrl, true);
    xhr.responseType = 'blob';
    xhr.onload = () => {
      // ดาวน์โหลดไฟล์รูปภาพ
      const blob = xhr.response;
      saveAs(blob, imageName);
    };
    xhr.send();
  }

  downloadImagesALL(images: any[], zipName: string) {
    let zipFile: JSZip = new JSZip();
    let imgFolder!: any;
    imgFolder = zipFile.folder('images');
    images.forEach((image, index) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', image.src, true);
      xhr.responseType = 'blob';
      xhr.onload = () => {
        const blob = xhr.response;
        imgFolder.file(`${image.alt}.jpg`, blob);
        if (index === images.length - 1) {
          zipFile.generateAsync({ type: 'blob' }).then((content) => {
            saveAs(content, `${zipName}.zip`);
          });
        }
      };
      xhr.send();
    });
  }


  async createImage(): Promise<HTMLImageElement[]> {
    this.listimages = this.listimages.filter(item => item !== item);
    this.arrayOfIndexes = this.arrayOfIndexes.filter(item => item !== item);
    const images: HTMLImageElement[] = [];
    // const Arrcanvas: HTMLCanvasElement[] = [];

    for (let i = 0; i < this.ALL1.length; i++) {
      const element = this.ALL1[i];
      const nameimg = element.name;
      const canvas: HTMLCanvasElement = this.myCanvas.nativeElement;

      // Arrcanvas[i] = this.Arraycanvas[i].nativeElement;


      // Arrcontext = Arrcanvas[i].getContext('2d');

      const context = canvas.getContext('2d');
      if (context) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.strokeStyle = 'red';
        context.fillStyle = 'rgba(17, 0, 255, 0.5)';
        const img = await this.loadImage(this.local.getData("img1") + '');

        // Calculate the new width and height
        const newWidth = 500;
        const newHeight = (img.height / img.width) * newWidth;

        // Draw the resized image on the canvas
        this.ctx.drawImage(img, 0, 0, newWidth, newHeight);
        let w = 500;
        let h = 500;
        let lenHH = nameimg.length;
        context.shadowOffsetX = 4;
        context.shadowOffsetY = 4;
        context.shadowBlur = 3;
        context.fillStyle = 'red';
        context.font = '36px Arial';
        context.fillText(nameimg, (w / 2) - (lenHH * 9), 145);
        context.fillText('7', 190, 200);
        context.fillText('7', 290, 200);
        let A1 = ["12", "23", "31"];
        A1.forEach((element, index) => {
          context.fillText(element, (80 * index) + 150, 250);
        });

        let A2 = ["11", "22", "32"];
        A2.forEach((element, index) => {
          context.fillText(element, (80 * index) + 150, 300);
        });

        let A3 = ["123", "223", "334", "467"];
        A3.forEach((element, index) => {
          context.fillText(element, (80 * index) + 90, 350);
        });
        console.log("imgs " + this.ctx);


        // Convert the canvas to an image and add it to the array
        // images.push(await this.canvasToImage(canvas, nameimg));
        console.log(canvas);
        this.listimages.push(canvas);
        console.log(this.listimages);
        // this.imagesD.push("asdasd",nameimg)
        this.imagesD.push()
        // this.Arraycanvas.push(canvas);
        this.arrayOfIndexes.push(i)

      }
      console.log(this.imagesD);
      console.log(i);


    }
    return images;
  }

  loadImage(url: string): Promise<HTMLImageElement> {
    console.log("loadImage");
    console.log("url: " + url);

    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () =>
        resolve(img);
      img.onerror = reject;
      img.src = url;

    });
  }

  canvasToImage(canvas: HTMLCanvasElement, name: string): Promise<HTMLImageElement> {
    console.log("canvasToImage");
    console.log("canvas" + canvas + "\tname: " + name);
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () =>
        resolve(img);
      img.onerror = reject;
      img.src = canvas.toDataURL("");
      img.setAttribute('download', name);
      img.setAttribute('name', name);
    });
  }

  ngAfterViewInit(): void {
    this.ctx = this.myCanvas.nativeElement.getContext('2d');
  }


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
