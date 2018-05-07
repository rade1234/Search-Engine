import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
    <div class="container">
      <nav class="navbar navbar-light bg-faded">
        <h3>
          <a routerLink="/" class="navbar-brand"><b>Szukaj w Spotify</b></a>
        </h3>
        <ul class="nav navbar-nav">
          <li class="nav-item">
            <a class="nav-link" routerLink="/music"><b> Szukaj utworu   </b></a>
          </li>
        </ul>
      </nav>
    </div>
  `,
  styles: [`
    a {
      color: rgba(0, 0, 0, 0.7);
    }

    a.navbar-brand {
      color: rgba(0, 0, 0, 0.5);
    }

    a:hover {
      color: rgba(0, 0, 0, 1);
    }

    a.navbar-brand:hover {
      color: rgba(0, 0, 0, 0.8);
    }
  `]
})
export class NavComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
