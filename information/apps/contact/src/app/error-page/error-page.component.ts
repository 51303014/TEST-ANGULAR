import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getStatusText } from 'http-status-codes';

@Component({
  templateUrl: './error-page.component.html'
})
export class ErrorPageComponent implements OnInit {
  code?: string;
  constructor(route: ActivatedRoute) {
    this.code = route.snapshot.params.code;
  }

  get text() {
    return this.code && getStatusText(+this.code);
  }

  ngOnInit() {}
}
