import { Component, ViewChild } from '@angular/core';
import { TranspositionCipherService } from '../ciphers-services/transposition-cipher.service';
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

  constructor(private cipherService: TranspositionCipherService) {}

  encrypt() {
    this.outputComponent.value = this.cipherService.encrypt(
      this.inputComponent.value
    );
  }

  descrypt() {
    this.inputComponent.value = this.cipherService.descrypt(
      this.outputComponent.value
    );
  }
}
