import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagePipe } from './image.pipe';



@NgModule({
  declarations: [ImagePipe],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
