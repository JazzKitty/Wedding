import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-qa',
  imports: [],
  templateUrl: './qa.html',
  styleUrl: './qa.scss',
})
export class QA {
  @Input() question = '';
  @Input() answer = '';
}
