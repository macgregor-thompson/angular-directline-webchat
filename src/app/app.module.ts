import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LoadingModule, ANIMATION_TYPES } from 'ngx-loading';

import { AppComponent } from './app.component';
import { WebChatComponent } from './web-chat/web-chat.component';
import { DirectLineService } from './directline.service';
import { ActivityComponent } from './activity/activity.component';


@NgModule({
  declarations: [
    AppComponent,
    WebChatComponent,
    ActivityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    LoadingModule.forRoot({
// ANIMATION_TYPES:
// chasingDots, circle, circleSwish, cubeGrid
// doubleBounce, pulse, rectangleBounce
// rotatingPlane, threeBounce, wanderingCubes
      animationType: ANIMATION_TYPES.threeBounce,
      backdropBackgroundColour: 'rgba(0,0,0,0)', // make the backdrop invisible
      //backdropBorderRadius: '4px',
      primaryColour: '#007bff',
      secondaryColour: '#007bff',
      tertiaryColour: '#007bff'
    })
  ],
  providers: [ DirectLineService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
