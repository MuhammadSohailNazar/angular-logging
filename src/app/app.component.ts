import { Component } from '@angular/core';
import { LogService } from './log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-logging';

  constructor(private logService:LogService ) {
    this.logService.console.log("app component",'console executed from AppComponent');
  }

}
