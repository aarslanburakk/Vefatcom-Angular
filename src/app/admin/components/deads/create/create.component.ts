import { DatePipe } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { Create_Dead } from 'src/app/contracts/create_dead';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';
import { DeadService } from 'src/app/services/common/models/dead.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent extends BaseComponent implements OnInit {


  constructor(spiner:NgxSpinnerService,private deadService:DeadService,private alertify:AlertifyService,){
    super(spiner)
  }

  ngOnInit(): void {
      
  }

@Output() createdDead:EventEmitter<Create_Dead> = new EventEmitter();

  create(deadName:HTMLInputElement,deadUsername:HTMLInputElement,deadAge:HTMLInputElement,deadDate:HTMLInputElement){

    this.showSpinner(SpinnerType.BallAtom);
    const create_dead : Create_Dead = new Create_Dead();
    create_dead.deadName =deadName.value;
    create_dead.deadUsername = deadUsername.value;
    create_dead.deadDate = deadDate.value;
    create_dead.deadAge = parseInt(deadAge.value);
   
    this.deadService.create(create_dead,()=>{
      this.hideSpinner(SpinnerType.BallAtom);
      this.alertify.Message("İlan Başarıyla Eklenmiştir.",{dismissOthers:true,messageType:MessageType.Success,position:Position.TopRight});
      this.createdDead.emit(create_dead);
    },errorMessage=>{
      this.alertify.Message(errorMessage,{
        dismissOthers:true,
        messageType:MessageType.Error,
        position:Position.TopRight
      });
    });
  
  }
}
