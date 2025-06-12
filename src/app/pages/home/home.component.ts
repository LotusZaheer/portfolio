import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { projects } from '../../data/projects.data';
import { languageIcons, technologyIcons, TechIcon } from '../../data/tech-icons.data';
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
  technologies: string[] = [];
  languageIcons = languageIcons;
  technologyIcons = technologyIcons;
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
    const allTechnologies = new Set<string>();

    projects.forEach(project => {
      project.languages.forEach(lang => allLanguages.add(lang));
      project.technologies.forEach(tech => allTechnologies.add(tech));
    });

    this.languages = Array.from(allLanguages).sort();
    this.technologies = Array.from(allTechnologies).sort();
  }

  getIcon(name: string, icons: TechIcon[]): string | null {
    const icon = icons.find(icon => icon.name === name);
    return icon ? icon.iconPath : null;
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
