import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/authentication/services/authentication.service';
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {faArrowRight, faBars} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  public showMobileMenu: boolean = false;

  private isLoggedInSubscription: Subscription = new Subscription();
  public isLoggedIn: boolean = false;

  public barsIcon: IconDefinition = faBars;
  public arrow: IconDefinition = faArrowRight;

  constructor(
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.subscribeOnLoggedStatus();
  }

  ngOnDestroy(): void {
    this.isLoggedInSubscription.unsubscribe();
  }

  public toggleShowMobileMenu(): void {
    this.showMobileMenu = !this.showMobileMenu;
  }

  private subscribeOnLoggedStatus(): void {
    this.isLoggedInSubscription = this.authenticationService.isLoggedInObservable.subscribe(isLoggedIn => this.isLoggedIn = isLoggedIn);
  }

  public logout(): void {
    this.showMobileMenu = false;
    this.authenticationService.logout();
  }

  /**
   * @deprecated à supprimer dès l'implémentation de l'authentification
   */
  public toggleIsConnected(): void {
    this.authenticationService.login();
  }
}

