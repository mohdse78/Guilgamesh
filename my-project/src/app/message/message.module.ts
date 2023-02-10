import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {ChatRoomComponent} from "./chat-room/chat-room.component";
import {MessageListComponent} from "./message-list/message-list.component";
import {MessageRoutingModule} from "./message-routing.module";
import {InlineSVGModule} from "ng-inline-svg-2";

@NgModule({
  declarations: [ChatRoomComponent, MessageListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MessageRoutingModule,
    InlineSVGModule.forRoot(),
  ],
})
export class MessageModule {}
