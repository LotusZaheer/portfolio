import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ProjectsComponent } from '../projects/projects.component';
import { ContactComponent } from '../contact/contact.component';
import { SkillsComponent } from '../skills/skills.component';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    ProjectsComponent,
    ContactComponent,
    SkillsComponent,
    AboutComponent,
    TranslateModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent { }
