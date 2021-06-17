import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthService } from './services/services/auth.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpConfigInterceptor } from './services/interceptor/httpconfig.interceptor';
import { AnalyticService } from './services/services/analytic.service';
import { LoaderService } from './services/services/loader.service';
import { AuthGuard } from '../pages/auth/auth.guard';
import { BoxComponent } from './components/box/box.component';

const NGA_COMPONENTS = [FooterComponent, HeaderComponent, BoxComponent];

const NGA_SERVICES = [AuthService, AnalyticService, LoaderService];

@NgModule({
  declarations: [...NGA_COMPONENTS],
  entryComponents: [],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [...NGA_COMPONENTS],
  providers: [
    ...NGA_SERVICES,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpConfigInterceptor,
      multi: true,
    },
  ],
})
export class NgaModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: NgaModule,
      providers: [],
    } as ModuleWithProviders<any>;
  }
}
