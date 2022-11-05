import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from '../common/components/header/header.component';
import {FooterComponent} from '../common/components/footer/footer.component';
import {RouterModule} from '@angular/router';
import {HomepageComponent} from '../common/components/homepage/homepage.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {AuthenticationModule} from "../authentication/authentication.module";


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomepageComponent
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    AuthenticationModule
  ]
})
export class SharedModule {
}
