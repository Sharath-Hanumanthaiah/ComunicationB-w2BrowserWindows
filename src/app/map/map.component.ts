import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @HostListener('window:beforeunload', ['$event'])
  public onRefresh(event) {
    window.opener.postMessage(JSON.stringify({
      method: "close",
      data: "map window closed or refreshed"
    }), "*");

  }
  
  constructor() {
    if (window.addEventListener) {
      window.addEventListener("message", this.receiveMessage.bind(this), false);
    }
   }

  ngOnInit() {
  }

  receiveMessage: any = (event: any) => {
    console.log(JSON.parse(event.data).method);
    
  }
}
