import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.getForm();
    this.loginForm.valueChanges.subscribe(item => console.log(this.loginForm.get('userPassword')));
  }

  private getForm(): FormGroup {
    return this.fb.group({
      userEmail: ['', [Validators.required, Validators.email]],
      userPassword: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  public onSubmit(): void {
    console.warn(this.loginForm.value);
  }

}
