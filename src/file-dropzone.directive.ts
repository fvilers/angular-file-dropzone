import { Directive, ElementRef, EventEmitter, OnInit, Output, Renderer } from '@angular/core';

@Directive({
  selector: '[ngFileDropzone]'
})
export class FileDropzoneDirective implements OnInit {
  @Output()
  public filesDrop = new EventEmitter();

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
  // TODO
  }
}
