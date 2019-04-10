import { Component, OnInit } from '@angular/core';
import { SendContactForm } from './send-contact.form';
import { SendContactService } from './send-contact.service';
import { ContactModel } from './contact.model';
import { filter, map, tap } from 'rxjs/operators';
import { HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import { pipe } from 'rxjs';

export function uploadProgress<T>(cb: (progress: number) => void) {
  return tap((event: HttpEvent<T>) => {
    if (event.type === HttpEventType.UploadProgress) {
      cb(Math.round((100 * event.loaded) / event.total));
    }
  });
}

export function toResponseBody<T>() {
  return pipe(
    filter((event: HttpEvent<T>) => event.type === HttpEventType.Response),
    map((res: HttpResponse<T>) => console.log(res.body))
  );
}
@Component({
  selector: 'contact-send-contact',
  templateUrl: './send-contact.component.html',
  styleUrls: ['./send-contact.component.scss']
})
export class SendContactComponent implements OnInit {
  progress = 0;
  success = false;

  form = SendContactForm.create();

  constructor(private contactService: SendContactService) {}

  ngOnInit() {}

  resetForm() {
    this.form.reset();
  }

  submit() {
    this.success = false;

    const { fullName, idCard, content, dob, mobile } = this.form.value;
    const body: ContactModel = {
      fullName: fullName,
      idCard: idCard,
      content: content,
      dob: dob,
      mobile: mobile
    };
    this.contactService
      .sendContact(body)
      .pipe(
        uploadProgress(progress => (this.progress = progress)),
        toResponseBody()
      )
      .subscribe(res => {
        this.progress = 0;
        this.success = true;
        alert('Upload Successfully!');
      });
  }
}
