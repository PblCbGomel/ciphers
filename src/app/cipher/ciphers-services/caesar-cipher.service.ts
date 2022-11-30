import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CipherServices } from './cipher.interface';

@Injectable({
  providedIn: 'root',
})
export class CaesarCipherService implements CipherServices {
  constructor(private translateService: TranslateService) {}

  encrypt(str: string, num: number): string {
    if (this.translateService.currentLang === 'ru-RU') {
      return str
        .toLocaleUpperCase()
        .split('')
        .map((letter) => {
          if (letter === 'Ё') {
            letter = 'Е';
          }
          let charCode: number = letter.charCodeAt(0);

          if (charCode >= 1040 && charCode <= 1071) {
            charCode += num;
            if (charCode > 1071) {
              charCode -= 32;
            }
          }

          return String.fromCharCode(charCode);
        })
        .join('');
    }

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
    if (this.translateService.currentLang === 'ru-RU') {
      if (this.translateService.currentLang === 'ru-RU') {
        return str
          .toLocaleUpperCase()
          .split('')
          .map((letter) => {
            if (letter === 'Ё') {
              letter = 'Е';
            }
            let charCode: number = letter.charCodeAt(0);

            if (charCode >= 1040 && charCode <= 1071) {
              charCode -= num;
              if (charCode > 1071) {
                charCode += 26;
              }
            }

            return String.fromCharCode(charCode);
          })
          .join('');
      }
    }

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
