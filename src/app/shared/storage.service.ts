import { Injectable, EventEmitter } from '@angular/core';

interface Options {
  storeName: string;
}

@Injectable()
export class StorageService {

  private _storeName = 'APP_STORE';
  public changeStore = new EventEmitter();

  constructor() {}

  public init(options: Options) {
    this._storeName = options.storeName;
  }

  public setState<T>(data: T) {
    this._set(data);
    this._changeDetect(data);
  }

  public addId(id: string) {
    const state = this.getState<Array<string>>();

    if (!this.findId(id)) {
      state.push(id);
      this.setState(state);
    }
  }

  public findId(id: string): boolean {
    const state = this.getState<[]>();
    const findResult = state.filter(filterId => filterId === id);

    if (!findResult.length) return false;

    return true;
  }

  public getState<T>(): T {
    return this._get();
  }

  private _changeDetect<T>(data: T) {
    this.changeStore.emit(data);
  }

  private _set<T>(data: T) {
    localStorage.setItem(this._storeName, JSON.stringify(data));
  }

  private _get<T>(): T {
    const state = JSON.parse(localStorage.getItem(this._storeName));
    return state ? state : [];
  }
}
