import {Injectable} from '@angular/core';
import {DirectLine, ConnectionStatus} from 'botframework-directlinejs';
import {Observable} from 'rxjs/Observable';
import {ActivityType} from './activity-type';

@Injectable()
export class DirectlineService {

  private directLine: DirectLine;

  constructor() {
    this.directLine = new DirectLine({
      secret: 'fhtsGyBw90c.cwA.PgY.GTR472aCtpnPlQzXjA4ZfWlolsZN42cH5053fcExOeM'
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
