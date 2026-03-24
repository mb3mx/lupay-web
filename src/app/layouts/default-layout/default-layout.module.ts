import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SearchBoxModule } from '@gaxon/components';
import { SharedModule } from '@gaxon/modules';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NavigationModule } from '@gaxon/components/navigation/navigation.module';
import { PagesRoutingModule } from './pages-routing.module';

import { DefaultLayoutComponent } from './default-layout.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { NavbarVerticalComponent } from './partials/navbar/navbar-vertical/navbar-vertical.component';
import { NotificationsComponent } from './partials/header/notifications/notifications.component';
import { MessagesComponent } from './partials/header/messages/messages.component';
import { AppsComponent } from './partials/header/apps/apps.component';



@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SweetAlert2Module.forRoot(),
    RouterModule,
    PagesRoutingModule,
    NavigationModule,
    SearchBoxModule
  ],
  declarations: [
    DefaultLayoutComponent,
    HeaderComponent,
    FooterComponent,
    NavbarVerticalComponent,
    NotificationsComponent,
    MessagesComponent,
    AppsComponent
  ],
  providers: [

  ]
})
export class DefaultLayoutModule {
}
