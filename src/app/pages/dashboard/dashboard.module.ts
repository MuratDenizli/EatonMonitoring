import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
import { NgaModule } from 'src/app/@core/nga.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgaModule.forRoot(),
  ],
  entryComponents: [],
  declarations: [],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class DashboardModule {}
