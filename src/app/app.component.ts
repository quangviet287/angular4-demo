import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoAngular4';

  months = ['January', 'Feburary', 'March', 'April', 'May',
    'June', 'July', 'August', 'September',
    'October', 'November', 'December'];

  isavailable = false;

  myClickFunction(event) {
    alert('Button is clicked');
    console.log(event);
  }

  changemonth(event) {
    alert('Month is changed');
    console.log(event);
    this.isavailable = true;
  }
}
