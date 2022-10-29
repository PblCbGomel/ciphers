import { Injectable } from '@angular/core';
import { CipherServices } from './cipher.interface';

@Injectable({
  providedIn: 'root',
})
export class TranspositionCipherService implements CipherServices {
  constructor() {}

  encrypt(str: string): string {
    return str.split('').reverse().join('');
  }

  descrypt(str: string): string {
    return str.split('').reverse().join('');
  }
}
