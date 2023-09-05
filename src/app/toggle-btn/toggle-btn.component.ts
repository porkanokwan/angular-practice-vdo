import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-btn',
  templateUrl: './toggle-btn.component.html',
  styles: [
    `
      .logs {
        color: white;
      }
    `,
  ],
})
export class ToggleBtnComponent {
  showSecret = false;
  log: any[] = [];

  onToggleDisplay() {
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1);
  }
}
