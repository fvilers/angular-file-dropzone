import { Directive, ElementRef, EventEmitter, OnInit, Output, Renderer } from '@angular/core';

import { DroppedFile } from './dropped-file';
import { DroppedFileImpl } from './dropped-file-impl';

@Directive({
  selector: '[ngFileDropzone]'
})
export class FileDropzoneDirective implements OnInit {
  @Output()
  public fileDrop = new EventEmitter<DroppedFile>();

  constructor(private el: ElementRef, private renderer: Renderer) {
  }

  ngOnInit() {
    this.renderer.listen(this.el.nativeElement, 'dragenter', event => {
      event.stopPropagation();
      event.preventDefault();
    });
    
    this.renderer.listen(this.el.nativeElement, 'dragover', event => {
      event.stopPropagation();
      event.preventDefault();
    });
    
    this.renderer.listen(this.el.nativeElement, 'drop', event => {
      event.stopPropagation();
      event.preventDefault();
      
      var dt = event.dataTransfer;
      var files = dt.files;
      
      this.handleFiles(files);
    });
  }

  private handleFiles(files) {
    for (let file of files) {
      const reader = new FileReader();
        
      reader.onload = (loaded: ProgressEvent) => {
        const fileReader = loaded.target as FileReader;
        const droppedFile = new DroppedFileImpl(file.lastModifiedDate, file.name, file.size, file.type, fileReader.result);
        
        this.fileDrop.emit(droppedFile);
      };
  
      reader.readAsDataURL(file);
    }
  }
}
