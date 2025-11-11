// ============================================
// SERVIDOR CON HANDLEBARS COMO MOTOR DE RENDERIZADO
// ============================================

const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// ============================================
// CONFIGURACIÓN DE HANDLEBARS
// ============================================

// Configurar Handlebars como motor de plantillas
app.engine('handlebars', engine({
    defaultLayout: 'main',           // Layout por defecto
    layoutsDir: path.join(__dirname, 'views/layouts'),  // Directorio de layouts
    partialsDir: path.join(__dirname, 'views/partials'), // Directorio de partials
    helpers: {
        // Helper personalizado: Formatear fecha
        formatDate: function(date) {
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            return new Date(date).toLocaleDateString('es-ES', options);
        },
        
        // Helper personalizado: Año actual
        currentYear: function() {
            return new Date().getFullYear();
        },
        
        // Helper personalizado: Convertir a mayúsculas
        uppercase: function(str) {
            return str.toUpperCase();
        },
        
        // Helper personalizado: Condicional personalizado
        ifEquals: function(arg1, arg2, options) {
            return (arg1 === arg2) ? options.fn(this) : options.inverse(this);
        },
        
        // Helper personalizado: Multiplicar
        multiply: function(a, b) {
            return a * b;
        },
        
        // Helper personalizado: Generar estrellas de rating
        stars: function(rating) {
            let stars = '';
            for(let i = 0; i < 5; i++) {
                if(i < rating) {
                    stars += '★';
                } else {
                    stars += '☆';
                }
            }
            return stars;
        }
    }
}));

app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// ============================================
// MIDDLEWARE
// ============================================

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para parsear JSON y URL-encoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware de logging
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
    next();
});

// ============================================
// DATOS DE EJEMPLO (Simulando una base de datos)
// ============================================

