import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secondary-nav',
  templateUrl: './secondary-nav.component.html',
  styleUrls: ['./secondary-nav.component.scss']
})
export class SecondaryNavComponent implements OnInit {

  // properties
  navBtn = document.getElementById('navBtn');
  audio = new Audio();

  constructor() { }

  ngOnInit(): void {
    this.audio.src = '../assets/audio/beep.mp3';
  }

  playAudio() {
    this.audio.currentTime = 0;
    this.audio.volume = 0.025;
    this.audio.play();
  }

  stopAudio() {
    this.audio.pause();
    this.audio.currentTime = 0;
  }

}
