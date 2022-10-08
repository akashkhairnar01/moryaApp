import { Injectable } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
// import { Storage } from '@ionic/storage';
import { Platform } from '@ionic/angular';
import { DbService } from './db.service';
import { NavigationService } from './navigation.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authState = new BehaviorSubject(false);

  constructor(
    private router: Router,
    // private storage: Storage,
    private platform: Platform,
    private dbService: DbService,
    private navigationService: NavigationService
  ) {
    this.platform.ready().then(async () => {

      await this.dbService.init();
      this.dbService.get('user_detail').then(resp => {
        console.log(resp);
        if (resp === null || resp === undefined) {
          this.navigationService.gotoRootPage({ page: '/auth' });
        } else {
          this.navigationService.gotoRootPage({ page: '/home' });
        }
      }).catch(err => {
        console.log(err);
      });
    });
  }


  checkLogin(user: any) {
    // this.storage.set('user_detail', user).then(resp => {
    //   this.router.navigate['home'];
    //   this.authState.next(true);
    // });
  }

  isAuthenticated() {
    return this.authState.value;
  }
}
