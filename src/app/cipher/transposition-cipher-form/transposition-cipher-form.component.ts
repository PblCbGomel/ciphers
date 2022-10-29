import { Component, ViewChild } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { OutputComponent } from '../output/output.component';

@Component({
  selector: 'app-transposition-cipher-form',
  templateUrl: './transposition-cipher-form.component.html',
  styleUrls: ['./transposition-cipher-form.component.scss'],
})
export class TranspositionCipherFormComponent {
  @ViewChild('input') private inputComponent: InputComponent;
  @ViewChild('output') private outputComponent: OutputComponent;

  constructor() {}

  encrypt() {}

  descrypt() {}
}
