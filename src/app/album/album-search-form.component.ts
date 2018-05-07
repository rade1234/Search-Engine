import {Component, OnInit} from '@angular/core';
import {MusicSearchService} from '../services/music-search.service';
import {FormGroup, FormControl} from '@angular/forms';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-album-search-form',
  template: `
    <form [formGroup]="searchForm">
      <div class="input-group">
        <input type="text" formControlName="query" class="form-control" placeholder="Szukaj">
      </div>
    </form>
  `,
  styles: [`
    input:focus {
      border-color: rgba(31, 243, 102, 0.8);
      box-shadow: 0 1px 1px rgba(31, 243, 102, 0.075) inset, 0 0 8px rgba(31, 243, 102, 0.6);
      outline: 0 none;
    }
  `]
})
export class AlbumSearchFormComponent implements OnInit {

  searchForm: FormGroup;

  constructor(private musicSearchService: MusicSearchService) {
    this.searchForm = new FormGroup({
      'query': new FormControl('')
    });

    this.searchForm.get('query').valueChanges
      .filter(query => query.length > 0)
      .distinctUntilChanged()
      .debounceTime(500)
      .subscribe(query => {
        this.musicSearchService.search(query);
      });
  }

  search(query) {
    this.musicSearchService.search(query);
  }

  ngOnInit() {
  }

}
