import { Injectable } from '@angular/core';
import { CipherServices } from './cipher.interface';

@Injectable({
  providedIn: 'root',
})
export class TranspositionCipherService implements CipherServices {
  constructor() {}

  encrypt(str: String): String {
    return '';
  }

  descrypt(str: String): String {
    return '';
  }
}
