import { Component, RendererStyleFlags2 } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

export class BaseComponent {
  constructor(private spinner: NgxSpinnerService) {}

  showSpinner(spinnernameType: SpinnerType) {
    this.spinner.show(spinnernameType);
    setTimeout(()=> this.hideSpinner(spinnernameType),800);
  }
  hideSpinner(spinnernameType:SpinnerType){

    this.spinner.hide(spinnernameType);
  }
}

export enum SpinnerType {
  BallAtom = 's1',
  BallScaleMultiple = 's2',
  BallSpinClockWisefadeRotating = 's3',
}
