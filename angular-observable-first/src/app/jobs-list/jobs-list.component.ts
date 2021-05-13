import { Component, OnInit } from '@angular/core';
import  {JobsService,Job} from '../services/jobs.service'
import {Worker,WorkersService} from '../services/workers.service'
import { combineLatest, forkJoin, Observable,zip } from 'rxjs';


@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.css']
})


export class JobsListComponent implements OnInit {
  workers:Worker[]=[];
  jobs:Job[]=[];
  calcAvg:number[]=[];
  constructor(private workersService:WorkersService,private jobsService:JobsService ) { 
    this.jobsService.getJobs().subscribe(data =>this.jobs=data);
    zip(this.workersService.getWorkers(),this.jobsService.getJobs()).subscribe(([workers,jobs])=>
      {
        this.workers = workers;
        this.jobs=jobs;
        this.jobs.map(job =>{
          let arr=this.workers.filter(worker => worker.job===job.id);
          this.calcAvg.push(arr.reduce((a,b)=>a+(b["salary"]||0),0)/arr.length || 0) ;
        })
      }
      )
  }
  ngOnInit(): void {
  }

}
