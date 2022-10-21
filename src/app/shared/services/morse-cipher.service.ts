import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MorseCipherService {
  public alphabet: Map<String, String>;

  constructor(private httpService: HttpClient) {
    this.alphabet = new Map(
      Object.entries(this.httpService.get('../../assets/morse.json'))
    );
  }
}
