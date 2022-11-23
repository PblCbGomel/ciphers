import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ValidateInputByLanguage } from 'src/app/shared/validators/inputValidator';
import { TranspositionCipherService } from '../ciphers-services/transposition-cipher.service';

@Component({
  selector: 'app-transposition-cipher-form',
  templateUrl: './transposition-cipher-form.component.html',
  styleUrls: ['./transposition-cipher-form.component.scss'],
})
export class TranspositionCipherFormComponent {
  public transpositionForm: FormGroup;

  constructor(private cipherService: TranspositionCipherService) {
    this.transpositionForm = new FormGroup({
      inputValue: new FormControl(null, ValidateInputByLanguage),
      outputValue: new FormControl(null, ValidateInputByLanguage),
    });
  }

  encrypt(): void {
    this.transpositionForm.patchValue({
      outputValue: this.cipherService.encrypt(
        this.transpositionForm.controls['inputValue'].value
      ),
    });
  }

  descrypt(): void {
    this.transpositionForm.patchValue({
      inputValue: this.cipherService.descrypt(
        this.transpositionForm.controls['outputValue'].value
      ),
    });
  }
}
