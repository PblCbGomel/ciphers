import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ValidateInputByLanguage } from 'src/app/shared/validators/inputValidator';
import { CaesarCipherService } from '../ciphers-services/caesar-cipher.service';

@Component({
  selector: 'app-caesar-cipher-form',
  templateUrl: './caesar-cipher-form.component.html',
  styleUrls: ['./caesar-cipher-form.component.scss'],
})
export class CaesarCipherFormComponent {
  public caesarForm: FormGroup;

  public shiftValue: number;

  constructor(private cipherService: CaesarCipherService) {
    this.shiftValue = 1;
    this.caesarForm = new FormGroup({
      inputValue: new FormControl(null, ValidateInputByLanguage),
      outputValue: new FormControl(null, ValidateInputByLanguage),
    });
  }

  encrypt(): void {
    this.caesarForm.patchValue({
      outputValue: this.cipherService.encrypt(
        this.caesarForm.controls['inputValue'].value,
        this.shiftValue
      ),
    });
  }

  descrypt(): void {
    this.caesarForm.patchValue({
      inputValue: this.cipherService.descrypt(
        this.caesarForm.controls['outputValue'].value,
        this.shiftValue
      ),
    });
  }
}
