import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {USER_LOGIN_DATA} from "../../shared/constants/user-login-data/user-login-data";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  public loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.getLoginForm();
  }

  public loginUser(): void {
    localStorage.setItem(USER_LOGIN_DATA, JSON.stringify(this.loginForm.value));
    this.router.navigate(['items']);
  }

  private getLoginForm(): FormGroup {
    return this.fb.group({
      userEmail: ['', [Validators.required, Validators.email]],
      userPassword: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

}
