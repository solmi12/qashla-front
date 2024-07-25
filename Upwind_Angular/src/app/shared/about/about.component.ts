import { Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit{


  ngOnInit() {
    const video: HTMLVideoElement = document.getElementById('about-video') as HTMLVideoElement;
    const playButton: HTMLElement = document.getElementById('play-button') as HTMLElement;

    playButton.addEventListener('click', () => {
      if (video.paused) {
        video.play();
        playButton.style.display = 'none';
      } else {
        video.pause();
        playButton.style.display = 'block';
      }
    });

    video.addEventListener('click', () => {
      if (video.paused) {
        video.play();
        playButton.style.display = 'none';
      } else {
        video.pause();
        playButton.style.display = 'block';
      }
    });

    video.addEventListener('play', () => {
      playButton.style.display = 'none';
    });

    video.addEventListener('pause', () => {
      playButton.style.display = 'block';
    });
  }
}
