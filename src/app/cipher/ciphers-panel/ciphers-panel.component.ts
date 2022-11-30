import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ciphers-panel',
  templateUrl: './ciphers-panel.component.html',
  styleUrls: ['./ciphers-panel.component.scss'],
})
export class CiphersPanelComponent implements OnInit {
  public someCipherIsOpen: boolean = false;

  public isBtn1Disable = false;

  public isBtn2Disable = false;

  public isBtn3Disable = false;

  constructor(private router: Router) {
    if (this.router.url !== '/main/cipher') {
      this.someCipherIsOpen = true;
    }
  }

  ngOnInit(): void {
    if (this.router.url === '/main/cipher/caesar') {
      this.isBtn1Disable = true;
    } else if (this.router.url === '/main/cipher/morse') {
      this.isBtn2Disable = true;
    } else if (this.router.url === '/main/cipher/transposition') {
      this.isBtn3Disable = true;
    }
  }

  changeDisable(num: number): void {
    if (num === 1) {
      this.isBtn1Disable = true;
      this.isBtn2Disable = false;
      this.isBtn3Disable = false;
    } else if (num === 2) {
      this.isBtn1Disable = false;
      this.isBtn2Disable = true;
      this.isBtn3Disable = false;
    } else {
      this.isBtn1Disable = false;
      this.isBtn2Disable = false;
      this.isBtn3Disable = true;
    }
  }

  openCipher(): void {
    this.someCipherIsOpen = true;
  }
}
