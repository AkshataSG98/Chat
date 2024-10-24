import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent {

  showArchived:boolean=false;
  passwordForm: FormGroup;
  showPasswordPrompt = true;
  constructor(private fb: FormBuilder, private router: Router) {
    this.passwordForm = this.fb.group({
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(/^\d+$/), 
          Validators.minLength(4),
          Validators.maxLength(6)
        ]
      ]
    });
  }

  openPasswordPrompt(): void {
    this.showPasswordPrompt = true;
  }

  onSubmit() {
    if (this.passwordForm.valid) {
      this.showPasswordPrompt = false;
      // this.router.navigate(['/archived']);
      this.showArchived=true;
    }
  }

  addNumber(num: string): void {
    const currentValue = this.passwordForm.controls['password'].value;
    if (currentValue.length < 6) {
      this.passwordForm.controls['password'].setValue(currentValue + num);
    }
  }

  clearPassword(): void {
    this.passwordForm.controls['password'].reset();
    
  }

}
