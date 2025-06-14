import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ScrollService {
    private activeSection = new BehaviorSubject<string>('about');
    activeSection$ = this.activeSection.asObservable();

    constructor() {
        this.setupScrollListener();
    }

    private setupScrollListener() {
        window.addEventListener('scroll', () => {
            const sections = ['about', 'skills', 'projects', 'contact'];
            const scrollPosition = window.scrollY + window.innerHeight / 3;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        this.activeSection.next(section);
                        break;
                    }
                }
            }
        });
    }
} 