# Taller 07: Motor de Renderizado con Handlebars

## 📋 Descripción del Proyecto

Este proyecto es un sitio web de portafolio personal desarrollado con **Handlebars** como motor de plantillas, implementado como alternativa a EJS para el curso de Aplicaciones Web.

## 🎯 Objetivo

Crear una página web funcional utilizando un motor de renderizado diferente a EJS, demostrando las capacidades de Handlebars en un proyecto real.

---

## 🔧 Tecnologías Utilizadas

- **Node.js** (v14+)
- **Express.js** (Framework web)
- **Handlebars** (Motor de plantillas)
- **Express-Handlebars** (Integración con Express)
- **HTML5** (Estructura semántica)
- **CSS3** (Diseño responsive con Grid y Flexbox)
- **JavaScript ES6+** (Interactividad del cliente)
- **Font Awesome** (Iconos)
- **Google Fonts** (Tipografía: Inter y Poppins)

---

## 📁 Estructura del Proyecto

```
07-Taller_MotorRenderizacion/
├── views/
│   ├── layouts/
│   │   └── main.handlebars          # Layout principal
│   ├── partials/
│   │   ├── navbar.handlebars        # Navegación
│   │   ├── footer.handlebars        # Pie de página
│   │   └── project-card.handlebars  # Tarjeta de proyecto
│   ├── home.handlebars              # Página principal
│   ├── projects.handlebars          # Lista de proyectos
│   ├── project-detail.handlebars    # Detalle de proyecto
│   ├── skills.handlebars            # Habilidades
│   ├── experience.handlebars        # Experiencia
│   ├── contact.handlebars           # Contacto
│   ├── 404.handlebars               # Error 404
│   └── 500.handlebars               # Error 500
├── public/
│   ├── css/
│   │   └── styles.css               # Estilos principales
│   ├── js/
│   │   └── main.js                  # JavaScript del cliente
│   └── images/                      # Imágenes
├── server.js                        # Servidor Express
├── package.json                     # Dependencias
└── README.md                        # Este archivo
```

---

## 🚀 Instalación y Ejecución

### 1. Instalar dependencias

```bash
npm install
```

### 2. Ejecutar en modo desarrollo (con nodemon)

```bash
npm run dev
```

### 3. Ejecutar en modo producción

```bash
npm start
```

### 4. Abrir en el navegador

```
http://localhost:3000
```

---

## 🌟 Características Implementadas

### Motor de Plantillas Handlebars

#### **Layouts**
- Layout principal (`main.handlebars`) que envuelve todas las páginas
- Sistema de inyección de contenido con `{{{body}}}`
- Metadatos dinámicos (título, descripción)

#### **Partials (Componentes Reutilizables)**
- `navbar.handlebars` - Navegación responsive
- `footer.handlebars` - Pie de página con redes sociales
- `project-card.handlebars` - Tarjeta de proyecto reutilizable

#### **Helpers Personalizados**
```javascript
1. formatDate(date)         // Formatear fechas
2. currentYear()            // Año actual
3. uppercase(str)           // Convertir a mayúsculas
4. ifEquals(a, b)           // Comparación condicional
5. multiply(a, b)           // Multiplicación
6. stars(rating)            // Mostrar estrellas (★★★★★)
```

#### **Sintaxis de Handlebars Utilizada**
- `{{variable}}` - Mostrar variables escapadas
- `{{{variable}}}` - Mostrar HTML sin escapar
- `{{#if condition}}` - Condicionales
- `{{#each array}}` - Iteración sobre arrays
- `{{> partial}}` - Incluir partials
- `{{helper param}}` - Usar helpers personalizados

### Funcionalidades del Sitio

- ✅ **Home** - Página de inicio con hero, estadísticas y proyectos destacados
- ✅ **Proyectos** - Lista completa con filtros
- ✅ **Detalle de Proyecto** - Vista individual con información extendida
- ✅ **Habilidades** - Muestra tecnologías con barras de progreso
- ✅ **Experiencia** - Timeline de experiencia laboral y educación
- ✅ **Contacto** - Formulario funcional con validación
- ✅ **Diseño Responsive** - Adaptable a móviles, tablets y escritorio
- ✅ **Manejo de Errores** - Páginas 404 y 500 personalizadas

