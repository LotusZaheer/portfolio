import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { animateNameRewrite } from '../../shared/functions/utils';

@Component({
    selector: 'app-about',
    standalone: true,
    imports: [
        CommonModule,
        TranslateModule
    ],
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
    nameA = '@LotusZaheer';
    nameB = 'Andrés Uribe';
    displayName = ''; //intercambiar por home.name
    private currentName = '';
    private targetName = '';
    private blinkChar = '■';

    constructor() { }

    ngOnInit() {
        this.currentName = this.nameA;
        this.targetName = this.nameB;
        this.displayName = this.currentName;
        this.runAnimation();
    }

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

    scrollToSection(sectionId: string) {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
} 