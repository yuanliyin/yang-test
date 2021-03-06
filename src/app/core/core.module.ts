import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';
import { UserService } from './user.service';

import { Title }  from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    AuthGuardService,
    { provide: 'auth', useClass: AuthService },
    { provide: 'user', useClass: UserService },
    { provide: 'title', useClass: Title },
  ]
})
export class CoreModule {

  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }

}
