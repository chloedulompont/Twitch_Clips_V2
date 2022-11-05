import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private _isLoggedInBehaviorSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isLoggedInObservable: Observable<boolean> = this._isLoggedInBehaviorSubject.asObservable();

  constructor() { }

  public login(): void {
    this._isLoggedInBehaviorSubject.next(true);
  }

  public logout(): void {
    this._isLoggedInBehaviorSubject.next(false);
  }
}