---

## 🎨 Características de Diseño

- **Dark Mode** - Tema oscuro moderno
- **Gradientes** - Colores vibrantes con gradientes
- **Animaciones** - Transiciones suaves y efectos hover
- **Responsive** - Mobile-first con breakpoints en 768px y 480px
- **Accesibilidad** - Navegación por teclado y contraste adecuado

---

## 📡 Rutas del Servidor

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/` | Página de inicio |
| GET | `/projects` | Lista de proyectos |
| GET | `/projects?filter=featured` | Proyectos destacados |
| GET | `/project/:id` | Detalle de proyecto |
| GET | `/skills` | Página de habilidades |
| GET | `/experience` | Página de experiencia |
| GET | `/contact` | Formulario de contacto |
| POST | `/contact` | Enviar mensaje |
| GET | `/api/profile` | API JSON con perfil |
| GET | `/api/projects` | API JSON con proyectos |

---

## 🤔 ¿Por Qué Elegí Handlebars?

### Razones Principales:

1. **Filosofía Logic-Less** 
   - Handlebars promueve la separación de lógica y presentación
   - Las plantillas son más limpias y fáciles de leer
   - La lógica compleja se mantiene en el servidor (helpers)

2. **Sistema de Layouts y Partials Integrado**
   - Express-Handlebars incluye soporte nativo para layouts
   - Los partials son más intuitivos con `{{> partial}}`
   - Mejor organización del código de presentación

3. **Seguridad por Defecto**
   - Todas las variables se escapan automáticamente con `{{var}}`
   - Menor riesgo de XSS (Cross-Site Scripting)
   - Control explícito con `{{{raw}}}` cuando se necesita HTML

4. **Sintaxis Clara y Consistente**
   - Más legible que las etiquetas de EJS (`<% %>`, `<%= %>`, `<%- %>`)
   - Helpers personalizados fáciles de crear
   - Mejor resaltado de sintaxis en editores

5. **Comunidad y Ecosistema**
   - Ampliamente usado en la industria (Ember.js, etc.)
   - Excelente documentación
   - Muchos helpers y plugins disponibles

---

## 🆚 Handlebars vs EJS: Comparación Detallada

### 1. **Sintaxis**

#### EJS (Embedded JavaScript):
```ejs
<!-- Mostrar variable -->
<h1><%= nombre %></h1>

<!-- HTML sin escapar -->
<div><%- contenidoHTML %></div>

<!-- Condicional -->
<% if (user) { %>
  <p>Bienvenido <%= user.name %></p>
<% } else { %>
  <p>Inicia sesión</p>
<% } %>

<!-- Iteración -->
<% projects.forEach(function(project) { %>
  <div><%= project.title %></div>
<% }); %>

<!-- Incluir partial -->
<%- include('partials/header') %>
```

#### Handlebars:
```handlebars
<!-- Mostrar variable -->
<h1>{{nombre}}</h1>

<!-- HTML sin escapar -->
<div>{{{contenidoHTML}}}</div>

