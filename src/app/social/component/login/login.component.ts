import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { AuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider, LinkedInLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import {Login} from './login.module';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public uName;
  public uPassword;
  public loginName;
  public validate:boolean=false;
  private user: SocialUser;
  

  registrationInfo: any;

  loginSucess: boolean;
  submitted = false;

  loginProfile = new FormGroup({
    userName: new FormControl(),
    password: new FormControl(),
    rememberMe: new FormControl()
  });

  loginInfo: Login;

  constructor(private formBuilder: FormBuilder,
    private titleService: Title,
    private authService: AuthService) { 
      this.titleService.setTitle('Social Login');
 
    }

  ngOnInit() {
    this.loginProfile = this.formBuilder.group({
      userName: ['',  Validators.required],
      password: ['', Validators.required],
      rememberMe: [false]
    });

    this.loginInfo = {
      name: '',
      email: '',
      photoUrl: '',
      password: ''
    }
    this.loginSucess = false;
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
    this.loginInfo.name = this.loginProfile.get('userName').value;
    this.loginInfo.password = this.loginProfile.get('password').value;
    this.loginSucess = true;
  }

 
  
googleLoginClick(){
  const b=this.authService.signOut(false);
  const a= this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
   this.authService.authState.subscribe((user) => {
    this.user = user;
    console.log("user:::",this.user);
    if(this.user){
      this.loginProfile.patchValue({
        userName: this.user.email
      });
      this.loginInfo.email= this.user.email;
      this.loginInfo.photoUrl = this.user.photoUrl;
      this.loginInfo.name = this.user.name;
      this.loginSucess = true;
      
    }
    // this.loggedIn = (user != null);
  });
}

facebookLoginClick(){
    
   var a= this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);

   console.log("Facebook",a);
   
   this.authService.authState.subscribe((user) => {
    this.user = user;
    console.log("user:::",this.user);
    
  });
  var b=this.authService.signOut(false); 
  console.log(b);
    
  }
 
}
