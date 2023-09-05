import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import WarningAlertComponent from './warning-alert/warning-alert.component';
import { InputUsernameComponent } from './input-username/input-username.component';
import { FormsModule } from '@angular/forms';
import { ToggleBtnComponent } from './toggle-btn/toggle-btn.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';

@NgModule({
  declarations: [
    AppComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
    InputUsernameComponent,
    ToggleBtnComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
