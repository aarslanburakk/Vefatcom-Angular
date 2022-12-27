import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { _MatListItemGraphicBase } from '@angular/material/list';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerComponent, NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { List_Dead } from 'src/app/contracts/list_dead';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';
import { DeadService } from 'src/app/services/common/models/dead.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent extends BaseComponent implements OnInit {
  constructor(spinner:NgxSpinnerService,private deadService:DeadService,private alertifyService:AlertifyService){
    super(spinner)
  }
 

  displayedColumns: string[] = ['deadName', 'deadLastName', 'deadDate', 'deadAge','createdDate','updatedDate'];

  dataSource :MatTableDataSource<List_Dead> = null;
  @ViewChild(MatPaginator) paginator: MatPaginator;
 
 
   async getDeads() {
    this.showSpinner(SpinnerType.BallAtom);
    const alldeads: { totalCount: number; deads: List_Dead[] } = await this.deadService.read(this.paginator ? this.paginator.pageIndex : 0, this.paginator ? this.paginator.pageSize : 5, () => this.hideSpinner(SpinnerType.BallAtom), errorMessage => this.alertifyService.Message(errorMessage, {
      dismissOthers: true,
      messageType: MessageType.Error,
      position: Position.TopRight
    }))
    this.dataSource = new MatTableDataSource<List_Dead>(alldeads.deads);
    this.paginator.length = alldeads.totalCount;
    debugger;
  }
  
  async pageChanged(){
    await this.getDeads();
  }
   async ngOnInit() 
   {
    await this.getDeads();
  }
}
