import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectHotelComponent } from './select-hotel/select-hotel.component';
import { SelectRoomComponent } from './select-room/select-room.component';
import { RouterModule, Routes } from '@angular/router';
import { HotelService } from './hotel.service';
const appRoutes: Routes = [
  { path: 'select-hotel', component: SelectHotelComponent },
  { path: 'select-room', component: SelectRoomComponent },
  
];

@NgModule({
  declarations: [
    AppComponent,
    SelectHotelComponent,
    SelectRoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes)
  ],
  providers: [HotelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
