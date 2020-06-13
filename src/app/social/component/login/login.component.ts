import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  registrationInfo: any;

  submitted = false;

  loginProfile = new FormGroup({
    userName: new FormControl(),
    password: new FormControl(),
    rememberMe: new FormControl()
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginProfile = this.formBuilder.group({
      userName: ['',  Validators.required],
      password: ['', Validators.required],
      rememberMe: [false]
  });
    this.registrationInfo = {
      isLogin: true
    };
  }

  get f() { return this.loginProfile.controls; }

  onLoginClick() {
    this.submitted = true;
    if (this.loginProfile.invalid) {
      return;
    }
    alert(JSON.stringify(this.loginProfile.value));
    console.log(this.loginProfile.value);
  }

}
