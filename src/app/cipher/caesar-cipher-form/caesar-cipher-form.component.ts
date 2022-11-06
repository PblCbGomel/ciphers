import { Component, ViewChild } from '@angular/core';
import { CaesarCipherService } from '../ciphers-services/caesar-cipher.service';
import { InputComponent } from '../input/input.component';
import { OutputComponent } from '../output/output.component';

@Component({
  selector: 'app-caesar-cipher-form',
  templateUrl: './caesar-cipher-form.component.html',
  styleUrls: ['./caesar-cipher-form.component.scss'],
})
export class CaesarCipherFormComponent {
  @ViewChild('input') private inputComponent: InputComponent;
  @ViewChild('output') private outputComponent: OutputComponent;

  public shiftValue: number;

  constructor(private cipherService: CaesarCipherService) {
    this.shiftValue = 1;
  }

  encrypt(): void {
    this.outputComponent.value = this.cipherService.encrypt(
      this.inputComponent.value,
      this.shiftValue
    );
  }

  descrypt(): void {
    this.inputComponent.value = this.cipherService.descrypt(
      this.outputComponent.value,
      this.shiftValue
    );
  }
}
