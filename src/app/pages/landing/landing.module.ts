import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
import { NgaModule } from 'src/app/@core/nga.module';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../auth/auth/login/login.component';
import { AuthComponent } from '../auth/auth/auth.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgaModule.forRoot(),
  ],
  entryComponents: [],
  declarations: [LoginComponent, AuthComponent],
  exports: [LoginComponent, AuthComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AuthModule {}
