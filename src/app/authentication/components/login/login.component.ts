import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {ModalService} from "../../../shared/module/modal/service/modal.service";
import {ModalIds} from "../../../shared/enums/modal-ids";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  public modalId: ModalIds = ModalIds.AUTHENTICATION_MODAL;

  @Input()
  public showModal: boolean = false;

  @Output()
  public onClose: EventEmitter<boolean> = new EventEmitter<boolean>();

  public displaySignInForm: boolean = false;

  /**
   * Log in form
   */

  public loginEmail: FormControl = new FormControl<string>('', {
    nonNullable: true,
    validators: [Validators.required, Validators.email]
  });
  public loginPassword: FormControl = new FormControl<string>('',{
    nonNullable: true,
    validators: [Validators.required]
  });

  public loginForm: FormGroup = new FormGroup<any>({
    email: this.loginEmail,
    password: this.loginPassword
  });

  /**
   * Sign in form
   */

  public signInUserName: FormControl = new FormControl<string>('', {
    nonNullable: true,
    validators: [Validators.required, Validators.minLength(4), Validators.maxLength(10)]
  });
  public signInEmail: FormControl = new FormControl<string>('', {
    nonNullable: true,
    validators: [Validators.required, Validators.email]
  });
  public signInPassword: FormControl = new FormControl<string>('', {
    nonNullable: true,
    validators: [Validators.required]
  });
  public signInConfirmPassword: FormControl = new FormControl<string>('', {
    nonNullable: true,
    validators: [Validators.required]
  });
  public signInBirthDate: FormControl = new FormControl<string>('', {
    nonNullable: true,
    validators: [Validators.required]
  });

  public signInForm: FormGroup = new FormGroup<any>({
    userName: this.signInUserName,
    email: this.signInEmail,
    password: this.signInPassword,
    confirmPassword: this.signInConfirmPassword,
    birthdate: this.signInBirthDate
  })

  constructor(
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
    this.modalService.register(this.modalId);
  }

  ngOnDestroy() {
    this.modalService.unregister(this.modalId);
  }

  public closeModal(): void {
    this.onClose.emit(true);
  }

  public toggleDisplaySignInForm(): void {
    this.displaySignInForm = !this.displaySignInForm;
  }

  public isLoginFormValid(): boolean {
    return this.loginForm.valid;
  }

  public login(){
    console.log('Logged In');
  }

  public isSignInFormValid(): boolean {
    return this.signInForm.valid;
  }

  public signIn(){
    console.log('Signed In');
  }

}
