import { Injectable } from '@angular/core';
import { DirectLine } from 'botframework-directlinejs';
import { Observable } from 'rxjs/Observable';
import { ActivityType } from './activity-type';
import * as secret from '../assets/directLineSecret.json';

@Injectable()
export class DirectLineService {
  private directLine: DirectLine;

  constructor() {
    this.directLine = new DirectLine({
      secret: secret['directLineSecret']
    });
  }

  post(activity: any): Observable<any> {
    return this.directLine.postActivity(activity);
  }

  listenForMessages(): Observable<any> {
    return this.directLine.activity$
      .filter(activity => activity.type === ActivityType.MESSAGE && activity.from.id === 'chime-basic-bot-poc');
  }

  listenForOtherActivities(): Observable<any> {
    return this.directLine.activity$
      .filter(activity => activity.type !== ActivityType.MESSAGE && activity.from.id === 'chime-basic-bot-poc');
  }

  monitorConnection(): Observable<any> {
    return this.directLine.connectionStatus$;
  }

  // reconnect


}
