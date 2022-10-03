import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  public items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Language',
        items: [
          { label: 'Eng', icon: 'pi pi-sort-alt' },
          { label: 'Ru', icon: 'pi pi-sort-alt' },
        ],
      },
      {
        label: 'Theme',
        items: [
          { label: 'Dark', icon: 'pi pi-sort-alt' },
          { label: 'Light', icon: 'pi pi-sort-alt' },
        ],
      },
    ];
  }
}
