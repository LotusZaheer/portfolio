import { Component, OnInit, OnDestroy } from '@angular/core';
import { animateNameRewrite } from './../functions/utils';
import { ScrollService } from '../services/scroll.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit, OnDestroy {
  mobileMenuOpen = false;
  activeSection = 'about';
  private subscription: Subscription;

  constructor(private scrollService: ScrollService) {
    this.subscription = this.scrollService.activeSection$.subscribe(
      section => this.activeSection = section
    );
  }

  toggleMobileMenu() {
    console.log('toggleMobileMenu');
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  nameA = 'Andrés Uribe';
  nameB = '@LotusZaheer';
  displayName = '';
  private currentName = '';
  private targetName = '';
  private blinkChar = '■';

  ngOnInit() {
    this.currentName = this.nameA;
    this.targetName = this.nameB;
    this.runAnimation();
  }

  /////////////////////////////////////////////////////

  runAnimation() {
    animateNameRewrite(
      this.currentName,
      this.targetName,
      this.blinkChar,
      text => this.displayName = text,
      () => {
        this.currentName = this.targetName;
        this.targetName = this.currentName === this.nameA ? this.nameB : this.nameA;
        setTimeout(() => this.runAnimation(), 5000);
      }
    );
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
