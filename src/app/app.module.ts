import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { WebChatComponent } from './web-chat/web-chat.component';
import {DirectlineService} from './directline.service';
import { ActivityComponent } from './activity/activity.component';


@NgModule({
  declarations: [
    AppComponent,
    WebChatComponent,
    ActivityComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [DirectlineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
