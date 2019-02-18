import { Observable } from 'rxjs';
import { IPlaylist, ITrack } from '../model';

export interface IPlaylistService {
  getPlaylist(id: number): Observable<IPlaylist>;
  getPlaylistTracks(url: string): Observable<ITrack[]>;
}
