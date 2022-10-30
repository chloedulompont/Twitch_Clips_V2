import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private isLoggedInBehaviorSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  public isLoggedInObservable: Observable<boolean> = this.isLoggedInBehaviorSubject.asObservable();

  constructor() { }

  public login(): void {
    this.isLoggedInBehaviorSubject.next(true);
  }

  public logout(): void {
    this.isLoggedInBehaviorSubject.next(false);
  }
}
