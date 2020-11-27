import {AbstractControl, ValidationErrors} from '@angular/forms';


export function asyncUrlValidator(control: AbstractControl): Promise<ValidationErrors | boolean | null> {
  const urlRegex = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;
  const value = control.value;
  const result = urlRegex.test(value);

  return new Promise((resolve) => {
    setTimeout(() => {
    if (result) {
      resolve(null);
    } else {
      resolve({urlNotAllowed: {value}});
    }
    }, 10000);
  });
}

export  function emailValidator(control: AbstractControl): { [key: string]: any } {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  const value = control.value;
  const result = emailRegex.test(value);

  if (result) {
    return null;
  } else {
    return {
      emailValidator: {value}
    };
  }
}


export function rangeValidator(minValue: number, maxValue: number): any {
  return (control: AbstractControl): { [key: string]: any } => {
    const value = +control.value;

    if (isNaN(value)) {
      return { rangeValidator: {value} };
    } else if (value < minValue || value > maxValue) {
      return { rangeValidator: {value} };
    } else {
      return null;
    }
  };
}
