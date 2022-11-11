import {Component, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { Subscription } from 'rxjs';
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {faArrowRight, faBars} from "@fortawesome/free-solid-svg-icons";
import {AuthenticationService} from "../../../authentication/services/authentication.service";
import {LoginComponent} from "../../../authentication/components/login/login.component";
import {ModalService} from "../../../shared/module/modal/service/modal.service";
import {ModalIds} from "../../../shared/enums/modal-ids";

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

  private readonly AUTHENTICATION_MODAL_ID: string = ModalIds.AUTHENTICATION_MODAL;

  constructor(
    private authenticationService: AuthenticationService,
    private modalService: ModalService
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

  public openAuthModal(): void {
    this.modalService.toggleModal(this.AUTHENTICATION_MODAL_ID);
  }
}

