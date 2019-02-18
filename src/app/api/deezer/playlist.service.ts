import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPlaylistService } from '../interface';
import { IPlaylist, ITrack } from '../model';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService implements IPlaylistService {
  getPlaylist(id: number): Observable<IPlaylist> {
    throw new Error("Method not implemented.");
  }
  getPlaylistTracks(url: string): Observable<ITrack[]> {
    throw new Error("Method not implemented.");
  }

  constructor() { }
}
