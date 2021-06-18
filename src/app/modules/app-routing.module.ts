import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridComponent } from '../components/grid/grid.component';
import { IosComponent } from '../components/ios/ios.component'
import { AlbumsComponent } from '../components/layout/albums/albums.component'
import { ArtistsComponent } from '../components/layout/artists/artists.component'
import { LayoutComponent } from '../components/layout/layout.component';
import { PlaylistsComponent } from '../components/layout/playlists/playlists.component'
import { SongsComponent } from '../components/layout/songs/songs.component'
import { ProfileComponent } from '../components/profile/profile.component';
import { TodoComponent } from '../components/todo/todo.component';

const routes: Routes = [{
  path: 'profile',
  component: ProfileComponent
}, {
  path: 'todo',
  component: TodoComponent
}, {
  path: 'player',
  redirectTo: 'player/artists',
  pathMatch: 'full'
}, {
  path: 'player',
  component: LayoutComponent,
  children: [{
    path: 'playlists',
    component: PlaylistsComponent
  },{
    path: 'albums',
    component: AlbumsComponent
  },{
    path: 'songs',
    component: SongsComponent
  }, {
    path: 'artists',
    component: ArtistsComponent
  }]
}, {
  path: 'grid',
  component: GridComponent
}, {
  path: 'ios',
  component: IosComponent
}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
