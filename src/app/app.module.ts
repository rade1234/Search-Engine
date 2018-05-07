import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AuthorizationService} from './services/authorization.service';
import {MusicSearchModule} from './music-search/music-search.module';
import {routerModule} from './app.routing';
import {AppComponent} from './app.component';
import {NavComponent} from './navigation/nav.component';
import {FooterComponent} from './navigation/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MusicSearchModule,
    routerModule
  ],
  providers: [AuthorizationService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private auth: AuthorizationService) {
    this.auth.getToken();
  }
}
