import { Component } from '@angular/core';

@Component({
  selector: 'app-input-username',
  templateUrl: './input-username.component.html',
})
export class InputUsernameComponent {
  inputDetail = '';
  username = '';

  onCilckSubmit() {
    this.username = this.inputDetail;
    this.inputDetail = '';
  }
}
