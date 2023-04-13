import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  template: `<!-- To render Image Editor. -->
              <div id="wrapperDiv" style="width:550px;height:350px;">
               <ejs-imageeditor></ejs-imageeditor>
              </div>`
})
export class AppComponent {
  title = 'angular-ui';

}
