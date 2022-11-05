import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeChangeService {
  changeToLight(): void {
    let themeLink = document.getElementById('app-theme') as HTMLLinkElement;
    if (themeLink) {
      themeLink.href = 'light-theme.css';
      localStorage.setItem('theme', 'light');
    }
  }

  changeToDark(): void {
    let themeLink = document.getElementById('app-theme') as HTMLLinkElement;
    if (themeLink) {
      themeLink.href = 'dark-theme.css';
      localStorage.setItem('theme', 'dark');
    }
  }
}
