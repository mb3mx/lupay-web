import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { SharedModule } from '@gaxon/modules';
import { SearchBoxModule } from '@gaxon/components';
import { NavigationModule } from '@gaxon/components/navigation/navigation.module';
import { PagesRoutingModule } from './pages-routing.module';

import { ListingLayoutComponent } from './listing-layout.component';
import { HeaderComponent } from './partials/header/header.component';
import { MessagesComponent } from './partials/messages/messages.component';
import { NotificationsComponent } from './partials/notifications/notifications.component';
import { NavbarVerticalComponent } from './partials/navbar/navbar-vertical/navbar-vertical.component';
import { FooterComponent } from './partials/footer/footer.component';
import { HeaderTopComponent } from './partials/header-top/header-top.component';
import { TopbarComponent } from './partials/topbar/topbar.component';



@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    PagesRoutingModule,
    NavigationModule,
    SweetAlert2Module.forRoot(),
    SearchBoxModule
  ],
  declarations: [
    ListingLayoutComponent,
    HeaderComponent,
    FooterComponent,
    NavbarVerticalComponent,
    NotificationsComponent,
    MessagesComponent,
    HeaderTopComponent,
    TopbarComponent
  ],
  providers: [

  ]
})
export class ListingLayoutModule {
}
