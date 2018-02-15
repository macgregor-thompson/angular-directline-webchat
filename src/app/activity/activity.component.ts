import { Component, OnInit, Input } from '@angular/core';
import {Activity} from '../activity';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  @Input() activity: Activity;

  constructor() { }

  ngOnInit() {
  }

  doAction (action): void {
    switch (action.type) {
      case 'Action.OpenUrl':
        window.location.href = action.url;
        break;
    }
  }

}
