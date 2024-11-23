import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { FooterMinimalComponent } from './layout/footer-minimal/footer-minimal.component';
import { LogoComponent } from './layout/logo/logo.component';
import { LogoMinimalComponent } from './layout/logo-minimal/logo-minimal.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    FooterMinimalComponent,
    LogoComponent,
    LogoMinimalComponent,
  ],
  exports: [HeaderComponent, FooterComponent],
  imports: [CommonModule, ComponentsRoutingModule],
})
export class ComponentsModule {}
