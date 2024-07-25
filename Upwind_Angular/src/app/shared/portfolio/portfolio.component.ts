import { Component } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  filteredRecord: any;

  constructor(public _lightbox: Lightbox) {}
  data = [
    {
      title: 'Our Team',
      text: 'Abstract',
      src: 'assets/images/portfolio/1.jpg',
      type: 'Work'
    },
    {
      title: 'Steps',
      text: 'Abstract',
      src: 'assets/images/portfolio/2.jpg',
      type: 'Accuracy in action'
    },
    {
      title: 'Data',
      text: 'Abstract',
      src: 'assets/images/portfolio/3.jpg',
      type: 'Analysis'
    },
    {
      title: 'Collaboration',
      text: 'Books',
      src: 'assets/images/portfolio/4.jpg',
      type: 'Development Ideas'
    },
    {
      title: 'Notes',
      text: 'V-card',
      src: 'assets/images/portfolio/5.jpg',
      type: 'Treatment'
    },
    {
      title: 'Agreement',
      text: 'Abstract',
      src: 'assets/images/portfolio/6.jpg',
      type: 'Mutual understanding'
    },
    {
      title: 'Global reach',
      text: 'Abstract',
      src: 'assets/images/portfolio/7.jpg',
      type: 'Communication'
    },
    {
      title: 'feedbacks',
      text: 'Abstract',
      src: 'assets/images/portfolio/8.jpg',
      type: 'Supports'
    },
  ];

  
  open(index: number): void {
    this._lightbox.open(this.filteredRecord, index);
  }

  ngOnInit() {
    this.filteredRecord = this.data;
  }
}
