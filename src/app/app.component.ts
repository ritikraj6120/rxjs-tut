import { Component } from '@angular/core';
import { Observable,of,from } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'rxjs-learning';
  agents: Observable<string> | undefined;
  agentName: string | undefined;
  studentList: Observable<string[]> = of(['ram', 'shyam', 'radha']);
  studentId:Observable<number[]> = of([1,2,3]);
  singleStudentId$:Observable<number> =of(10);
  studentObject$:Observable<any> = of({name:"ram",class:"5th"});
  studentList$:Observable<string> = from(["mohan","shiva","pyarre"])
  constructor() {}

  ngOnInit(): void {
    this.agents = new Observable((abc) => {
      try {
        abc.next('Hamlet');
        setTimeout(() => abc.next('Momo'), 3000);
        setTimeout(() => abc.next('Ramona'), 6000);
      } catch (e) {
        abc.error(e);
      }
    });

    this.agents.subscribe((data) => {
      this.agentName = data;
    });
    this.studentList.subscribe((data) => {
      console.log(data);
    });
    this.studentId.subscribe((data)=>{
      console.log(data);
    })
    this.singleStudentId$.subscribe((data)=>{
      console.log(data);
    })
    this.studentObject$.subscribe((data)=>{
      console.log(data)
    })
    this.studentList$.subscribe((data)=>{
      console.log(data)
    })
  }
}
