import {
  Component,
  ElementRef,
  HostListener,
  Inject,
  Input
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';

@Component({
  selector: 'contact-dialog',
  template: `<h2 mat-dialog-title>Chứng minh nhân dân</h2>
  <div mat-dialog-content>
    <img [src]="data" width="250" height="150" >
  </div>
  <mat-dialog-actions align="end">
    <button mat-button mat-dialog-close>Cancel</button>
  </mat-dialog-actions>
  `
})
export class DialogContentComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: string) {}
}

@Component({
  selector: 'contact-upload-image',
  templateUrl: './upload-image.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: UploadImageComponent,
      multi: true
    }
  ],
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent implements ControlValueAccessor {
  @Input() progress;
  onChange: Function;
  private file: File | null = null;
  message: string;
  imagePath;
  imgURL: any;

  @HostListener('change', ['$event.target.files'])
  emitFiles(event: FileList) {
    const file = event && event.item(0);
    this.onChange(file);
    this.file = file;
    const mimeType = file.type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = 'Only images are supported.';
      return;
    }

    const reader = new FileReader();
    this.imagePath = file;
    reader.readAsDataURL(file);
    reader.onload = _event => {
      this.imgURL = reader.result;
    };
  }

  constructor(
    private host: ElementRef<HTMLInputElement>,
    private dialog: MatDialog
  ) {}

  writeValue(value: null) {
    // clear file input
    this.host.nativeElement.value = '';
    this.file = null;
  }

  registerOnChange(fn: Function) {
    this.onChange = fn;
  }

  registerOnTouched(fn: Function) {}

  preview() {
    this.dialog.open(DialogContentComponent, {
      width: '400px',
      data: this.imgURL
    });
  }
}
