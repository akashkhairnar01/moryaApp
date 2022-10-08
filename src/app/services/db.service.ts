import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { promise } from 'protractor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  private _storage: Storage;

  constructor(private storage: Storage) {

  }

  async init() {
    const db = await this.storage.create();
    this._storage = db;
  }

  public set(key: any, value: any) {
    this._storage?.set(key, value);
  }

  async get(key: string) {
    var promise = new Promise((resolve, reject) => {
      this._storage.get(key).then(resp=>{
        resolve(resp);
      }).catch(err=>{
        reject(err);
      });
    });
    return promise;
  }
}
