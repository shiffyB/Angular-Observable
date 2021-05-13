import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  workersList:number = 0;
   setShowWorkers(toShow){
    this.workersList=toShow;
    console.log(this.workersList)
  }
  title = 'angular-observable-first';
}
