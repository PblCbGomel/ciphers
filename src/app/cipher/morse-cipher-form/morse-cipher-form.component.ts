import { Component, OnDestroy, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { MorseCipherService } from '../ciphers-services/morse-cipher.service';
import { InputComponent } from '../input/input.component';
import { OutputComponent } from '../output/output.component';

@Component({
  selector: 'app-morse-cipher-form',
  templateUrl: './morse-cipher-form.component.html',
  styleUrls: ['./morse-cipher-form.component.scss'],
})
export class MorseCipherFormComponent implements OnDestroy {
  @ViewChild('input') private inputComponent: InputComponent;
  @ViewChild('output') private outputComponent: OutputComponent;

  public displayAlphabet: boolean;

  public alphabet: Map<string, string>;

  private languageSubscription: Subscription = new Subscription();

  constructor(
    private translate: TranslateService,
    private cipherService: MorseCipherService
  ) {
    this.displayAlphabet = false;
  }

  showAlphabet() {
    this.alphabet = this.cipherService.getAlphabet();
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

  ngOnDestroy(): void {
    this.languageSubscription.unsubscribe();
  }
}
