import { Component, Input } from '@angular/core';

@Component({
  selector: 'contact-progress',
  templateUrl: './progress.component.html'
})
export class ProgressComponent {
  @Input() progress = 0;
}
