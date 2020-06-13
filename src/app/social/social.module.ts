import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import { LoginComponent } from './component/login/login.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SocialLoginModule, AuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider, LinkedInLoginProvider} from 'angularx-social-login';
const config = new AuthServiceConfig([
    {
      id: GoogleLoginProvider.PROVIDER_ID,
      provider: new GoogleLoginProvider('289091279746-v4b52r6spmv2vm7ldgnjp79uaoe9is9r.apps.googleusercontent.com')
    },
    {
      id: FacebookLoginProvider.PROVIDER_ID,
      provider: new FacebookLoginProvider('678109696374937')
    },
    // {
    //   id: LinkedInLoginProvider.PROVIDER_ID,
    //   provider: new LinkedInLoginProvider("LinkedIn-client-Id", false, 'en_US')
    // }
]);

export function provideConfig() {
    return config;
}
  
const routes: Routes = [
    {path: '', component: LoginComponent, pathMatch: 'full'}
];

@NgModule({
    declarations: [
        LoginComponent,
        RegistrationComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        SharedModule,
        SocialLoginModule,
        ReactiveFormsModule
    ],
    providers: [{
        provide: AuthServiceConfig,
        useFactory: provideConfig
    }],
})

export class SocialModule {
}
