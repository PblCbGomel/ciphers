import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CipherServices } from './cipher.interface';

@Injectable({
  providedIn: 'root',
})
export class MorseCipherService implements CipherServices {
  private alphabet: Map<string, string>;

  private reverseAlphabet: Map<string, string>;

  private alphabetRu: Map<string, string>;

  private reverseAlphabetRu: Map<string, string>;

  constructor(private translateService: TranslateService) {
    this.alphabet = new Map([
      ['A', '.-'],
      ['B', '-...'],
      ['C', '-.-.'],
      ['D', '-..'],
      ['E', '.'],
      ['F', '..-.'],
      ['G', '--.'],
      ['H', '....'],
      ['I', '..'],
      ['J', '.---'],
      ['K', '-.-'],
      ['L', '.-..'],
      ['M', '--'],
      ['N', '-.'],
      ['O', '---'],
      ['P', '.--.'],
      ['Q', '--.-'],
      ['R', '.-.'],
      ['S', '...'],
      ['T', '-'],
      ['U', '..-'],
      ['V', '...-'],
      ['W', '.--'],
      ['X', '-..-'],
      ['Y', '-.--'],
      ['Z', '--..'],
      ['0', '-----'],
      ['1', '.----'],
      ['2', '..---'],
      ['3', '...--'],
      ['4', '....-'],
      ['5', '.....'],
      ['6', '-....'],
      ['7', '--...'],
      ['8', '---..'],
      ['9', '----.'],
      ['.', '.-.-.-'],
      [',', '--..--'],
      ['?', '..--..'],
      ['!', '-.-.--'],
      ['-', '-....-'],
      ['/', '-..-.'],
      ['@', '.--.-.'],
      ['(', '-.--.'],
      [')', '-.--.-'],
    ]);

    this.reverseAlphabet = new Map(
      Object.entries(Object.fromEntries(this.alphabet)).map(([key, value]) => [
        value,
        key,
      ])
    );

    this.alphabetRu = new Map([
      ['А', '.-'],
      ['Б', '-...'],
      ['В', '.--'],
      ['Г', '--.'],
      ['Д', '-..'],
      ['Е', '.'],
      ['Ё', '.'],
      ['Ж', '...-'],
      ['З', '--..'],
      ['И', '..'],
      ['Й', '.---'],
      ['К', '-.-'],
      ['Л', '.-..'],
      ['М', '--'],
      ['Н', '-.'],
      ['О', '---'],
      ['П', '.--.'],
      ['К', '-.-'],
      ['Р', '.-.'],
      ['С', '...'],
      ['Т', '-'],
      ['У', '..-'],
      ['Ф', '..-.'],
      ['Х', '....'],
      ['Ц', '-.-.'],
      ['Ч', '---.'],
      ['Ш', '----'],
      ['Щ', '--.-'],
      ['Ъ', '--.--'],
      ['Ы', '-.--'],
      ['Ь', '-..-'],
      ['Э', '..-..'],
      ['Ю', '..--'],
      ['Я', '.-.-'],
      ['0', '-----'],
      ['1', '.----'],
      ['2', '..---'],
      ['3', '...--'],
      ['4', '....-'],
      ['5', '.....'],
      ['6', '-....'],
      ['7', '--...'],
      ['8', '---..'],
      ['9', '----.'],
      ['.', '.-.-.-'],
      [',', '--..--'],
      ['?', '..--..'],
      ['!', '-.-.--'],
      ['-', '-....-'],
      ['/', '-..-.'],
      ['@', '.--.-.'],
      ['(', '-.--.'],
      [')', '-.--.-'],
    ]);

    this.reverseAlphabetRu = new Map(
      Object.entries(Object.fromEntries(this.alphabetRu)).map(
        ([key, value]) => [value, key]
      )
    );
  }

  encrypt(str: string): string {
    if (this.translateService.currentLang === 'en-US') {
      return str
        .split('')
        .map(
          (symbol) =>
            this.alphabet.get(symbol.toLocaleUpperCase()) ||
            symbol.toLocaleUpperCase()
        )
        .join(' ');
    }
    return str
      .split('')
      .map(
        (symbol) =>
          this.alphabetRu.get(symbol.toLocaleUpperCase()) ||
          symbol.toLocaleUpperCase()
      )
      .join(' ');
  }

  descrypt(str: string): string {
    if (this.translateService.currentLang === 'en-US') {
      str = str
        .split(' ')
        .map((symbol) => {
          if (symbol === '') {
            symbol = ' ';
          }

          return (
            this.reverseAlphabet.get(symbol.toLocaleUpperCase()) ||
            symbol.toLocaleUpperCase()
          );
        })
        .join('');
    } else {
      str = str
        .split(' ')
        .map((symbol) => {
          if (symbol === '') {
            symbol = ' ';
          }

          return (
            this.reverseAlphabetRu.get(symbol.toLocaleUpperCase()) ||
            symbol.toLocaleUpperCase()
          );
        })
        .join('');
    }

    while (str.includes('  ')) {
      str = str.replace('  ', ' ');
    }

    return str;
  }

  getAlphabet(): Map<string, string> {
    return this.translateService.currentLang === 'en-US'
      ? this.alphabet
      : this.alphabetRu;
  }
}
