import { DroppedFile } from './dropped-file';

export class DroppedFileImpl implements DroppedFile {
  get lastModifiedDate(): Date {
    return this._lastModifiedDate;
  }

  get name(): string {
    return this._name;
  }

  get size(): number {
    return this._size;
  }

  get type(): string {
    return this._type;
  }

  get dataURL(): string {
    return this._dataURL;
  }

  constructor(
    private _lastModifiedDate: Date,
    private _name: string,
    private _size: number,
    private _type: string,
    private _dataURL: string) {
  }
}
