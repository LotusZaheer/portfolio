import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { animateNameRewrite } from './../functions/utils';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  mobileMenuOpen = false;

  toggleMobileMenu() {
    console.log('toggleMobileMenu');
    this.mobileMenuOpen = !this.mobileMenuOpen;
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
    this.displayName = this.currentName;
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

}
