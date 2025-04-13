import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery.component';
import { MatIconModule } from '@angular/material/icon';
import { DateFormatPipe } from "../../shaerd/pipes/date-format.pipe";


@NgModule({
  declarations: [GalleryComponent],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    MatCardModule,
    MatIconModule,
    DateFormatPipe
]
})
export class GalleryModule { }