<!-- Condicional -->
{{#if user}}
  <p>Bienvenido {{user.name}}</p>
{{else}}
  <p>Inicia sesión</p>
{{/if}}

<!-- Iteración -->
{{#each projects}}
  <div>{{title}}</div>
{{/each}}

<!-- Incluir partial -->
{{> header}}
```

### 2. **Layouts**

#### EJS:
```ejs
<!-- header.ejs -->
<!DOCTYPE html>
<html>
<head>...</head>
<body>

<!-- index.ejs -->
<%- include('partials/header') %>
<main>Contenido</main>
<%- include('partials/footer') %>

<!-- footer.ejs -->
</body>
</html>
```

#### Handlebars:
```handlebars
<!-- layouts/main.handlebars -->
<!DOCTYPE html>
<html>
<head>...</head>
<body>
  {{> navbar}}
  {{{body}}}
  {{> footer}}
</body>
</html>

<!-- index.handlebars -->
<main>Contenido</main>
```

### 3. **Lógica en Plantillas**

#### EJS:
```ejs
<!-- Permite JavaScript completo -->
<% 
const fecha = new Date();
const anio = fecha.getFullYear();
const precioFinal = precio * 1.16; // IVA
%>
<p>Año: <%= anio %></p>
<p>Total: $<%= precioFinal.toFixed(2) %></p>
```

#### Handlebars:
```handlebars
<!-- Requiere helpers para lógica -->
<p>Año: {{currentYear}}</p>
<p>Total: ${{formatCurrency (multiply precio 1.16)}}</p>

<!-- Helpers definidos en server.js -->
helpers: {
  currentYear: () => new Date().getFullYear(),
  multiply: (a, b) => a * b,
  formatCurrency: (num) => num.toFixed(2)
}
```

### 4. **Ventajas y Desventajas**

| Aspecto | EJS | Handlebars |
|---------|-----|------------|
| **Curva de aprendizaje** | ✅ Más fácil (usa JavaScript directamente) | ⚠️ Requiere aprender sintaxis específica |
| **Flexibilidad** | ✅ JavaScript completo en plantillas | ❌ Limitado a helpers predefinidos |
| **Separación de lógica** | ❌ Mezcla lógica y presentación | ✅ Fuerza separación clara |
| **Seguridad** | ⚠️ Más propenso a errores | ✅ Escapa por defecto |
| **Legibilidad** | ⚠️ Código puede volverse confuso | ✅ Plantillas más limpias |
| **Sistema de layouts** | ❌ Requiere configuración manual | ✅ Integrado nativamente |
| **Rendimiento** | ✅ Ligeramente más rápido | ⚠️ Overhead por compilación |
| **Debugging** | ✅ Errores más claros (JS estándar) | ⚠️ Errores menos descriptivos |
| **Reutilización** | ⚠️ Includes básicos | ✅ Partials y helpers reutilizables |
| **Mantenibilidad** | ⚠️ Difícil en proyectos grandes | ✅ Mejor escalabilidad |

---

## 💡 Ventajas de Handlebars

### 1. **Separación de Responsabilidades**
- La lógica de negocio permanece en el servidor
- Las plantillas solo se encargan de la presentación
- Más fácil de mantener en proyectos grandes

### 2. **Seguridad Mejorada**
```handlebars
<!-- Escapado automático -->
{{userInput}}  <!-- Seguro contra XSS -->

<!-- HTML explícito -->
{{{trustedHTML}}}  <!-- Solo cuando sea necesario -->
```

### 3. **Composición Modular**
```handlebars
<!-- Layout principal -->
{{> navbar}}
{{> sidebar}}
{{{body}}}
{{> footer}}

<!-- Partial dentro de partial -->
{{> project-card}}
  {{> badge}}
  {{> rating}}
{{/project-card}}
```

### 4. **Helpers Reutilizables**
```javascript
// Una vez definido, se usa en todas las vistas
helpers: {
  formatDate: (date) => new Intl.DateTimeFormat('es-MX').format(new Date(date)),
  stars: (rating) => '★'.repeat(rating) + '☆'.repeat(5 - rating),
  isActive: (current, page) => current === page ? 'active' : ''
}
```

### 5. **Sintaxis Limpia**
```handlebars
<!-- Handlebars: Limpio y legible -->
{{#each projects}}
  {{#if featured}}
    <div class="featured">{{title}}</div>
  {{/if}}
{{/each}}

<!-- vs EJS: Más verboso -->
<% projects.forEach(function(project) { %>
  <% if (project.featured) { %>
    <div class="featured"><%= project.title %></div>
  <% } %>
<% }); %>
```

---

## ⚠️ Desventajas de Handlebars

### 1. **Menos Flexibilidad**
- No puedes ejecutar JavaScript arbitrario
- Todo debe ser a través de helpers
- Curva de aprendizaje inicial

### 2. **Helpers Obligatorios**
```javascript
// Operaciones simples requieren helpers
helpers: {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  equals: (a, b) => a === b
}
```

### 3. **Debugging Más Difícil**
- Los errores son menos descriptivos
- Difícil rastrear problemas en plantillas complejas
- No hay stacktraces detallados

### 4. **Lógica Compleja Requiere Preparación**
```javascript
// En EJS puedes hacer esto directamente en la plantilla
// En Handlebars debes prepararlo en el servidor
app.get('/products', (req, res) => {
  const products = getProducts();
  const productsByCategory = products.reduce((acc, p) => {
    if (!acc[p.category]) acc[p.category] = [];
    acc[p.category].push(p);
    return acc;
  }, {});
  
  res.render('products', { productsByCategory });
});
```

---

## 📊 Casos de Uso Recomendados

### Usar **Handlebars** cuando:
- ✅ Proyecto con múltiples desarrolladores
- ✅ Necesitas clara separación de responsabilidades
- ✅ Prioridad en seguridad (XSS prevention)
- ✅ Plantillas que diseñadores sin JS pueden entender
- ✅ Proyecto grande con muchas vistas compartidas

### Usar **EJS** cuando:
- ✅ Proyecto pequeño o prototipo rápido
- ✅ Necesitas máxima flexibilidad
- ✅ Equipo pequeño con experiencia en JavaScript
- ✅ Lógica de presentación muy específica
- ✅ Prioridad en velocidad de desarrollo

---

## 🎓 Conceptos Aprendidos

1. **Motor de Plantillas**
   - Qué es y para qué sirve
   - Diferencias entre logic-less y full-logic
   - Cuándo usar cada tipo

2. **Arquitectura MVC**
   - Separación de Modelo, Vista y Controlador
   - Handlebars en la capa de Vista
   - Express como Controlador

3. **Helpers y Partials**
   - Reutilización de código de presentación
   - Helpers como funciones puras
   - Composición de componentes

4. **Express.js Avanzado**
   - Configuración de motores de vistas
   - Middleware personalizados
   - Manejo de errores centralizado

5. **Buenas Prácticas**
   - Separación de responsabilidades
   - DRY (Don't Repeat Yourself)
   - Seguridad en aplicaciones web

---

## 🔍 Comparación Final: ¿Cuál Es Mejor?

### No hay un "mejor" absoluto, depende del contexto:

#### **Handlebars es mejor para:**
- Proyectos empresariales con equipos grandes
- Aplicaciones que priorizan seguridad
- Cuando necesitas plantillas mantenibles a largo plazo
- Si trabajas con diseñadores que no saben JavaScript

#### **EJS es mejor para:**
- Prototipos rápidos y MVPs
- Proyectos pequeños con equipos técnicos
- Cuando necesitas máxima flexibilidad
- Si ya conoces JavaScript y quieres productividad inmediata

---

## 📚 Recursos Adicionales

- [Documentación de Handlebars](https://handlebarsjs.com/)
- [Express-Handlebars en GitHub](https://github.com/express-handlebars/express-handlebars)
- [Comparación de Template Engines](https://colorlib.com/wp/template-engines-for-nodejs/)
- [Seguridad en Template Engines](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html)

---

## 👨‍💻 Autor

Desarrollado para el curso de Aplicaciones Web - Semestre 2025B

## 📄 Licencia

Este proyecto es de código abierto para fines educativos.

---

## 🎉 Conclusión

Este taller demuestra que **Handlebars es una excelente alternativa a EJS** para proyectos que priorizan:

1. ✅ **Separación de responsabilidades**
2. ✅ **Seguridad por defecto**
3. ✅ **Mantenibilidad a largo plazo**
4. ✅ **Plantillas limpias y legibles**
5. ✅ **Sistema modular con layouts y partials**

Aunque tiene una curva de aprendizaje inicial y menos flexibilidad que EJS, las ventajas en organización, seguridad y mantenibilidad lo hacen ideal para proyectos profesionales.