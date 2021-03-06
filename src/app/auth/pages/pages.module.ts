import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { ComponentsSharedModule } from 'src/app/shared/components-shared/components-shared.module';
import { ComponentsModule } from '../components/components.module';
import { MaterialModule } from '../../shared/material/material.module';
import { AuthRoutingModule } from '../auth-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    ComponentsSharedModule,
    ComponentsModule,
    MaterialModule,
    AuthRoutingModule,
    AuthRoutingModule,
    FlexLayoutModule,
    FormsModule
  ]
})
export class PagesModule { }
