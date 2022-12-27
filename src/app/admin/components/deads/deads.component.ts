import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { Create_Dead } from 'src/app/contracts/create_dead';
import { HttpClientService } from 'src/app/services/common/http-client.service';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-deads',
  templateUrl: './deads.component.html',
  styleUrls: ['./deads.component.scss']
})
export class DeadsComponent extends BaseComponent implements OnInit {
  constructor( spinner: NgxSpinnerService, private httpClientService: HttpClientService) {
    super(spinner);
  }

  ngOnInit() : void {
    this.showSpinner(SpinnerType.BallAtom);
  }
  @ViewChild(ListComponent) listComponents :ListComponent
  createdDead(createdDead:Create_Dead){
    this.listComponents.getDeads();
  }
}

