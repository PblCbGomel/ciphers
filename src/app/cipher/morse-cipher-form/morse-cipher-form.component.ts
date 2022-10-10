import { Component, ViewChild } from '@angular/core';
import { MorseCipherService } from '../ciphers-services/morse-cipher.service';
import { InputComponent } from '../input/input.component';
import { OutputComponent } from '../output/output.component';

@Component({
  selector: 'app-morse-cipher-form',
  templateUrl: './morse-cipher-form.component.html',
  styleUrls: ['./morse-cipher-form.component.scss'],
})
export class MorseCipherFormComponent {
  constructor(private cipherService: MorseCipherService) {}

  @ViewChild('input') private inputComponent: InputComponent;
  @ViewChild('output') private outputComponent: OutputComponent;

  encrypt() {}

  descrypt() {}
}
