import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
export interface Worker{ 
  id:number;
  job:number;
  salary:number;
}
@Injectable({
  providedIn: 'root'
})

export class WorkersService {

  constructor(private httpService:HttpClient) { }
  getWorkers(){
    return this.httpService.get<Worker[]>('/assets/workers.json');
  }
}
