import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePagesComponent } from './home-pages.component';
import { NavbarComponent } from 'src/app/Components/HomeComponents/navbar/navbar.component';


@NgModule({
  declarations: [
    HomePagesComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
