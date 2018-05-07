import {Component, OnInit} from '@angular/core';
import {MusicSearchService} from '../services/music-search.service';

@Component({
  selector: 'app-album-list',
  template: `
    <div class="card-deck card-deck-justify">
      <app-album-card [album]="album" class="card" [routerLink]="['album', album.id]"
                      *ngFor="let album of albums | async "></app-album-card>
    </div>
  `,
  styles: [`
    .card-deck-justify {
      justify-content: space-between;
    }

    app-album-card {
      cursor: pointer;
    }
  `]
})
export class AlbumListComponent implements OnInit {

  albums;

  constructor(private musicSearchService: MusicSearchService) {
  }

  ngOnInit() {
    this.albums = this.musicSearchService.getAlbumsStream();
  }

}
