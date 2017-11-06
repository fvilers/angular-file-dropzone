import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileDropzoneDirective } from './file-dropzone.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FileDropzoneDirective],
  exports: [FileDropzoneDirective]
})
export class AngularFileDropzoneModule { }
