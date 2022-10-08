import { Injectable } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(
    private _router: Router,
    private _navCntrl: NavController
  ) { }

  gotoRootPage(url: any) {
    this._navCntrl.navigateRoot([url.page]);
  }
}
