import { Directive, ElementRef, HostListener, Input } from '@angular/core';
@Directive({
  selector: '[contactCharacters]'
})
export class SpecialCharactersDirective {
  regexStr = '^[a-zA-Z0-9_]*$';

  @Input() isAlphaNumber: boolean;

  constructor(private element: ElementRef) {}

  @HostListener('keypress', ['$event'])
  onKeyPress(event) {
    return new RegExp(this.regexStr).test(event.key);
  }

  @HostListener('paste', ['$event'])
  blockPaste(event: KeyboardEvent) {
    this.validateFields(event);
  }
  validateFields(event) {
    setTimeout(() => {
      this.element.nativeElement.value = this.element.nativeElement.value
        .replace(/[^A-Za-z]/g, '')
        .replace(/\s/g, '');
      event.preventDefault();
    }, 100);
  }
}
