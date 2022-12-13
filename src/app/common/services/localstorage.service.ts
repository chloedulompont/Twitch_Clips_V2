import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }


  public getItem(key: string): string {
    return localStorage.getItem(key) ?? '';
  }
  public removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  public setItem(key: string, value: any): void {
    if(typeof value !== 'string') {
      value = JSON.stringify(value);
    }
    localStorage.setItem(key, value)
  }

  public clearLocastorage(): void {
    localStorage.clear();
  }
}
