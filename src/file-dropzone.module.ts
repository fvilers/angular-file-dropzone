import { NgModule } from '@angular/core';

import { FileDropzoneDirective } from './file-dropzone.directive';

@NgModule({
  declarations: [FileDropzoneDirective],
  exports: [FileDropzoneDirective]
})
export class FileDropzoneModule {
}
