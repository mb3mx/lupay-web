import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PagesRoutingModule } from './pages-routing.module';
import { SearchBoxModule } from '@gaxon/components';
import { SharedModule } from '@gaxon/modules';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NavigationModule } from '@gaxon/components/navigation/navigation.module';

import { ModernLayoutComponent } from './modern-layout.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { NavbarVerticalComponent } from './partials/navbar/navbar-vertical/navbar-vertical.component';
import { DrawerComponent } from './partials/drawer/drawer.component';
import { DrawerNotificationsComponent } from './partials/drawer/notifications/notifications.component';
import { DrawerSearchComponent } from './partials/drawer/search/search.component';
import { DrawerMessagesComponent } from './partials/drawer/messages/messages.component';
import { DrawerService } from './drawer.service';



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
    ModernLayoutComponent,
    HeaderComponent,
    FooterComponent,
    NavbarVerticalComponent,
    DrawerComponent,
    DrawerNotificationsComponent,
    DrawerMessagesComponent,
    DrawerSearchComponent
  ],
  providers: [

    DrawerService
  ]
})
export class ModernLayoutModule {
}
