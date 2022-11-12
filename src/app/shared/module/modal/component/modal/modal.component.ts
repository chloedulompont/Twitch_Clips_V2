import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import {ModalService} from "../../service/modal.service";
import {ModalIds} from "../../../../enums/modal-ids";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input()
  public modalId!: ModalIds;

  public closeIcon: IconDefinition = faXmark;

  public modalSize: string = 'lg';

  constructor(
    public modalService: ModalService
  ) { }

  ngOnInit(): void {
  }

  @HostListener('window:keydown.esc', ['$event'])
  public close(): void {
    this.modalService.toggleModal(this.modalId);
  }

}
