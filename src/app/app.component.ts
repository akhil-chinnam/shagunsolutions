import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { SolutionsComponent } from './components/solutions/solutions.component';
import { WhyChooseComponent } from './components/why-choose/why-choose.component';
import { TechStackComponent } from './components/tech-stack/tech-stack.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    SolutionsComponent,
    WhyChooseComponent,
    TechStackComponent,
    ContactComponent,
    FooterComponent
  ],
  template: `
    <app-navbar></app-navbar>
    <main>
      <app-hero></app-hero>
      <app-about></app-about>
      <app-services></app-services>
      <app-solutions></app-solutions>
      <app-why-choose></app-why-choose>
      <app-tech-stack></app-tech-stack>
      <app-contact></app-contact>
    </main>
    <app-footer></app-footer>
  `,
  styles: [`
    main { overflow: hidden; }
  `]
})
export class AppComponent implements OnInit {
  ngOnInit() {
    this.initScrollReveal();
  }

  @HostListener('window:scroll')
  onScroll() {
    this.checkReveal();
  }

  private initScrollReveal() {
    setTimeout(() => this.checkReveal(), 100);
  }

  private checkReveal() {
    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 80) {
        el.classList.add('visible');
      }
    });
  }
}
