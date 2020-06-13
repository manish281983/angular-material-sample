import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import { LoginComponent } from './component/login/login.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
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
        ReactiveFormsModule
    ],
    providers: [
    ],
})

export class SocialModule {
}
