import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private list = null;

  constructor() {
  }

  public getList() {
    if (!this.list) {
      this.list = [
        {id: '1', name: 'leo', active: true, isFemale: false, birthDate: new Date()},
        {id: '2', name: 'maria', active: false, isFemale: true, birthDate: new Date()},
        {id: '3', name: 'marcos', active: true, isFemale: false, birthDate: new Date()}
      ];
    }

    return this.list;
  }
}
