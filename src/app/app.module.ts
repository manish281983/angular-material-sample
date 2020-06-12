import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header/component/header-component.component';
import { APP_CONFIG } from './core/data-config-key';
import { environment } from 'src/environments/environment';
import { StoreModule } from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    BrowserAnimationsModule
  ],
  providers: [
    { provide: APP_CONFIG, useValue: environment.APP_CONFIG }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
