import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { List_Dead } from 'src/app/contracts/list_dead';
import {Create_Dead} from '../../../contracts/create_dead'
import { HttpClientService } from '../http-client.service';

@Injectable({
  providedIn: 'root'
})
export class DeadService {

  constructor(private httpClientService :HttpClientService) { }

// verileri database kaydetme
  create(dead : Create_Dead, successCallBack?:()=> void,errorCallBack?:(errorMessage:string)=> void){

    this.httpClientService.post({
      controller: "dead"

    },dead).subscribe(result=>{
      successCallBack();
    },(errorResponse:HttpErrorResponse)=>{
    const _error:Array< {key:string,value:Array<string>}>=errorResponse.error;
      let message= "";
      _error.forEach((v,index)=>{
        v.value.forEach((_v,_index)=>{
          message +=`${_v}</br>`
        });
      });
      errorCallBack(message);
     });
  }


  async read(page: number = 0, size: number = 5, successCallBack?: () => void, errorCallBack?: (errorMessage: string) => void): Promise<{ totalCount: number; deads: List_Dead[] }> {
    const promiseData: Promise<{ totalCount: number; deads: List_Dead[] }> = this.httpClientService.get<{ totalCount: number; deads: List_Dead[] }>({
      controller: "dead",
      queryString: `page=${page}&size=${size}`
    }).toPromise();

    promiseData.then(d => successCallBack())
      .catch((errorResponse: HttpErrorResponse) => errorCallBack(errorResponse.message))

    return await promiseData;
  }

}
