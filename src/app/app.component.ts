import { Component } from '@angular/core';

import { DroppedFile } from './modules/angular-file-dropzone';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isHover: boolean;
  public files: Array<DroppedFile> = [];
  
  addFile(file: DroppedFile) {
    this.files.push(file);
  }
}
