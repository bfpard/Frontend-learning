import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html'
})
export class SignalComponent {
  name = signal('Angular');

  nameComputed = computed(() => { //readonly
    return this.name() + ' is awesome!';
  });

  capitalizedName = computed(() => this.name().toUpperCase());
}
