import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlbumService } from './album.service';
import { ChartService } from './chart.service';

@NgModule({
  declarations: [AlbumService, ChartService],
  imports: [
    CommonModule
  ]
})
export class FakeApiModule { }
