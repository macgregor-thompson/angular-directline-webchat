import { Component, OnInit } from '@angular/core';
import { DirectlineService } from '../directline.service';
import { Activity } from '../activity';
import { ActivityType } from '../activity-type';
import { ConnectionStatus } from 'botframework-directlinejs';


@Component({
  selector: 'app-web-chat',
  templateUrl: './web-chat.component.html',
  styleUrls: [ './web-chat.component.css' ]
})
export class WebChatComponent implements OnInit {
  activities: Activity[] = [];
  status = ConnectionStatus.Uninitialized;
  newMessage = '';
  spinner = false;

  constructor(private dl: DirectlineService) {}

  ngOnInit() {
    this.dl.monitorConnection().subscribe(connectionStatus => {});

    this.dl.listenForMessages().subscribe(activity => {
      this.activities.push(activity);
      this.spinner = false;
      console.log('received message from bot:', activity);
    });

    this.dl.listenForOtherActivities().subscribe(activity => console.log('other activities from bot:', activity));

    this.dl.monitorConnection().subscribe(status => {
      this.updateConnectionStatus(status);
    });
  }

  postMessage() {
    const activity = new Activity(
      this.newMessage,
      { id: 'default-user', name: 'User' },
      ActivityType.MESSAGE
    );
    this.activities.push(activity);
    this.dl.post(activity)
      .subscribe(null, e => console.log('Error posting activity', e));
    this.newMessage = '';
  }

  updateConnectionStatus(status) {
    this.status = status;
    switch (status) {
      case ConnectionStatus.Uninitialized: // the status when the DirectLine object is first created/constructed
        console.log(`Connection status: ${status}, Uninitialized `);
        break;
      case ConnectionStatus.Connecting:       // currently trying to connect to the conversation
        this.spinner = true;
        console.log(`Connection status: ${status}, Connecting `);
        break;
      case ConnectionStatus.Online:           // successfully connected to the conversation. Connection is healthy so far as we know.
        console.log(`Connection status: ${status}, Online `);
        break;
      case ConnectionStatus.ExpiredToken:     // last operation errored out with an expired token. Your app should supply a new one.
        console.log(`Connection status: ${status}, ExpiredToken `);
        break;
      case ConnectionStatus.FailedToConnect:  // the initial attempt to connect to the conversation failed. No recovery possible.
        console.log(`Connection status: ${status}, FailedToConnect `);
        break;
      case ConnectionStatus.Ended:            // the bot ended the conversation
        console.log(`Connection status: ${status}, Ended `);
        break;
      default:
        console.log(`Default connection switch statement...Connection status: ${status}`);
    }
  }

}
