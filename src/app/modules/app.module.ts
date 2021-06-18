import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../components/app.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { PersonComponent } from '../components/person/person.component';
import { ButtonComponent } from '../components/button/button.component';
import { TodoComponent } from '../components/todo/todo.component';
import { LayoutComponent } from '../components/layout/layout.component';
import { GridComponent } from '../components/grid/grid.component';
import { IosComponent } from '../components/ios/ios.component';
import { CommonModule } from '@angular/common';
import { ArtistsComponent } from '../components/layout/artists/artists.component';
import { AlbumsComponent } from '../components/layout/albums/albums.component';
import { SongsComponent } from '../components/layout/songs/songs.component';
import { PlaylistsComponent } from '../components/layout/playlists/playlists.component'

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    PersonComponent,
    ButtonComponent,
    TodoComponent,
    LayoutComponent,
    GridComponent,
    IosComponent,
    ArtistsComponent,
    AlbumsComponent,
    SongsComponent,
    PlaylistsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
