import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITrackService } from '../interface';
import { ITrack } from '../model';

@Injectable({
  providedIn: 'root'
})
export class TrackService implements ITrackService {
  getTrack(id: number): Observable<ITrack> {
    throw new Error("Method not implemented.");
  }

  constructor() { }
}
