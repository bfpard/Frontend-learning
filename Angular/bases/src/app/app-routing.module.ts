import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignalComponent } from './main/components/signals/signals.component';
import { CounterComponent } from './main/pages/counter/counter.component';

const routes: Routes = [
  {
    path: '',
    component: SignalComponent
  },
  {
    path: 'counter',
    component: CounterComponent
  },
  {
    path: '**',
    redirectTo: ''
  } // Redirige a la ruta por defecto si no se encuentra la ruta
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
