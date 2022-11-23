import { AbstractControl } from '@angular/forms';

export function ValidateInputByLanguage(control: AbstractControl) {
  const value = control.value;
  console.log(value);
  if (localStorage.getItem('lang') === 'en-US') {
    return !/^[A-Za-z0-9 .,?!-/@()]*$/.test(value)
      ? { inputValidator: true }
      : null;
  } else if (localStorage.getItem('lang') === 'ru-RU') {
    return !/^[А-ЯЁа-яё0-9 .,?!-/@()]*$/.test(value)
      ? { inputValidator: true }
      : null;
  }
  return null;
}
