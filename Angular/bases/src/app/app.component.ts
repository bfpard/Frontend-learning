import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Basic counter  vs Signal counter app';
  counterSignal = signal(0);
  counter = 0;

  increase() {
    this.counter += 1;
    this.counterSignal.update( currentVal => currentVal + 1);
  }

  decrease() {
    this.counter -= 1;
    this.counterSignal.update( currentVal => currentVal - 1);
  }

  reset() {
    this.counter = 0;
    this.counterSignal.set(0);
  }
}
