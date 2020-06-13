import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MustMatch } from './must-match.validator';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  @Input() registrationInfo: any;

  submitted = false;

  registerationProfile = new FormGroup({
    username: new FormControl(),
    email: new FormControl(),
    phoneCode: new FormControl(),
    phone: new FormControl(),
    jobType: new FormControl(),
    password: new FormControl(),
    confirmPassword: new FormControl()  
  });
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerationProfile = this.formBuilder.group({
      username: ['',  Validators.required],
      email: ['',  [Validators.required, Validators.email]],
      phoneCode: '+1',
      phone: ['', Validators.required],
      jobType: '',
      password:['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }

  
  get f() { return this.registerationProfile.controls; }


  onRegisterClick() {
    this.submitted = true;
    if (this.registerationProfile.invalid) {
      return;
    }
   
    alert('Registration successful')
    console.log(this.registerationProfile.value)
  }
  goToLogin() {
    this.registrationInfo.isLogin = true;
  }


}
