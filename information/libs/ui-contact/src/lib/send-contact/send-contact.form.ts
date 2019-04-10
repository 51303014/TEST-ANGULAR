import { FormControl, FormGroup } from 'ngx-strongly-typed-forms';
import { AbstractControl, ValidationErrors, Validators } from '@angular/forms';

export interface SendContactForm {
  fullName: string;
  mobile: string;
  dob: string;
  idCard: string;
  content: string;
}

export const inputPhoneValidators = (
  c: AbstractControl
): ValidationErrors | null => {
  const vnRegex = /(09|03|07|08|05|06|85)+([0-9]{6})\b/g;
  if (c.value && !vnRegex.test(c.value)) {
    return {
      phoneNotFormat: 'Số điện thoại của bạn không đúng định dạng'
    };
  } else if (!c.value) {
    return {
      phoneNotFormat: 'Vui lòng nhập số điện thoại'
    };
  }
  return null;
};

export const requireSizeType = maxSize => (
  c: AbstractControl
): ValidationErrors | null => {
  const file = c.value;
  if (file.size) {
    return file.size > maxSize
      ? {
          requireSizeType: 'Vui lòng hình chứng minh có dung lượng nhỏ hơn 2Mb'
        }
      : null;
  }
  return null;
};

export const SendContactForm = {
  create(): FormGroup<SendContactForm> {
    return new FormGroup<SendContactForm>({
      fullName: new FormControl<string>(
        '',
        Validators.compose([Validators.required, Validators.minLength(3)])
      ),
      mobile: new FormControl<string>('', inputPhoneValidators),
      dob: new FormControl<string>('', Validators.required),
      idCard: new FormControl<string>('', requireSizeType(2097152)),
      content: new FormControl<string>('', Validators.required)
    });
  }
};
