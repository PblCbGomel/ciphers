import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caesar-cipher-form',
  templateUrl: './caesar-cipher-form.component.html',
  styleUrls: ['./caesar-cipher-form.component.scss'],
})
export class CaesarCipherFormComponent implements OnInit {
  public shiftValue: number;

  constructor() {
    this.shiftValue = 1;
  }

  ngOnInit(): void {}
}
