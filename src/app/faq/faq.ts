import { Component } from '@angular/core';
import { QA } from '../../model/QA';

@Component({
  selector: 'app-faq',
  imports: [],
  templateUrl: './faq.html',
  styleUrl: './faq.scss',
})
export class Faq {
  public QAs: QA[] = [
    {
      question: 'What is the dress code?',
      answer: 'Please arrive in cocktail attire.',
    },
    {
      question: 'Are plus ones allowed?',
      answer:
        "Due to limited space, we're only able to accommodate the guests specifically named on your invitation. Thank you for understanding!",
    },
    {
      question: 'Are children allowed?',
      answer:
        'Yes, children are allowed but music after 9:00pm will <u>not</u> be kid friendly.',
    },
    {
      question: 'Will there be an open bar?',
      answer:
        'Yes. For those who wish to drink, we will have an open bar. The bar will have beer, wine, and a small list of mix drinks. There will not be neat pours or straight shots.',
    },
    {
      question: 'Is the wedding indoor or outdoor?',
      answer:
        'The wedding is primarily outdoors. In the event of poor weather, there are accommodations indoors, however, please plan to spend the majority of time outside.',
    },
    {
      question: 'Is there parking at the venue?',
      answer:
        "Yes! There are plenty of parking accomendations. If you are driving, please make sure to follow <a href='https://www.google.com/maps/dir//Louland+Falls,+Highway+80,+Exit+131,+Salt+Lake+City,+UT+84109/'>maps</a>. If you are coming from Salt Lake City, please be aware there is only an exit Westbound.",
    },
    {
      question: 'What if I have food allergies or dietary restrictions?',
      answer:
        'Please put ALL of your allergies and dietary restrictions on the RSVP and we will do our best to accommodate. On the unfortunate chance we are unable to, we will reach out and let you know so you can prepare. ',
    },
  ];
}
