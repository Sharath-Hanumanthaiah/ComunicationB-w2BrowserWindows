import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CameraComponent } from './camera/camera.component';
import { ConfigComponentComponent } from './config-component/config-component.component';
import { BroadcastService } from './BroadcastService.service';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    CameraComponent,
    ConfigComponentComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BroadcastService],
  bootstrap: [AppComponent]
})
export class AppModule { }
