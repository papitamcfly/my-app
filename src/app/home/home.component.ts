import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { slideInAnimation } from '../animations';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports:[CommonModule],
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.8,
        backgroundColor: 'blue'
      })),
      transition('* => closed', [
        animate('1s')
      ]),
      transition('* => open', [
        animate('0.5s')
      ]),
    ]),

  trigger('myInsertRemoveTrigger', [
    transition(':enter', [
      style({ opacity: 0,
      
      }),
      animate('1s', style({ opacity: 1,   height:"200"})),
    ]),
    transition(':leave', [
      animate('1s', style({ opacity: 0 }))
    ])
    
  ]),
  trigger('ActiveInactive', [
    state('Active', style({
      height: '200px',
      opacity: 1,
      backgroundColor: 'yellow'
    })),
    state('Inactive', style({
      height: '100px',
      opacity: 0.5,
      backgroundColor: 'green'
    })),
    // ...
    transition('* => *', [
      animate('2s', keyframes ( [
        style({ opacity: 0.1, offset: 0.1 , transform:'translateX(50%) scale(0.5)'}),
        style({ opacity: 0.6, offset: 0.2 , transform:'translateX(50%) scale(0.5)'}),
        style({ opacity: 1,   offset: 0.5 , transform:'translateX(50%) scale(0.65) rotate(180deg)'}),
        style({ opacity: 0.2, offset: 0.7 , transform:'translateX(0) scale(0.80) rotate(180deg)'}),
        style({ opacity: 0.2, offset: 1 , transform:'translateX(0) scale(1) '})
      ]))
    ])
  ]),
    slideInAnimation
  ]
})
export class HomeComponent {
  isOpen = true;
  toggle() {
    this.isOpen = !this.isOpen;
  }
  showElement= false;
  isShown = false;
  isOpen1 = false;
  act() {
    this.isOpen1 = !this.isOpen1;
  }
  counter = 0;
  constructor(private router: Router) {}

  goToAbout() {
    this.router.navigate(['/about']);
  }
}