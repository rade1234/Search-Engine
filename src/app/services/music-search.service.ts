import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable, Subject} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class MusicSearchService {

  albums = [];

  albumsStream = new Subject();

  constructor(private http: Http) {
    this.search('&');
  }

  getAlbumsStream() {
    return Observable
      .from(this.albumsStream)
      .startWith(this.albums);
  }

  getAlbum(id) {
    const url = `https://api.spotify.com/v1/albums/${id}`;

    return this.http.get(url)
      .map((response: Response) => response.json());
  }

  search(query) {
    const url = `https://api.spotify.com/v1/search?type=album&market=PL&query=${query}`;

    this.http.get(url)
      .map((response: Response) => {
        const data = response.json();
        return data.albums.items;
      })
      .do(albmus => {
        this.albums = albmus;
      })
      .subscribe(albums => {
        this.albumsStream.next(this.albums);
      });
  }

}
