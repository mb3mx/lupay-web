import {Component, HostBinding} from '@angular/core';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';
import {Location} from '@angular/common';
import { initializeApp } from 'firebase/app';
import {Subscription} from 'rxjs';
import {NgProgress, NgProgressComponent} from 'ngx-progressbar';
import {TranslateService} from '@ngx-translate/core';

import { ViewChild } from '@angular/core';
import {AuthService} from '@app/layouts/auth-layout/auth.service';
import {SettingsService} from '@app/settings/settings.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent {
  @ViewChild(NgProgressComponent) ngProgress: NgProgressComponent;
  @HostBinding('class') classlist = 'dt-root';

  route: string;
  isAuthenticated: any = false;
  settings: any;
  onSettingChanged: Subscription;

  constructor(public translate: TranslateService,
              public authService: AuthService,
              public settingService: SettingsService,
              private router: Router,
              location: Location) {
    // set translation
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');

    const _language = localStorage.getItem('language');
    if (_language) {
      translate.use(_language);
    }
    // set translation end

    this.onSettingChanged = this.settingService.onSettingChanged.subscribe(
      (newSettings) => {
        this.settings = newSettings;
      }
    );

    this.isAuthenticated = this.authService.isAuthenticated();

    router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.ngProgress.start();
        this.isAuthenticated = this.authService.isAuthenticated();
      }

      if (event instanceof NavigationEnd) {
        this.isAuthenticated = this.authService.isAuthenticated();
        this.ngProgress.complete();

        const {fragment} = router.parseUrl(router.url);
        if (fragment) {
          const element = document.querySelector(`#${fragment}`);
          if (element) {
            element.scrollIntoView();
          }
        } else {
          // window.scrollTo({top: 0});
        }
      }

      this.route = location.path();
    });

    initializeApp({
      apiKey: 'AIzaSyA_dc3Eztlksb2pyYYVKKXjl-RuM6zrsos',
      authDomain: 'drift-angular.firebaseapp.com'
    });
  }

}
