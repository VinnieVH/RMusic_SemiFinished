import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AlbumComponent } from './album/album.component';
import { ArtistComponent } from './artist/artist.component';
import { OverlayComponent } from './overlay/overlay.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { RoundComponent } from './round/round.component';
import { SongComponent } from './song/song.component';
import { SquareComponent } from './square/square.component';

@NgModule({
  declarations: [AlbumComponent, SongComponent, PlaylistComponent, ArtistComponent, RoundComponent, SquareComponent, OverlayComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [AlbumComponent, SongComponent, PlaylistComponent, ArtistComponent]
})
export class SingleValueModule { }
