import { Component } from '@angular/core';
import { NotificationService } from './services/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  notificationType: string;
  message: string;

  constructor(private _notificationService: NotificationService) {

  }

  showNotification() {
    switch(this.notificationType){
      case 'Info':
        this._notificationService.info(this.message);
        break;
      case 'Error':
        this._notificationService.error(this.message);
        break;
      default:
    }
  }

}
