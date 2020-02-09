import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BroadcastService, MessageService } from '../BroadcastService.service';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss']
})
export class CameraComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private broadcastService: BroadcastService) { 
    if (window.addEventListener) {
      window.addEventListener("message", this.receiveMessage.bind(this), false);
    }
  }

  @Input() cameraId;
  screenTitle: String;

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params['secondWindow']) {
        this.cameraId = params['cameraId'];
          this.screenTitle = 'camera' + this.cameraId;
      }
    });
  }

  firstCamera() {
    let msg: MessageService = new MessageService();
    msg.MessageFrom = 'firstCamera';
    msg.MessageTo = 'secondCamera';
    msg.MessageContent = ' I got the Message from second Camera';
    let temp = window.open('', 'camera2');
    if (temp.name === 'camera2') {
      temp.postMessage(JSON.stringify({
        msg
      }), '*');
    }
  }

  secondCamera() {
    let msg: MessageService = new MessageService();
    msg.MessageFrom = 'secondCamera';
    msg.MessageTo = 'firstCamera';
    msg.MessageContent = ' I got the Message from first Camera';
    let temp = window.open('', 'camera1');
    if (temp.name === 'camera1') {
      temp.postMessage(JSON.stringify({
        msg
      }), '*');
    }
  }

  receiveMessage: any = (event: any) => {
    console.log(JSON.parse(event.data).msg);
    
    alert('message from '+JSON.parse(event.data).msg.MessageFrom+' content '+JSON.parse(event.data).msg.MessageContent);
    
  }
}
