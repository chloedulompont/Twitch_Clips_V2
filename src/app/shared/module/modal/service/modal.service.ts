import { Injectable } from '@angular/core';
import {ModalIds} from "../../../enums/modal-ids";
import {Modal} from "../../../beans/modal";

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private openModals: Array<Modal> = [];

  constructor() { }

  public register(modalId: ModalIds): void {
    this.openModals.push({id: modalId, isVisible: false});
  }

  public unregister(modalId: ModalIds): void {
    this.openModals = this.openModals.filter(openModal => openModal.id !== modalId);
  }

  public isModalOpen(modalId: ModalIds): boolean {
    return !!this.openModals.find(modal => modal.id === modalId)?.isVisible;
  }

  public toggleModal(id: string): void {
    const modal = this.openModals.find(modal => modal.id === id);
    if(modal){
      modal.isVisible = !modal.isVisible;
    }
  }
}
