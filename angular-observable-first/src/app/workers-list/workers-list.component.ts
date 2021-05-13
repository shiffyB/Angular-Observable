import { Component, OnInit } from '@angular/core';
import {Worker,WorkersService} from '../services/workers.service'

@Component({
  selector: 'app-workers-list',
  templateUrl: './workers-list.component.html',
  styleUrls: ['./workers-list.component.css']
})
export class WorkersListComponent implements OnInit {
  workers:Worker[]=[];
  constructor(private workersService:WorkersService ) { 

    this.workersService.getWorkers().subscribe((data)=>
      {
        this.workers = data;
      }
      )
    
  }

  ngOnInit(): void {
  }
  
}
