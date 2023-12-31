import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';

/** main content sections */
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { PortfolioSectionComponent } from './components/portfolio-section/portfolio-section.component';
import { ProjectsSectionComponent } from './components/projects-section/projects-section.component';
import { ResourcesSectionComponent } from './components/resources-section/resources-section.component';
import { TerminalSectionComponent } from './components/terminal-section/terminal-section.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent,
    AboutSectionComponent,
    ContactSectionComponent,
    PortfolioSectionComponent,
    ProjectsSectionComponent,
    ResourcesSectionComponent,
    TerminalSectionComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
