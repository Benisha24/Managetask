import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface Task {
  name: string;
  title: string;
  description: string;
  start: string;
  end: string;
}

@Component({
  selector: 'app-taskmgmt',
  imports: [CommonModule],
  templateUrl: './taskmgmt.component.html',
  styleUrl: './taskmgmt.component.css'
})
export class TaskmgmtComponent {tasks: Task[] = [
  { name: 'aaaa', title: ';kjansdf', description: "'oaksnmdf", start: 'Jan. 1, 2025, midnight', end: 'Jan. 1, 2025, midnight' },
  { name: 'aaaa', title: ';kjansdf', description: "'oaksnmdf", start: 'Jan. 1, 2025, midnight', end: 'Jan. 1, 2025, midnight' },
  { name: 'aaaa', title: ';kjansdf', description: "'oaksnmdf", start: 'Jan. 1, 2025, midnight', end: 'Jan. 1, 2025, midnight' },
  { name: 'bbbbb', title: 'hello', description: 'hello form', start: 'Jan. 1, 2025, midnight', end: 'Jan. 1, 2025, midnight' },
  { name: 'tharun Raj', title: 'sample login form', description: 'sample login form using html css', start: 'Jan. 1, 2025, midnight', end: 'Jan. 1, 2025, midnight' }
];

deleteTask(index: number): void {
  this.tasks.splice(index, 1);
}
  

}
