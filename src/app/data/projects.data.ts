export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  languages: string[];
  company?: string;
  companyUrl?: string;
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

export const projects: Project[] = [
  {
    id: 1,
    title: 'Beatride – Plataforma de Ruteo Comercial y Logístico',
    description: 'Beatride es una plataforma orientada a optimizar el Route to Market (RTM), permitiendo la creación de rutas eficientes para equipos comerciales y logísticos. Participé en el desarrollo frontend con Angular e integración optimizada de Google Maps. También desarrollé scripts para el backend en C++ (usando OR-Tools) e integrados con Python mediante ctypes, para realizar cálculos logísticos basados en datos geoespaciales.',
    technologies: ['Angular', 'Google Maps API', 'OR-Tools', 'Pandas', 'GeoPandas', 'Numpy', 'Dask', 'ESRI', 'Docker'],
    languages: ['TypeScript', 'Python', 'C++'],
    company: 'OrusXpert SAS',
    companyUrl: 'https://orusxpert.co',
    role: 'Desarrollador Full Stack',
    images: [
      './assets/images/projects/beatridemap-1.png',
      './assets/images/projects/beatridemap-2.png',
      './assets/images/projects/beatridemap-3.png',
      './assets/images/projects/beatridemap-4.png',
      './assets/images/projects/beatridemap-5.png',
      './assets/images/projects/beatridemap-6.png',
      './assets/images/projects/beatridemap-7.png',
      './assets/images/projects/beatridemap-8.png',
      './assets/images/projects/beatridemap-9.png',
      './assets/images/projects/beatridemap-10.png',
      './assets/images/projects/beatridemap-11.png',
      './assets/images/projects/beatridemap-12.png',
      './assets/images/projects/beatridemap-13.png',
      './assets/images/projects/beatridemap-14.png',
    ],
    liveUrl: 'https://beatride.co',
    liveName: 'Ir a Beatride',
    featured: true,
    currentImageIndex: 0,
    progress: 0
  },

  {
    id: 2,
    title: 'FAMPAS - Fundación Adulto Mayor y Parkinson Santander',
    description: 'Desarrollo del frontend de la página institucional usando Angular. Implementé componentes reutilizables, estilos responsivos en SCSS y gestión modular de rutas. Se utilizó Docker para entornos de desarrollo consistentes y despliegue simplificado',
    technologies: ['Angular', 'Docker'],
    languages: ['TypeScript', 'SCSS', 'HTML5'],
    company: 'OrusXpert SAS',
    companyUrl: 'https://orusxpert.co',
    role: 'Desarrollador Frontend',
    images: [
      './assets/images/projects/fundacionfampas.png',
    ],
    liveUrl: 'https://fundacionfampas.com/',
    liveName: 'Ir a Fampas',
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