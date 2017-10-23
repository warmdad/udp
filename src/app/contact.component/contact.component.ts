import { Component, trigger, state, style, transition, animate, keyframes } from '@angular/core';


@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [
    
        trigger('main', [
          transition('void => *', [
            style({opacity: '0'}),
            animate('500ms ease')
          ])
        ])
    
      ]
})
export class ContactComponent {
  title = 'Contact';  
}
