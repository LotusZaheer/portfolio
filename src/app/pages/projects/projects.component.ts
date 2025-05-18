import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  languages: string[];
  role: string;
  images: string[];
  liveUrl?: string;
  liveName?: string;
  repoUrl?: string;
  repoName?: string;
  featured: boolean;
  currentImageIndex: number;
  progress: number;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, OnDestroy {
  private carouselIntervals: { [key: number]: any } = {};
  private progressIntervals: { [key: number]: any } = {};
  readonly CAROUSEL_INTERVAL = 3000; // 3 segundos
  readonly PROGRESS_INTERVAL = 30; // Actualizar cada 30ms para una animación suave

  // Colores de fondo alternados para cuando no hay imágenes
  readonly fallbackColors = [
    'linear-gradient(135deg, #004466 0%, #00778A 100%)',
    'linear-gradient(135deg, #00778A 0%, #00B8B8 100%)',
    'linear-gradient(135deg, #00B8B8 0%, #AEEB60 100%)',
    'linear-gradient(135deg, #AEEB60 0%, #FFA93C 100%)',
    'linear-gradient(135deg, #FFA93C 0%, #004466 100%)'
  ];

  projects: Project[] = [
    {
      id: 1,
      title: 'Beatride – Plataforma de Ruteo Comercial y Logístico',
      description: 'Beatride es una plataforma orientada a optimizar el Route to Market (RTM), permitiendo la creación de rutas eficientes para equipos comerciales y logísticos. Participé en el desarrollo frontend con Angular e integración optimizada de Google Maps. También desarrollé scripts para el backend en C++ (usando OR-Tools) e integrados con Python mediante ctypes, para realizar cálculos logísticos basados en datos geoespaciales.',
      technologies: ['Angular', 'Google Maps API', 'Python', 'OR-Tools', 'Pandas', 'GeoPandas', 'Numpy', 'Dask', 'PySpark', 'ESRI'],
      languages: ['TypeScript', 'Python', 'C++'],
      role: 'Desarrollador Full Stack',
      images: [
        './assets/images/projects/beatridemap-1.jpeg',
        './assets/images/projects/beatridemap-2.jpeg',
        './assets/images/projects/beatridemap-3.jpeg',
        './assets/images/projects/beatridemap-4.jpeg',
        './assets/images/projects/beatridemap-5.jpeg',
        './assets/images/projects/beatridemap-6.jpeg',
        './assets/images/projects/beatridemap-7.jpeg',
        './assets/images/projects/beatridemap-8.jpeg',
        './assets/images/projects/beatridemap-9.jpeg',
        './assets/images/projects/beatridemap-10.jpeg',
        './assets/images/projects/beatridemap-11.jpeg',
        './assets/images/projects/beatridemap-12.jpeg',
        './assets/images/projects/beatridemap-13.jpeg',
        './assets/images/projects/beatridemap-14.jpeg',
      ],
      liveUrl: 'https://beatride.co',
      liveName: 'Ir a Beatride',
      featured: true,
      currentImageIndex: 0,
      progress: 0
    }

    /*
    {
      id: 2,
      title: 'Sistema de Gestión de Tareas',
      description: 'Aplicación web para gestión de proyectos y tareas con sistema de notificaciones en tiempo real.',
      technologies: ['React', 'Firebase', 'Material-UI'],
      languages: ['JavaScript', 'CSS', 'HTML'],
      role: 'Desarrollador Frontend',
      images: [
        '/assets/images/projects/task-1.jpg',
        '/assets/images/projects/task-2.jpg'
      ],
      liveUrl: 'https://task-manager-demo.com',
      repoUrl: 'https://github.com/user/task-manager',
      featured: true,
      currentImageIndex: 0,
      progress: 0
    },
    {
      id: 3,
      title: 'API REST de Servicios',
      description: 'API RESTful para gestión de servicios con autenticación JWT y documentación Swagger.',
      technologies: ['Node.js', 'Express', 'PostgreSQL'],
      languages: ['JavaScript', 'SQL'],
      role: 'Desarrollador Backend',
      images: [
        '/assets/images/projects/api-1.jpg',
        '/assets/images/projects/api-2.jpg'
      ],
      repoUrl: 'https://github.com/user/api-services',
      featured: false,
      currentImageIndex: 0,
      progress: 0
    }
      */
  ];

  ngOnInit() {
    this.startCarousels();
  }

  ngOnDestroy() {
    this.stopCarousels();
  }

  private startCarousels() {
    this.projects.forEach(project => {
      // Iniciar el carrusel de imágenes
      this.carouselIntervals[project.id] = setInterval(() => {
        project.currentImageIndex = (project.currentImageIndex + 1) % project.images.length;
        project.progress = 0; // Reiniciar el progreso
      }, this.CAROUSEL_INTERVAL);

      // Iniciar la animación de la barra de progreso
      this.progressIntervals[project.id] = setInterval(() => {
        const increment = (100 / (this.CAROUSEL_INTERVAL / this.PROGRESS_INTERVAL));
        project.progress = Math.min(100, project.progress + increment);
      }, this.PROGRESS_INTERVAL);
    });
  }

  private stopCarousels() {
    Object.values(this.carouselIntervals).forEach(interval => clearInterval(interval));
    Object.values(this.progressIntervals).forEach(interval => clearInterval(interval));
  }

  getCurrentImage(project: Project): string {
    return project.images[project.currentImageIndex];
  }

  getProgressWidth(project: Project): string {
    return `${project.progress}%`;
  }

  getFallbackBackground(project: Project): string {
    return this.fallbackColors[project.currentImageIndex % this.fallbackColors.length];
  }

  hasValidImage(project: Project): boolean {
    const imageUrl = this.getCurrentImage(project);
    return typeof imageUrl === 'string' && imageUrl.trim() !== '';
  }
}
