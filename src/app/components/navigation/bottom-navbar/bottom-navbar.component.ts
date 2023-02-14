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
  isPlaying: boolean = false;
  audioButtonText: string = "Play Audio";

  constructor() { }

  ngOnInit(): void {
    this.audio.src = '../assets/audio/soundtrack.mp3';
    this.audio.loop = true;
  }

  toggleSoundtrack() {
    this.audio.currentTime = 0;
    this.isPlaying = !this.isPlaying; 
    this.isPlaying == true ? this.audio.play() : this.audio.pause();
    this.updateAudioButton();
  }

  updateAudioButton() {
    this.isPlaying == true ? this.audioButtonText = "Mute Audio" : this.audioButtonText = "Play Audio";
  }

}
