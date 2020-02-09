import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BroadcastService, MessageService } from '../BroadcastService.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-config-component',
  templateUrl: './config-component.component.html',
  styleUrls: ['./config-component.component.scss']
})
export class ConfigComponentComponent implements OnInit {
 
  Subscription() {
    this.broadcastService.getSubject().subscribe(
      (msg) => {
        alert('test');
        // switch (msg.MessageTo) {
        //   case 'secondCamera':
        //     if (this.mapWindow.name === 'camera2') {
        //       this.mapWindow.postMessage(JSON.stringify({
        //         Data: msg.MessageContent,
        //         method: msg.MessageFrom
        //       }))
        //     }
        //     break;
        //   case 'firstCamera':
        //     if (this.mapWindow.name === 'camera1') {
        //       this.mapWindow.postMessage(JSON.stringify({
        //         Data: msg.MessageContent,
        //         method: msg.MessageFrom
        //       }))
        //     }
        //     break;
        // }
      }
    )
  }

  constructor(private broadcastService: BroadcastService) {
    
  }

  cameraWindow;
  mapWindow;

  ngOnInit() {
    this.Subscription();
  }

  
  windowOpen(id) {
    if (id === 1) {
      this.cameraWindow = window.open('/camera?secondWindow=true&screenName=camera321&cameraId=' + id, 'camera' + id, 'resizable=0,scrollbars=0,location=0,fullscreen=1,height=600,width=600, right=200, toolbar=0, menubar=0,status=0');
      console.log(this.cameraWindow.name);
    }
    else
      this.mapWindow = window.open('/camera?secondWindow=true&screenName=camera321&cameraId=' + id, 'camera' + id, 'resizable=0,scrollbars=0,location=0,fullscreen=1,height=600,width=600, right=200, toolbar=0, menubar=0,status=0');
  }

  sendMessage() {
    if (this.mapWindow.name === 'camera2') {
      this.mapWindow.postMessage(JSON.stringify({
        Data: 'message',
        method: 'testMEthod'
      }))
    } else {
      
    }
  }
}
