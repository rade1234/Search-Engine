import {Component, OnInit} from '@angular/core';
import {MusicSearchService} from '../services/music-search.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-album-details',
  template: `
    <h1>{{albumName}}</h1>
    <div class="row" *ngIf="album">
      <div class="col-5">
        <app-album-card class="card" [album]="album"></app-album-card>
      </div>
      <div class="col-7">
        <app-track-list [tracks]="album.tracks.items"></app-track-list>
      </div>
    </div>
  `,
  styles: [`
    h1 {
      margin-top: 1em;
      margin-bottom: 1em;
    }
  `]
})
export class AlbumDetailsComponent implements OnInit {

  constructor(private musicSearchService: MusicSearchService,
              private activeRoute: ActivatedRoute) {
  }

  album;
  albumName;

  ngOnInit() {
    const id = this.activeRoute.snapshot.params['album_id'];
    this.musicSearchService.getAlbum(id)
      .subscribe(album => {
        this.album = album;
        this.albumName = album.name;
      });
  }

}
