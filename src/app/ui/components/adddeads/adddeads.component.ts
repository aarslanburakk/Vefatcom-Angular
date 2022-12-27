import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';

@Component({
  selector: 'app-adddeads',
  templateUrl: './adddeads.component.html',
  styleUrls: ['./adddeads.component.scss']
})
export class AdddeadsComponent extends BaseComponent implements OnInit {
  constructor( spinner: NgxSpinnerService,) {
    super(spinner);
  }

  ngOnInit() {
    this.showSpinner(SpinnerType.BallAtom);
  }
}