import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CameraComponent } from './camera/camera.component';
import { ConfigComponentComponent } from './config-component/config-component.component';
import { MapComponent } from './map/map.component';


const routes: Routes = [
  {
    path: '',
    component: ConfigComponentComponent
  },
  {
    path: 'camera',
    component: CameraComponent
  },
  {
    path: 'map',
    component: MapComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
