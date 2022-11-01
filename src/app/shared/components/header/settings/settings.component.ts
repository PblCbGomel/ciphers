import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ThemeChangeService } from 'src/app/shared/services/change-theme.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  public items: MenuItem[];

  constructor(private themeService: ThemeChangeService) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Language',
        icon: 'pi pi-fw pi-language',
        items: [
          {
            label: 'Eng',
            icon: 'pi pi-fw pi-arrow-right-arrow-left',
            command: (): void => {},
          },
          {
            label: 'Ru',
            icon: 'pi pi-fw pi-arrow-right-arrow-left',
            command: (): void => {},
          },
        ],
      },
      {
        label: 'Theme',
        icon: 'pi pi-fw pi-envelope',
        items: [
          {
            label: 'Light',
            icon: 'pi pi-arrow-right-arrow-left',
            command: (): void => {
              this.themeService.changeToLight();
            },
          },
          {
            label: 'Dark',
            icon: 'pi pi-arrow-right-arrow-left',
            command: (): void => {
              this.themeService.changeToDark();
            },
          },
        ],
      },
      {
        label: 'Close',
        icon: 'pi pi-fw pi-power-off',
        routerLink: [''],
      },
    ];
  }
}
