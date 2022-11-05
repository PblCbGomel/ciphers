import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';
import { ThemeChangeService } from 'src/app/shared/services/change-theme.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit, OnDestroy {
  public items: MenuItem[];

  private languageSubscription: Subscription = new Subscription();

  constructor(
    private translate: TranslateService,
    private themeService: ThemeChangeService
  ) {}

  ngOnInit() {
    this.translate.setDefaultLang(localStorage.getItem('lang') || 'en-US');
    this.translate.use(localStorage.getItem('lang') || 'en-US');

    this.languageSubscription = this.translate.onLangChange.subscribe(() => {
      this.items = this.buildSettingsMenu();
    });
  }

  private buildSettingsMenu(): MenuItem[] {
    return [
      {
        label: this.translate.instant('settings.language.language'),
        icon: 'pi pi-fw pi-language',
        items: [
          {
            label: this.translate.instant('settings.language.eng'),
            icon: 'pi pi-fw pi-arrow-right-arrow-left',
            command: (): void => {
              this.translate.use('en-US');
              localStorage.setItem('lang', 'en-US');
            },
          },
          {
            label: this.translate.instant('settings.language.ru'),
            icon: 'pi pi-fw pi-arrow-right-arrow-left',
            command: (): void => {
              this.translate.use('ru-RU');
              localStorage.setItem('lang', 'ru-RU');
            },
          },
        ],
      },
      {
        label: this.translate.instant('settings.theme.theme'),
        icon: 'pi pi-fw pi-envelope',
        items: [
          {
            label: this.translate.instant('settings.theme.light'),
            icon: 'pi pi-arrow-right-arrow-left',
            command: (): void => {
              this.themeService.changeToLight();
            },
          },
          {
            label: this.translate.instant('settings.theme.dark'),
            icon: 'pi pi-arrow-right-arrow-left',
            command: (): void => {
              this.themeService.changeToDark();
            },
          },
        ],
      },
      {
        label: this.translate.instant('settings.close'),
        icon: 'pi pi-fw pi-power-off',
        routerLink: [''],
      },
    ];
  }

  ngOnDestroy(): void {
    this.languageSubscription.unsubscribe();
  }
}
