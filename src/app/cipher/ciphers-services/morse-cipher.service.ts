import { Injectable } from '@angular/core';
import { CipherServices } from './cipher.interface';

@Injectable({
  providedIn: 'root',
})
export class MorseCipherService implements CipherServices {
  private alphabet: Map<string, string>;
  private reverseAlphabet: Map<string, string>;

  constructor() {
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
    ]);

    this.reverseAlphabet = new Map(
      Object.entries(Object.fromEntries(this.alphabet)).map(([key, value]) => [
        value,
        key,
      ])
    );
  }

  encrypt(str: string): string {
    return str
      .split('')
      .map(
        (symbol) =>
          this.alphabet.get(symbol.toLocaleUpperCase()) ||
          symbol.toLocaleUpperCase()
      )
      .join(' ');
  }

  descrypt(str: string): string {
    console.log(this.reverseAlphabet);
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

    while (str.includes('  ')) {
      str = str.replace('  ', ' ');
    }

    return str;
  }

  getAlphabet() {
    return this.alphabet;
  }
}
