import { Component, OnInit } from '@angular/core';
import { ThemeChangeService } from './shared/services/change-theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ciphers';

  constructor(private themeService: ThemeChangeService) {}

  ngOnInit(): void {
    if (localStorage.getItem('theme') === 'dark') {
      this.themeService.changeToDark();
    }
  }
}
