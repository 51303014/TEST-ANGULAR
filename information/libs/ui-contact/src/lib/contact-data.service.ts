import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class ContactDataService implements InMemoryDbService {
  constructor() {}

  createDb() {
    const contacts = [
      {
        id: 1,
        fullName: 'PO1',
        mobile: '0985101262',
        dob: '09/04/1995',
        idCard: 'dasdsadsadasdsadas',
        content: 'Insurance policy fullNameber PO1'
      },
      {
        id: 2,
        fullName: 'PO2',
        mobile: '0907286210',
        dob: '08/03/1990',
        idCard: 'dasdsadsadasdsadas',
        content: 'Insurance policy fullNameber PO2'
      }
    ];
    return { contacts };
  }
}
