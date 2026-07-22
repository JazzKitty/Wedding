import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faDiamondTurnRight, faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-home',
    imports: [FontAwesomeModule, RouterLink],
    templateUrl: './home.html',
    styleUrl: './home.scss',
})
export class Home {
    faTurnRight = faDiamondTurnRight;
    faEnvelope = faEnvelope;
    
    openDirections() {
        const url = `https://www.google.com/maps/dir//Louland+Falls,+Highway+80,+Exit+131,+Salt+Lake+City,+UT+84109/`;

        // Open in a new tab
        window.open(url, '_blank');
    }
}
