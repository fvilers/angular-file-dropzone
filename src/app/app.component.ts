import { Component } from '@angular/core';

import { DroppedFile, ReadMode } from '../lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public readMode = ReadMode.dataURL;
  public isHover: boolean;
  public files: Array<DroppedFile> = [];
  
  addFile(file: DroppedFile) {
    this.files.push(file);
  }
}
