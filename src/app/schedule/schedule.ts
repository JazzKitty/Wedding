import { Component } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { TimelineModule } from 'primeng/timeline';
import { ButtonModule } from 'primeng/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCake, faCar, faRing } from '@fortawesome/free-solid-svg-icons';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-schedule',
  imports: [AvatarModule, TimelineModule, ButtonModule, FontAwesomeModule, NgClass, NgStyle],
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
      text: 'Doors Open',
    },
    {
      time: '5:00 PM',
      text: 'Ceremony Begins',
      img: 'weddingbands.png',
    },
    {
      time: '5:30 PM',
      img: 'party-horn.png',
      text: 'Reception Starts',
    },
    {
      time: '6:00 PM',
      text: 'Dinner is Served',
      img: 'plate.png',
    },
    {
      time: '8:30 PM',
      icon: this.faCake,
      text: 'Cake Cutting',
    },
    {
      time: '10:00 PM',
      text: 'Reception Ends',
      img: 'wave-bye.png',
    },
  ];
}
