import { Component, OnDestroy, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { ValidateInputByLanguage } from 'src/app/shared/validators/inputValidator';
import { MorseCipherService } from '../ciphers-services/morse-cipher.service';
import { InputComponent } from '../input/input.component';
import { OutputComponent } from '../output/output.component';

@Component({
  selector: 'app-morse-cipher-form',
  templateUrl: './morse-cipher-form.component.html',
  styleUrls: ['./morse-cipher-form.component.scss'],
})
export class MorseCipherFormComponent implements OnDestroy {
  public displayAlphabet: boolean;

  public alphabet: Map<string, string>;

  public morseForm: FormGroup;

  private languageSubscription: Subscription = new Subscription();

  constructor(
    private translate: TranslateService,
    private cipherService: MorseCipherService
  ) {
    this.displayAlphabet = false;
    this.morseForm = new FormGroup({
      inputValue: new FormControl(null, ValidateInputByLanguage),
      outputValue: new FormControl(null, ValidateInputByLanguage),
    });
  }

  showAlphabet(): void {
    this.alphabet = this.cipherService.getAlphabet();
    this.displayAlphabet = !this.displayAlphabet;
  }

  encrypt(): void {
    this.morseForm.patchValue({
      outputValue: this.cipherService.encrypt(
        this.morseForm.controls['inputValue'].value
      ),
    });
  }

  descrypt(): void {
    this.morseForm.patchValue({
      inputValue: this.cipherService.descrypt(
        this.morseForm.controls['outputValue'].value
      ),
    });
  }

  ngOnDestroy(): void {
    this.languageSubscription.unsubscribe();
  }
}
