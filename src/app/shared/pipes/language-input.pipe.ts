import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'changeByLanguage',
})
export class ChangeByLanguagePipe implements PipeTransform {
  private engAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  private ruAlphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя'.split('');

  constructor(private languageService: TranslateService) {}

  transform(value: string): string {
    let result = '';

    if (this.languageService.currentLang === 'en-US') {
      result = value
        .split('')
        .filter((letter) => !this.ruAlphabet.includes(letter.toLowerCase()))
        .map((letter) => letter.toLocaleUpperCase())
        .join('');
    } else {
      result = value
        .split('')
        .filter((letter) => !this.engAlphabet.includes(letter.toLowerCase()))
        .map((letter) => letter.toLocaleUpperCase())
        .join('');
    }

    return result;
  }
}
