import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { slideInAnimation } from '../animations';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    slideInAnimation
  ]
})
export class AboutComponent {
  constructor(private router: Router) {}

  goToHome() {
    this.router.navigate(['/home']);
  }
}
