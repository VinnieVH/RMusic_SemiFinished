import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAlbumService } from '../interface';
import { IAlbum, ITrack } from '../model';

@Injectable({
  providedIn: 'root'
})
export class AlbumService implements IAlbumService {

  constructor() { }

  getAlbums(): Observable<IAlbum[]> {
    throw new Error("Method not implemented.");
  }
  getAlbumTracks(url: string): Observable<ITrack[]> {
    throw new Error("Method not implemented.");
  }
}
