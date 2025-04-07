import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskmgmtComponent } from './taskmgmt/taskmgmt.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,TaskmgmtComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'managetaskform';
}
