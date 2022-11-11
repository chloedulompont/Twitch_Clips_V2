import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {ModalService} from "../../../shared/module/modal/service/modal.service";
import {ModalIds} from "../../../shared/enums/modal-ids";

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

  constructor(
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
    this.modalService.register(this.modalId);
  }

  public closeModal(): void {
    this.onClose.emit(true);
  }
  ngOnDestroy() {
    this.modalService.unregister(this.modalId);
  }
}
