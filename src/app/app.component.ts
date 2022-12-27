import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MessageType, Position } from './services/admin/alertify.service';
import {
  CustomToastrService,
  ToastrMessageType,
  ToastrPositionType,
} from './services/ui/custom-toastr.service';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
}) 
export class AppComponent {
  title = 'vefat-client';
  constructor(private toastrService: CustomToastrService) {
    
    
  }
}


