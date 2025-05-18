import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { projects } from '../../data/projects.data';
import { languageIcons, technologyIcons, TechIcon } from '../../data/tech-icons.data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  languages: string[] = [];
  technologies: string[] = [];
  languageIcons = languageIcons;
  technologyIcons = technologyIcons;

  ngOnInit() {
    this.updateTechStack();
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
}
