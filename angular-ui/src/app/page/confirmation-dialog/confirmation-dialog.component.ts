import { Component, Input, OnInit } from '@angular/core';

import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent implements OnInit {

  // @Input() title: string;
  // @Input() message: string;
  // @Input() btnOkText: string;
  // @Input() btnCancelText: string;
  title!: any;
  message!: any;
  btnCancelText!: any;
  btnOkText!: any;

  constructor(private service: ServiceService) {

  }
  ngOnInit(): void {

  }

  dismiss() {

  }
  decline() {

  }
  accept() {

  }
}
