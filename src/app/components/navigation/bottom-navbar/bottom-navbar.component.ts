import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottom-navbar',
  templateUrl: './bottom-navbar.component.html',
  styleUrls: ['./bottom-navbar.component.scss']
})
export class BottomNavbarComponent implements OnInit {
  // properties
  navBtn = document.getElementById('navBtn');
  audio = new Audio();
  isPlaying: boolean = true;
  audioButtonText: string = "Mute Audio";

  constructor() { }

  ngOnInit(): void {
    this.audio.src = '../assets/audio/soundtrack-loop.mp3';
    this.audio.loop = true;
    this.audio.volume = 0.25;
    this.audio.play();
  }

  toggleSoundtrack() {
    this.audio.currentTime = 0;
    this.isPlaying = !this.isPlaying; 
    this.isPlaying == true ? this.audio.play() : this.audio.pause();
    this.audio.volume = 0.25;
    this.updateAudioButton();
  }

  updateAudioButton() {
    this.isPlaying == true ? this.audioButtonText = "Mute Audio" : this.audioButtonText = "Play Audio";
  }

}
