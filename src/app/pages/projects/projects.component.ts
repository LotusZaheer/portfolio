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
  repoUrl: string;
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
      title: 'E-commerce Platform',
      description: 'Plataforma de comercio electrónico completa con carrito de compras, sistema de pagos y panel de administración.',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Express'],
      languages: ['TypeScript', 'JavaScript', 'HTML', 'SCSS'],
      role: 'Desarrollador Full Stack',
      images: [
        './assets/images/projects/ecommerce-1.svg',
        './assets/images/projects/ecommerce-2.svg',
        './assets/images/projects/ecommerce-3.svg'
      ],
      liveUrl: 'https://ecommerce-demo.com',
      repoUrl: 'https://github.com/user/ecommerce',
      featured: true,
      currentImageIndex: 0,
      progress: 0
    },
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
