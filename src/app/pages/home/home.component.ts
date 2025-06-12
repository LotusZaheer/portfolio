import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { projects } from '../../data/projects.data';
import { languageIcons, markupStyleIcons, libraryIcons, frameworkIcons, platformIcons, apiIcons, TechIcon } from '../../data/tech-icons.data';
import { socialNetworks } from '../../data/social-networks.data';
import { animateNameRewrite } from './../../shared/functions/utils';
import { ProjectsComponent } from '../projects/projects.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProjectsComponent, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  projects: any[] = projects;

  languages: string[] = [];
  markupStyles: string[] = [];
  frameworks: string[] = [];
  libraries: string[] = [];
  platforms: string[] = [];
  apis: string[] = [];

  languageIcons = languageIcons;
  markupStyleIcons = markupStyleIcons;
  frameworkIcons = frameworkIcons;
  libraryIcons = libraryIcons;
  platformIcons = platformIcons;
  apiIcons = apiIcons;

  socialNetworks = socialNetworks;


  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
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
    this.updateTechStack();

    this.currentName = this.nameA;
    this.targetName = this.nameB;
    this.displayName = this.currentName;
    this.runAnimation();
  }

  private updateTechStack() {
    const allLanguages = new Set<string>();
    const allMarkup = new Set<string>();
    const allFrameworks = new Set<string>();
    const allLibraries = new Set<string>();
    const allPlatforms = new Set<string>();
    const allApis = new Set<string>();

    projects.forEach(project => {
      project.languages?.forEach(l => allLanguages.add(l));
      project.markupStyles?.forEach(m => allMarkup.add(m));
      project.frameworks?.forEach(f => allFrameworks.add(f));
      project.libraries?.forEach(lib => allLibraries.add(lib));
      project.platforms?.forEach(p => allPlatforms.add(p));
      project.apis?.forEach(a => allApis.add(a));
    });

    this.languages = Array.from(allLanguages).sort();
    this.markupStyles = Array.from(allMarkup).sort();
    this.frameworks = Array.from(allFrameworks).sort();
    this.libraries = Array.from(allLibraries).sort();
    this.platforms = Array.from(allPlatforms).sort();
    this.apis = Array.from(allApis).sort();
  }


  getIcon(name: string, icons: TechIcon[]): string | null {
    const icon = icons.find(icon => icon.name === name);
    return icon ? icon.iconPath : null;
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  /////////////////////////////////////////////////////

  nameA = '@LotusZaheer';
  nameB = 'Andrés Uribe';
  displayName = '';
  private currentName = '';
  private targetName = '';
  private blinkChar = '■';


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

  onSubmit() {
    if (this.contactForm.valid) {
      // Aquí puedes implementar la lógica para enviar el correo
      console.log(this.contactForm.value);
      // Por ejemplo, podrías llamar a un servicio que maneje el envío de correos
      // this.emailService.sendEmail(this.contactForm.value);

      //Revisar https://github.com/lipis/flag-icons/tree/main/flags/4x3
      //https://flagicons.lipis.dev/
      //https://github.com/HatScripts/circle-flags
    }
  }

}
