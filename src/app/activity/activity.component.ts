import { Component, OnInit, Input } from '@angular/core';
import { Activity } from '../activity';
import { Settings } from '../settings';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: [ './activity.component.css' ]
})
export class ActivityComponent implements OnInit {
  settings = Settings;
  @Input() activity: Activity;

  constructor() {}

  ngOnInit() {}

  doAction(action): void {
    switch (action.type) {
      case 'Action.OpenUrl':
        window.location.href = action.url;
        break;
    }
  }

}
