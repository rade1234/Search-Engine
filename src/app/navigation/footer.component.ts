import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <div class="container">
      <nav class="navbar navbar-light bg-transparent">
        <ul class="nav navbar-nav">
          <li class="nav-item">
              <a class="nav-link" href="https://www.spotify.com/" target="_blank">
                <img src="assets/Spotify_Logo_Green.png" class="float-right" alt="">
              </a>
          </li>
        </ul>
      </nav>
    </div>
  `,
  styles: [`
    img {
      max-width: 30%;
      height: auto;
      margin-bottom: 2em;
    }
  `]
})
export class FooterComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
