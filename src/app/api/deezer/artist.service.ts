import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IArtistService } from '../interface';
import { IArtist, ITrack } from '../model';

@Injectable({
  providedIn: 'root'
})
export class ArtistService implements IArtistService {
  getArtist(id: number): Observable<IArtist[]> {
    throw new Error("Method not implemented.");
  }
  getArtistTracks(url: string): Observable<ITrack[]> {
    throw new Error("Method not implemented.");
  }

  constructor() { }
}
