import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from './config.service';
import { SwiperModule } from 'swiper/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { DashboardLoaderComponent } from './dashboard/dashboard-loader/dashboard-loader.component';
import { ServerComponentComponent } from './dashboard/server-component/server-component.component';
import { DashboardContentComponent } from './dashboard/dashboard-content/dashboard-content.component';
import { DashboardSubcontentComponent } from './dashboard/dashboard-content/dashboard-subcontent/dashboard-subcontent.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DashboardLoaderComponent,
    ServerComponentComponent,
    DashboardContentComponent,
    DashboardSubcontentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    SwiperModule
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
