# angular-file-dropzone
A simple file dropzone for Angular


## Quick links
[API Reference](https://github.com/fvilers/angular-file-dropzone/wiki/api-reference), [Plunker demo](https://embed.plnkr.co/Ru0Pl0rAWiyfHgfy9LtZ/).

## Installation
Add the package to your application.

```
npm install --save angular-file-dropzone
```

## Getting started

Import the file dropzone module to your angular module.

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FileDropzoneModule } from 'angular-file-dropzone';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FileDropzoneModule
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

Add the file dropzone directive to an element, like a div.

```
<div ngFileDropzone>Drop a file in this zone.</div>
```

Bind to the `fileDrop` event to get the dropped file from the `$event` variable.

```
<div
  ngFileDropzone
  (fileDrop)="file = $event">
  Drop a file in this zone.
</div>
```

The dropped file implements the following interface:

```
interface DroppedFile {
  lastModifiedDate: Date;
  name: string;
  size: number;
  type: string;
  dataURL: string;
}
```
