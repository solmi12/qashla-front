import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  blogData = [
    {
      image: 'assets/AdobeStock_578850184.jpeg',
      title: 'Celebrating World Environment Day at Qashla Medical ',
      text: 'At Qashla Medical, we are dedicated to advancing healthcare while prioritizing sustainability. On this World Environment Day, we reaffirm our commitment to incorporating eco-friendly practices'
    },
    {
      image: 'assets/Medic West Africa 2024, (2).jpg',
      title: 'Join Qashla Medical at Medic West Africa 2024!',
      text: 'Qashla Medical is thrilled to announce our participation as an exhibitor at Medic West Africa 2024, one of the largest healthcare exhibitions in the region.'
    },
    {
      image: 'assets/Platinum Arab Health Poster.png',
      title: 'Qashla Medical Participation at the Arab Health Exhibition 2024.',
      text: 'Qashla medical at ARAB Health 2024, where Qashla Medical taken the center stage in Za’abeel Hall 6, Booth C.25. All Gallery Our Brand Makler at'
    }
  ]
}


