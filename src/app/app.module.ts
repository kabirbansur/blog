import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CommentComponent} from './comment/comment.component';
import {PostComponent} from './post/post.component';
import {HomeComponent} from './home/home.component';
import {DetailComponent} from './detail/detail.component';
import {HttpClientModule} from '@angular/common/http'
import {ApiService} from './shared/services/api.service';
import {LocalStorageService} from "./shared/services/local-storage.service";

@NgModule({
  declarations: [
    AppComponent,
    CommentComponent,
    PostComponent,
    HomeComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiService, LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
