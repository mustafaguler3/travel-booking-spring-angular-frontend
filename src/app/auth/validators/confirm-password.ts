import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function confirmPasswordValidator(controlName: string, matchingControlName: string): ValidatorFn {
  return (formGroup: AbstractControl): ValidationErrors | null => {
    const control = formGroup.get(controlName);
    const matchingControl = formGroup.get(matchingControlName);

    if (!control || !matchingControl) {
      return null;
    }

    if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
      return null;
    }

    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }

    return null;
  };
}


export function securityCodeValidator(control: FormControl) {
  const isValid = /^\d{3}$/.test(control.value); 
  return isValid ? null : { invalidSecurityCode: true };
}


export function expiryDateValidator(control: FormControl) {
  const isValid = /^(0[1-9]|1[0-2])\/([0-9]{2})$/.test(control.value); // MM/YY format
  return isValid ? null : { invalidExpiryDate: true };
}

export function validateCardNumber(control: AbstractControl): ValidationErrors | null {
  const value = control.value;
  if (!value || value.length < 13 || value.length > 16) {
      return { invalidCardNumber: true };
  }
  return null;
}