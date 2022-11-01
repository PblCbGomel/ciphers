import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ciphers-panel',
  templateUrl: './ciphers-panel.component.html',
  styleUrls: ['./ciphers-panel.component.scss'],
})
export class CiphersPanelComponent {
  public someCipherIsOpen: boolean = false;

  constructor(private router: Router) {
    if (this.router.url !== '/main/cipher') {
      this.someCipherIsOpen = true;
    }
  }

  openCipher(): void {
    this.someCipherIsOpen = true;
  }
}
