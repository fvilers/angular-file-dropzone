import { Directive, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2 } from '@angular/core';

import { DroppedFile } from './dropped-file';
import { DroppedFileImpl } from './dropped-file-impl';
import { ReadMode } from './read-mode.enum';

@Directive({
  selector: '[ngFileDropzone]'
})
export class FileDropzoneDirective implements OnInit {
  @Input('ngFileDropzone') readMode: ReadMode;

  @Output()
  public fileDrop = new EventEmitter<DroppedFile>();

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    this.renderer.listen(this.el.nativeElement, 'dragenter', (event: DragEvent) => {
      event.stopPropagation();
      event.preventDefault();
    });

    this.renderer.listen(this.el.nativeElement, 'dragover', (event: DragEvent) => {
      event.stopPropagation();
      event.preventDefault();
    });

    this.renderer.listen(this.el.nativeElement, 'drop', (event: DragEvent) => {
      event.stopPropagation();
      event.preventDefault();

      var dt = event.dataTransfer;
      var files = dt.files;

      this.handleFiles(files);
    });
  }

  private handleFiles(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();

      reader.onload = (loaded: ProgressEvent) => {
        const fileReader = loaded.target as FileReader;
        const droppedFile = new DroppedFileImpl(file.lastModifiedDate, file.name, file.size, file.type, this.readMode, fileReader.result);

        this.fileDrop.emit(droppedFile);
      };

      switch (this.readMode) {
        case ReadMode.arrayBuffer:
          reader.readAsArrayBuffer(file);
          break;
        case ReadMode.binaryString:
          reader.readAsBinaryString(file);
          break;
        case ReadMode.text:
          reader.readAsText(file);
          break;
        case ReadMode.dataURL:
        default:
          reader.readAsDataURL(file);
          break;
      }
    }
  }
}
