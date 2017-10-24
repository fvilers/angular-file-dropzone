import { Directive, ElementRef, EventEmitter, Output, Renderer2, HostListener, HostBinding } from '@angular/core';

import { DroppedFile } from './dropped-file';
import { DroppedFileImpl } from './dropped-file-impl';

@Directive({
  selector: '[ngFileDropzone]'
})
export class FileDropzoneDirective {
  @Output()
  public fileDrop = new EventEmitter<DroppedFile>();

  @HostBinding('class.ng-dropzone-hover')
  public hoverClass: boolean = false;

  @HostListener('dragenter', ['$event'])
  public onDragenter(event: DragEvent): void {
    this.hoverClass = true;
    event.stopPropagation();
    event.preventDefault();
  }

  @HostListener('dragover', ['$event'])
  public onDragover(event: DragEvent): void {
    this.hoverClass = true;
    event.stopPropagation();
    event.preventDefault();
  }

  @HostListener('dragleave', ['$event'])
  public onDragleave(event: DragEvent): void {
    this.hoverClass = false;
  }

  @HostListener('drop', ['$event'])
  public onDrop(event: DragEvent): void {
    this.hoverClass = false;
    event.stopPropagation();
    event.preventDefault();

    var dt = event.dataTransfer;
    var files = dt.files;

    this.handleFiles(files);
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  private handleFiles(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
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
