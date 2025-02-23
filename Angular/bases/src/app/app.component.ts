import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Basic counter app';
  counter = 0;

  increase() {
    this.counter += 1;
  }

  decrease() {
    this.counter -= 1;
  }

  reset() {
    this.counter = 0;
  }
}