const portfolioData = {
    profile: {
        name: 'Ana García Martínez',
        title: 'Desarrolladora Full Stack',
        bio: 'Apasionada por crear experiencias web increíbles y soluciones tecnológicas innovadoras.',
        email: 'ana.garcia@example.com',
        phone: '+34 123 456 789',
        location: 'Madrid, España',
        avatar: '/images/avatar.jpg',
        social: {
            github: 'https://github.com/anagarcia',
            linkedin: 'https://linkedin.com/in/anagarcia',
            twitter: 'https://twitter.com/anagarcia'
        }
    },
    
    skills: [
        { name: 'JavaScript', level: 90, category: 'frontend' },
        { name: 'React', level: 85, category: 'frontend' },
        { name: 'Node.js', level: 80, category: 'backend' },
        { name: 'Express', level: 85, category: 'backend' },
        { name: 'MongoDB', level: 75, category: 'database' },
        { name: 'PostgreSQL', level: 70, category: 'database' },
        { name: 'HTML/CSS', level: 95, category: 'frontend' },
        { name: 'Git', level: 88, category: 'tools' }
    ],
    
    projects: [
        {
            id: 1,
            title: 'E-Commerce Platform',
            description: 'Plataforma completa de comercio electrónico con carrito de compras, pasarela de pagos y panel de administración.',
            technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            image: '/images/project1.jpg',
            githubUrl: 'https://github.com/anagarcia/ecommerce',
            liveUrl: 'https://ecommerce-demo.com',
            date: '2024-09-15',
            featured: true,
            rating: 5
        },
        {
            id: 2,
            title: 'Task Manager App',
            description: 'Aplicación de gestión de tareas con autenticación, categorías y notificaciones en tiempo real.',
            technologies: ['Vue.js', 'Firebase', 'Tailwind CSS'],
            image: '/images/project2.jpg',
            githubUrl: 'https://github.com/anagarcia/taskmanager',
            liveUrl: 'https://taskmanager-demo.com',
            date: '2024-07-20',
            featured: false,
            rating: 4
        },
        {
            id: 3,
            title: 'Weather Dashboard',
            description: 'Dashboard interactivo del clima con gráficos, pronósticos extendidos y geolocalización.',
            technologies: ['JavaScript', 'Chart.js', 'OpenWeather API'],
            image: '/images/project3.jpg',
            githubUrl: 'https://github.com/anagarcia/weather',
            liveUrl: 'https://weather-demo.com',
            date: '2024-05-10',
            featured: true,
            rating: 4
        },
        {
            id: 4,
            title: 'Blog Personal',
            description: 'Blog personal con sistema de comentarios, búsqueda avanzada y editor de markdown.',
            technologies: ['Next.js', 'Prisma', 'PostgreSQL'],
            image: '/images/project4.jpg',
            githubUrl: 'https://github.com/anagarcia/blog',
            liveUrl: 'https://blog-demo.com',
            date: '2024-03-05',
            featured: false,
            rating: 5
        }
    ],
    
    experience: [
        {
            company: 'Tech Solutions Inc.',
            position: 'Senior Frontend Developer',
            period: '2022 - Presente',
            description: 'Desarrollo de aplicaciones web con React y TypeScript. Liderazgo de equipo de 5 desarrolladores.',
            achievements: [
                'Mejoré el rendimiento de la aplicación en un 40%',
                'Implementé sistema de diseño consistente',
                'Mentoricé a 3 desarrolladores junior'
            ]
        },
        {
            company: 'StartUp Digital',
            position: 'Full Stack Developer',
            period: '2020 - 2022',
            description: 'Desarrollo de aplicaciones MERN stack. Integración de APIs y servicios de terceros.',
            achievements: [
                'Desarrollé 5+ productos desde cero',
                'Reduje costos de infraestructura en 30%',
                'Implementé CI/CD completo'
            ]
        },
        {
            company: 'Web Agency',
            position: 'Junior Developer',
            period: '2019 - 2020',
            description: 'Desarrollo de sitios web corporativos y landing pages.',
            achievements: [
                'Entregué 20+ proyectos a tiempo',
                'Aprendí mejores prácticas de desarrollo',
                'Colaboré con equipos de diseño'
            ]
        }
    ],
    
    testimonials: [
        {
            name: 'Carlos Rodríguez',
            position: 'CTO at Tech Solutions',
            text: 'Ana es una desarrolladora excepcional. Su capacidad para resolver problemas complejos y su compromiso con la calidad son impresionantes.',
            avatar: '/images/testimonial1.jpg',
            rating: 5
        },
        {
            name: 'Laura Fernández',
            position: 'Product Manager',
            text: 'Trabajar con Ana ha sido un placer. Siempre entrega código limpio y bien documentado, y su comunicación es excelente.',
            avatar: '/images/testimonial2.jpg',
            rating: 5
        }
    ],
    
    education: [
        {
            institution: 'Universidad Politécnica de Madrid',
            degree: 'Ingeniería Informática',
            period: '2015 - 2019',
            description: 'Especialización en Desarrollo de Software'
        },
        {
            institution: 'Platzi',
            degree: 'Certificación Full Stack JavaScript',
            period: '2020',
            description: 'Desarrollo web moderno con JavaScript'
        }
    ]
};

// ============================================
// RUTAS
// ============================================

// Página principal (Home/Portafolio)
app.get('/', (req, res) => {
    res.render('home', {
        title: 'Inicio - Portafolio',
        profile: portfolioData.profile,
        featuredProjects: portfolioData.projects.filter(p => p.featured),
        recentProjects: portfolioData.projects.slice(0, 3),
        skillsCount: portfolioData.skills.length,
        projectsCount: portfolioData.projects.length,
        experienceYears: new Date().getFullYear() - 2019
    });
});

// Página de proyectos
app.get('/projects', (req, res) => {
    const filter = req.query.filter || 'all';
    let filteredProjects = portfolioData.projects;
    
    if (filter === 'featured') {
        filteredProjects = portfolioData.projects.filter(p => p.featured);
    }
    
    res.render('projects', {
        title: 'Proyectos - Portafolio',
        profile: portfolioData.profile,
        projects: filteredProjects,
        filter: filter
    });
});

