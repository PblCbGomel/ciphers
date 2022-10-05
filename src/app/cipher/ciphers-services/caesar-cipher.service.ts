import { Injectable } from '@angular/core';
import { CipherServices } from './cipher.interface';

@Injectable({
  providedIn: 'root',
})
export class CaesarCipherService implements CipherServices {
  public number: Number;

  constructor() {
    this.number = 1;
  }

  encrypt(str: String): String {
    return '';
  }

  descrypt(str: String): String {
    return '';
  }
}
