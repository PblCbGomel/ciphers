import { Injectable } from '@angular/core';
import { CipherServices } from './cipher.interface';

@Injectable({
  providedIn: 'root',
})
export class CaesarCipherService implements CipherServices {
  encrypt(str: string, num: number): string {
    return str
      .toLocaleUpperCase()
      .split('')
      .map((letter) => {
        let charCode: number = letter.charCodeAt(0);

        if (charCode >= 65 && charCode <= 90) {
          charCode += num;
          if (charCode > 90) {
            charCode -= 26;
          }
        }

        return String.fromCharCode(charCode);
      })
      .join('');
  }

  descrypt(str: string, num: number): string {
    return str
      .toLocaleUpperCase()
      .split('')
      .map((letter) => {
        let charCode: number = letter.charCodeAt(0);

        if (charCode >= 65 && charCode <= 90) {
          charCode -= num;
          if (charCode < 65) {
            charCode += 26;
          }
        }

        return String.fromCharCode(charCode);
      })
      .join('');
  }
}
