import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactModel } from './contact.model';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SendContactService {
  SERVER_URL = 'api/contacts';

  constructor(private http: HttpClient) {}

  public sendContact(contact: ContactModel) {
    return this.http.post(this.SERVER_URL, toFormData(contact), {
      reportProgress: true,
      observe: 'events'
    });
  }

  public getHeroes() {
    return this.http
      .get<ContactModel>(this.SERVER_URL)
      .pipe(tap(_ => console.log('fetched heroes')));
  }
}

export function toFormData<T>(formValue: T) {
  const formData = new FormData();

  for (const key of Object.keys(formValue)) {
    const value = formValue[key];
    formData.append(key, value);
  }

  return formData;
}
