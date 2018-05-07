import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-album-card',
  template: `
    <img class="card-img-top img-fluid" [src]="image.url">
    <div class="card-img-overlay">
      <h5 class="card-title">{{album.name}}</h5>
    </div>
  `,
  styleUrls: ['./album-card.component.css']
})
export class AlbumCardComponent implements OnInit {

  @Input('album')
  set setAlbum(album) {
    this.album = album;
    this.image = album.images[0];
  }

  album;

  image;

  constructor() {
  }

  ngOnInit() {
  }

}
