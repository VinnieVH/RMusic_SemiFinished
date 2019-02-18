import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlbumService, ArtistService, ChartService, PlaylistService, TrackService } from '.';


@NgModule({
  declarations: [AlbumService, ArtistService, ChartService, PlaylistService, TrackService],
  imports: [
    CommonModule
  ]
})
export class DeezerModule { }
