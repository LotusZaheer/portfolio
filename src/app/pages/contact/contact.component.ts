import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { socialNetworks } from '../../data/social-networks.data';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        TranslateModule
    ],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
    socialNetworks = socialNetworks;
    contactForm: FormGroup;

    constructor(private fb: FormBuilder, private translate: TranslateService) {
        this.contactForm = this.fb.group({
            nombre: ['', [Validators.required, Validators.minLength(2)]],
            apellido: ['', [Validators.required, Validators.minLength(2)]],
            empresa: [''],
            email: ['', [Validators.required, Validators.email]],
            telefono: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
            mensaje: ['', [Validators.required, Validators.maxLength(500)]],
            aceptoPolitica: [false, Validators.requiredTrue]
        });
    }

    ngOnInit() {
        // Establecer el idioma por defecto
        this.translate.setDefaultLang('es');
        // Usar el idioma del navegador si está disponible, de lo contrario usar español
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang?.match(/es|en/) ? browserLang : 'es');
    }

    onSubmit() {
        if (this.contactForm.valid) {
            console.log(this.contactForm.value);
        }
    }
} 