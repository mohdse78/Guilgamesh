import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MessageListComponent} from "./message-list/message-list.component";
import {ChatRoomComponent} from "./chat-room/chat-room.component";

const routes: Routes = [
      {
        path: 'message-list',
        component: MessageListComponent
      },
      {
        path: 'chatroom',
        component: ChatRoomComponent
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MessageRoutingModule {}
