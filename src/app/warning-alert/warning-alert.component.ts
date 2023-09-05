import { Component } from '@angular/core';

@Component({
  selector: 'app-warning',
  template: `<p>Warning!</p>`,
  styles: [
    `
      p {
        color: red;
        border: 2px solid orange;
        padding: 15px;
        background-color: mistyrose;
      }
    `,
  ],
})
export default class WarningAlertComponent {}
