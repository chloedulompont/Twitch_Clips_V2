import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {faXmark} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public closeIcon: IconDefinition = faXmark;

  @Output()
  public onClose: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  public closeModal(): void {
    this.onClose.emit(true);
  }

}
