import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faI } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { faGift } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'side',
  imports: [FontAwesomeModule, RouterLink],
  templateUrl: './side.html',
  styleUrl: './side.scss',
})
export class Side {
    faHamburger = faBars; 
    faHome = faHome;
    faQuestion = faQuestion;
    faImage = faImage; 
    faGift = faGift; 
    faEnvelope = faEnvelope;
    
    @Input() expanded: boolean = false;
    @Output() expandedChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    onExpanded(){
        this.expanded = !this.expanded;
        this.expandedChange.emit(this.expanded);
    }

}
