import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BannerModule } from '../../shared/banner/banner.module';
import { FooterModule } from '../../shared/footer/footer.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    BannerModule,
    FooterModule
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
