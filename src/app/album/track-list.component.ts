import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styles: [`
    h2 {
      margin-bottom: 1em;
    }

    table {
      margin-top: 3em;
      margin-bottom: 3em;
    }

    tbody tr:hover {
      cursor: pointer;
      background-color: rgba(31, 243, 102, 0.8);
    }
  `]
})
export class TrackListComponent implements OnInit {

  @Input()
  tracks;

  trackName = 'Wybierz utwór z playlisty';

  play(audio, track) {
    this.trackName = track.name;
    audio.volume = 1;

    if (audio.src !== track.preview_url) {
      audio.src = track.preview_url;
      audio.play();
    } else if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }

  constructor() {
  }

  ngOnInit() {
  }

}
