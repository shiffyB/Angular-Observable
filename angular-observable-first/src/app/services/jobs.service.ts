import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
// import { get } from 'https';

export interface Job{ 
  id:number;
  jobDescription:string;
}
@Injectable({
  providedIn: 'root'
})

export class JobsService {
  constructor(private httpService:HttpClient) { }
  getJobs(){
    return this.httpService.get<Job[]>('/assets/jobs.json');
  }
}
