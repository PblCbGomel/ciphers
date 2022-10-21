import { Component, Output, ViewChild } from '@angular/core';
import { MorseCipherService } from '../ciphers-services/morse-cipher.service';
import { InputComponent } from '../input/input.component';
import { OutputComponent } from '../output/output.component';

@Component({
  selector: 'app-morse-cipher-form',
  templateUrl: './morse-cipher-form.component.html',
  styleUrls: ['./morse-cipher-form.component.scss'],
})
export class MorseCipherFormComponent {
  @ViewChild('input') private inputComponent: InputComponent;
  @ViewChild('output') private outputComponent: OutputComponent;

  public displayAlphabet: boolean;

  public alphabet: Map<string, string>;

  constructor(private cipherService: MorseCipherService) {
    this.displayAlphabet = false;
    this.alphabet = cipherService.getAlphabet();
  }

  showAlphabet() {
    this.displayAlphabet = !this.displayAlphabet;
  }

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
