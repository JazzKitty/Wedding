import { Component } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { TimelineModule } from 'primeng/timeline';
import { ButtonModule } from 'primeng/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCake, faCar, faRing, } from '@fortawesome/free-solid-svg-icons';


@Component({
    selector: 'app-schedule',
    imports: [AvatarModule, TimelineModule, ButtonModule, FontAwesomeModule],
    templateUrl: './schedule.html',
    styleUrl: './schedule.scss',
})
export class Schedule {

    faCar = faCar;
    faCake = faCake;
    faRing = faRing;
    events = [
        {
            time: '4:30 PM',
            icon: this.faCar,
            color: 'bg-blue-500',
        },
        {
            time: '10:32 AM',
            icon: this.faRing,
            color: 'bg-green-500',
        },
        {
            time: '02:15 PM',
            icon: this.faRing,

            color: 'bg-orange-500',
        },
        {
            time: '11:20 AM',
            icon: this.faRing,
            color: 'bg-lime-500',
        }
    ];
}
