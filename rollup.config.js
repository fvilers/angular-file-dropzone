export default {
  dest: 'dist/bundles/file-dropzone.umd.js',
  entry: 'dist/index.js',
  format: 'umd',
  globals: {
    '@angular/core': 'ng.core',
  },
  moduleName: 'ng.fileDropzone',
  sourceMap: false
}