// Página de proyecto individual
app.get('/project/:id', (req, res) => {
    const projectId = parseInt(req.params.id);
    const project = portfolioData.projects.find(p => p.id === projectId);
    
    if (!project) {
        return res.status(404).render('404', {
            title: 'Proyecto no encontrado',
            profile: portfolioData.profile
        });
    }
    
    // Proyectos relacionados (otros proyectos)
    const relatedProjects = portfolioData.projects
        .filter(p => p.id !== projectId)
        .slice(0, 2);
    
    res.render('project-detail', {
        title: `${project.title} - Portafolio`,
        profile: portfolioData.profile,
        project: project,
        relatedProjects: relatedProjects
    });
});

// Página de habilidades
app.get('/skills', (req, res) => {
    // Agrupar habilidades por categoría
    const skillsByCategory = {
        frontend: portfolioData.skills.filter(s => s.category === 'frontend'),
        backend: portfolioData.skills.filter(s => s.category === 'backend'),
        database: portfolioData.skills.filter(s => s.category === 'database'),
        tools: portfolioData.skills.filter(s => s.category === 'tools')
    };
    
    res.render('skills', {
        title: 'Habilidades - Portafolio',
        profile: portfolioData.profile,
        skillsByCategory: skillsByCategory
    });
});

// Página de experiencia
app.get('/experience', (req, res) => {
    res.render('experience', {
        title: 'Experiencia - Portafolio',
        profile: portfolioData.profile,
        experience: portfolioData.experience,
        education: portfolioData.education,
        testimonials: portfolioData.testimonials
    });
});

// Página de contacto
app.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'Contacto - Portafolio',
        profile: portfolioData.profile,
        success: req.query.success === 'true'
    });
});

// Procesar formulario de contacto
app.post('/contact', (req, res) => {
    const { name, email, subject, message } = req.body;
    
    // Aquí normalmente enviarías un email o guardarías en base de datos
    console.log('Mensaje de contacto recibido:');
    console.log({ name, email, subject, message });
    
    // Redirigir con mensaje de éxito
    res.redirect('/contact?success=true');
});

// Ruta API: Obtener datos de perfil (ejemplo de API REST)
app.get('/api/profile', (req, res) => {
    res.json(portfolioData.profile);
});

// Ruta API: Obtener proyectos
app.get('/api/projects', (req, res) => {
    res.json(portfolioData.projects);
});

// Página 404
app.use((req, res) => {
    res.status(404).render('404', {
        title: 'Página no encontrada',
        profile: portfolioData.profile
    });
});

// ============================================
// MANEJO DE ERRORES
// ============================================

app.use((err, req, res, next) => {
    console.error('Error:', err.stack);
    res.status(500).render('500', {
        title: 'Error del servidor',
        profile: portfolioData.profile,
        error: process.env.NODE_ENV === 'development' ? err : {}
    });
});

// ============================================
// INICIAR SERVIDOR
// ============================================

app.listen(PORT, () => {
    console.log('═══════════════════════════════════════════════════════');
    console.log('🚀 Servidor iniciado exitosamente');
    console.log('═══════════════════════════════════════════════════════');
    console.log(`📍 URL: http://localhost:${PORT}`);
    console.log(`🔧 Motor de renderizado: Handlebars`);
    console.log(`📁 Views: ${path.join(__dirname, 'views')}`);
    console.log(`📊 Proyectos disponibles: ${portfolioData.projects.length}`);
    console.log('═══════════════════════════════════════════════════════');
    console.log('Rutas disponibles:');
    console.log('  • GET  /                 - Página principal');
    console.log('  • GET  /projects         - Lista de proyectos');
    console.log('  • GET  /project/:id      - Detalle de proyecto');
    console.log('  • GET  /skills           - Habilidades');
    console.log('  • GET  /experience       - Experiencia laboral');
    console.log('  • GET  /contact          - Formulario de contacto');
    console.log('  • POST /contact          - Enviar mensaje');
    console.log('  • GET  /api/profile      - API: Datos de perfil');
    console.log('  • GET  /api/projects     - API: Lista de proyectos');
    console.log('═══════════════════════════════════════════════════════');
});