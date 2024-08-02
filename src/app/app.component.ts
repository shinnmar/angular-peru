import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from './components/container/container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContainerComponent],
  template: `
    <app-container>
      <router-outlet />
    </app-container>
  `
})
export class AppComponent {
  title = 'angular-peru-lp';
}
