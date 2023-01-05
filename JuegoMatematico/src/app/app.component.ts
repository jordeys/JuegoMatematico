import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {
    router.events.subscribe(evt => {
      if (evt instanceof NavigationEnd) {
        if (loginRegex.test(evt.url)) {
          this.view = 'login';
        } else if (registerRegex.test(evt.url)) {
          this.view = 'register';
        } else if (welcomeRegex.test(evt.url)) {
          this.view = 'welcome';
        } else {
          this.view = 'unknown';
        }

        switch (this.view) {
          case 'login':
          case 'register':
        }
      }
    });
