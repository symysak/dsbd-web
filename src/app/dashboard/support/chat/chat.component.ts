import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {SupportService} from '../../../service/support.service';
import {CommonService} from '../../../service/common.service';
import {UserService} from '../../../service/user.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {

  public comment = new FormControl();
  public ticketID: number;
  public chat: any;
  public user: any[] = [];
  public myName = sessionStorage.getItem('name');

  constructor(
    public supportService: SupportService,
    private route: ActivatedRoute,
    private commonService: CommonService,
    private userService: UserService
  ) {
  }


  ngOnInit(): void {
    this.supportService.chatMessage = null;
    this.ticketID = +this.route.snapshot.paramMap.get('id');
    this.supportService.openWebSocket(this.ticketID);
    this.userService.getGroup().then(responseUser => {
      console.log(responseUser);
      const user = responseUser;
      this.user = user.data;
      // for (const u of user.data) {
      //   this.user[u.id] = u.name;
      // }

      console.log(user);
      this.supportService.get(this.ticketID).then(response => {
        const info = response;
        this.chat = info.support_chat;
        console.log(info);
      });
    });
  }

  ngOnDestroy() {
    this.supportService.closeWebSocket();
  }

  public getName(id): string {
    if (id === 0) {
      return '運営';
    }

    for (const u of this.user) {
      if (u.ID === id) {
        return u.name;
      }
    }
    return 'no name';
  }

  public sendMessage() {
    const body = {
      user_token: sessionStorage.getItem('ClientID'),
      access_token: sessionStorage.getItem('AccessToken'),
      message: this.comment.value
    };
    this.supportService.sendMessage(JSON.stringify(body));
  }
}
