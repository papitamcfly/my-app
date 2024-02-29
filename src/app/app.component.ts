import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ChildrenOutletContexts } from '@angular/router';
import { slideInAnimation } from './animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  imports: [RouterLink, RouterOutlet],
  animations: [
    slideInAnimation
  ]
})

export class AppComponent {
  title = 'ejemplo';

  constructor(private contexts: ChildrenOutletContexts) {}
  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}