import { Injectable } from '@angular/core';
import { CipherServices } from './cipher.interface';

@Injectable({
  providedIn: 'root',
})
export class MorseCipherService implements CipherServices {
  public alphabet: Map<String, String>;

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
  }

  encrypt(str: String): String {
    return '';
  }

  descrypt(str: String): String {
    return '';
  }
}
