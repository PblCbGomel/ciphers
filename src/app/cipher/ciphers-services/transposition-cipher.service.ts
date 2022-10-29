import { Injectable } from '@angular/core';
import { CipherServices } from './cipher.interface';

@Injectable({
  providedIn: 'root',
})
export class TranspositionCipherService implements CipherServices {
  constructor() {}

  encrypt(str: string, num: number): string {
    return '';
  }

  descrypt(str: string, num: number): string {
    return '';
  }
}
