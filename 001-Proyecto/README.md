# 📚 API de Biblioteca y Libros - Proyecto RESTful

**Estudiante:** Dorian Joel Alban Lucas  
**Curso:** Aplicaciones Web - Semestre 2025B  
**Fecha:** 16 de Noviembre de 2025

---

## 📋 Descripción del Proyecto

Este proyecto implementa una API RESTful que modela la relación **1 a muchos** entre **Bibliotecas** y **Libros**, donde:
- Una biblioteca puede tener muchos libros
- Cada libro pertenece a una única biblioteca

---

## 🎯 Objetivos

- Diseñar endpoints RESTful siguiendo estándares de la industria
- Documentar la API usando OpenAPI 3.0 (Swagger)
- Crear colección de pruebas con Bruno
- Implementar operaciones CRUD completas para ambas entidades
- Demostrar relación 1 a muchos en una API REST

---

## 🧭 Parte 1: Introducción Teórica

### ¿Qué es el estándar RESTful?

**REST** (Representational State Transfer) es un estilo arquitectónico para diseñar servicios web. Una API RESTful:

- ✅ **Usa métodos HTTP estándar**: GET, POST, PUT, PATCH, DELETE
- ✅ **Opera sobre recursos**: Identificados por URLs
- ✅ **Es stateless**: Cada petición contiene toda la información necesaria
- ✅ **Usa formatos estándar**: JSON para intercambiar datos
- ✅ **Sigue convenciones**: Nombres de recursos en plural, códigos HTTP apropiados

### Ejemplo de Relación 1 a Muchos

**Biblioteca** tiene muchos **Libros**
- Cada libro pertenece a una sola biblioteca
- Una biblioteca puede tener cero o muchos libros
- La relación se establece mediante el campo `libraryId` en el libro

---

## 🛠️ Parte 2: Diseño de Endpoints RESTful

### 📚 Entidad: Biblioteca (/libraries)

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/libraries` | Obtener todas las bibliotecas |
| GET | `/libraries/{id}` | Obtener biblioteca por ID |
| POST | `/libraries` | Crear nueva biblioteca |
| PUT | `/libraries/{id}` | Actualizar biblioteca completa |
| DELETE | `/libraries/{id}` | Eliminar biblioteca por ID |

**Modelo de Datos - Library:**
```json
{
  "id": 1,
  "name": "Biblioteca Central",
  "address": "Av. Principal 123",
  "city": "Quito",
  "country": "Ecuador"
}
```

---

### 📖 Entidad: Libro (/books)

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/books` | Obtener todos los libros |
| GET | `/books/{id}` | Obtener libro por ID |
| GET | `/libraries/{id}/books` | Obtener libros de una biblioteca |
| POST | `/books` | Crear nuevo libro |
| PUT | `/books/{id}` | Actualizar libro completo |
| DELETE | `/books/{id}` | Eliminar libro por ID |

**Modelo de Datos - Book:**
```json
{
  "id": 1,
  "title": "Cien Años de Soledad",
  "author": "Gabriel García Márquez",
  "isbn": "978-0307474728",
  "publishedYear": 1967,
  "genre": "Realismo mágico",
  "libraryId": 1
}
```

---

## 🔗 Relación entre Entidades

```
┌─────────────────┐          ┌─────────────────┐
│    Library      │ 1      * │      Book       │
├─────────────────┤──────────├─────────────────┤
│ id              │          │ id              │
│ name            │          │ title           │
│ address         │          │ author          │
│ city            │          │ isbn            │
│ country         │          │ publishedYear   │
└─────────────────┘          │ genre           │
                             │ libraryId (FK)  │
                             └─────────────────┘
```

---

## 📄 Estructura del Proyecto

```
001-Proyecto/
├── README.md                          # Este archivo
├── swagger.yaml                       # Documentación OpenAPI
├── bruno/                             # Colección Bruno
│   ├── bruno.json                     # Configuración de Bruno
│   ├── libraries/                     # Endpoints de bibliotecas
│   │   ├── get-all-libraries.bru
│   │   ├── get-library-by-id.bru
│   │   ├── create-library.bru
│   │   ├── update-library.bru
│   │   └── delete-library.bru
│   └── books/                         # Endpoints de libros
│       ├── get-all-books.bru
│       ├── get-book-by-id.bru
│       ├── get-books-by-library.bru
│       ├── create-book.bru
│       ├── update-book.bru
│       └── delete-book.bru
└── examples/                          # Ejemplos de respuestas
    ├── library-response.json
    └── book-response.json
```

---

## 🚀 Cómo Usar Este Proyecto

### 1. Visualizar Documentación Swagger

1. Abre [Swagger Editor](https://editor.swagger.io/)
2. Copia el contenido de `swagger.yaml`
3. Pégalo en el editor
4. Explora la documentación interactiva

### 2. Probar con Bruno

⚠️ **Importante**: Este proyecto usa **JSONPlaceholder** como API de demostración porque `api.biblioteca.com` no es una API real.

**Mapeo de recursos:**
- `Libraries` → `users` de JSONPlaceholder
- `Books` → `posts` de JSONPlaceholder
- Relación: `users/1/posts` (libros de una biblioteca)

**Pasos:**
1. Instala [Bruno](https://www.usebruno.com/)
2. Abre la carpeta `bruno/` en Bruno
3. Ejecuta las peticiones:
   - **Libraries**: Usa endpoints `/users` 
   - **Books**: Usa endpoints `/posts`
   - **Relación 1:N**: `GET /users/1/posts`

**URLs funcionando:**
- ✅ `https://jsonplaceholder.typicode.com/users` (bibliotecas)
- ✅ `https://jsonplaceholder.typicode.com/posts` (libros)
- ✅ `https://jsonplaceholder.typicode.com/users/1/posts` (libros de biblioteca 1)

---

## 📊 Casos de Uso

### Caso 1: Gestionar Bibliotecas

```
1. Crear biblioteca
   POST /libraries
   Body: { name, address, city, country }

2. Listar todas las bibliotecas
   GET /libraries

3. Obtener biblioteca específica
   GET /libraries/1

4. Actualizar datos de biblioteca
   PUT /libraries/1

5. Eliminar biblioteca
   DELETE /libraries/1
```

### Caso 2: Gestionar Libros

```
1. Crear libro en una biblioteca
   POST /books
   Body: { title, author, isbn, publishedYear, genre, libraryId }

2. Listar todos los libros
   GET /books

3. Obtener libros de una biblioteca específica
   GET /libraries/1/books

4. Actualizar información de un libro
   PUT /books/1

5. Eliminar libro
   DELETE /books/1
```

---

## 🎓 Conceptos Clave Aprendidos

### 1. Diseño de URLs RESTful

- ✅ **Recursos en plural**: `/libraries`, `/books`
- ✅ **IDs en el path**: `/libraries/1`
- ✅ **Relaciones anidadas**: `/libraries/1/books`
- ✅ **Sin verbos**: Usar métodos HTTP, no `/getLibraries`

### 2. Métodos HTTP

- **GET**: Obtener recursos (idempotente)
- **POST**: Crear nuevos recursos
- **PUT**: Actualizar recurso completo
- **DELETE**: Eliminar recursos

### 3. Códigos de Estado HTTP

- **200 OK**: Operación exitosa
- **201 Created**: Recurso creado exitosamente
- **204 No Content**: Eliminación exitosa
- **400 Bad Request**: Datos inválidos
- **404 Not Found**: Recurso no encontrado
- **500 Internal Server Error**: Error del servidor

### 4. Relaciones en REST

- **1 a muchos**: Se modela con foreign key (`libraryId`)
- **Endpoint anidado**: `/libraries/{id}/books`
- **Integridad referencial**: Un libro debe pertenecer a una biblioteca existente

---

## 🔍 Buenas Prácticas Implementadas

### API Design

- ✅ Nombres de recursos en plural
- ✅ URLs consistentes y predecibles
- ✅ Métodos HTTP apropiados
- ✅ Códigos de estado HTTP correctos
- ✅ Versionado de API (si fuera producción: `/v1/libraries`)

### Documentación

- ✅ OpenAPI 3.0 completo
- ✅ Ejemplos en cada endpoint
- ✅ Schemas reutilizables
- ✅ Descripciones claras
- ✅ Validaciones documentadas

### Testing

- ✅ Colección Bruno organizada
- ✅ Peticiones agrupadas por entidad
- ✅ Ejemplos de datos realistas
- ✅ Variables de entorno (para producción)

---

## 📚 Comparación: Swagger vs Bruno

| Aspecto | Swagger | Bruno |
|---------|---------|-------|
| **Propósito** | Documentación API | Testing API |
| **Formato** | YAML/JSON (OpenAPI) | Archivos .bru |
| **Visualización** | Interfaz web interactiva | Cliente de escritorio |
| **Compartir** | URL pública | Archivos Git |
| **Testing** | Básico (Try it out) | Avanzado (scripts, tests) |
| **Generación de código** | Sí (múltiples lenguajes) | No |
| **Estándar** | OpenAPI (internacional) | Formato propio |

### ¿Cuándo usar cada uno?

**Swagger**:
- Documentar API pública
- Compartir con clientes/stakeholders
- Generar código cliente
- Diseño contract-first

**Bruno**:
- Desarrollo y testing local
- Pruebas de integración
- Debugging de endpoints
- Control de versiones con Git

---

## 🎯 Entregables del Proyecto

1. ✅ **swagger.yaml** - Especificación OpenAPI completa
2. ✅ **Colección Bruno** - 11 archivos .bru con todas las operaciones
3. ✅ **README.md** - Documentación del proyecto
4. ✅ **Ejemplos JSON** - Respuestas de ejemplo

---

## 📖 Referencias

### Documentación Oficial
- [REST API Best Practices](https://restfulapi.net/)
- [OpenAPI Specification](https://swagger.io/specification/)
- [Bruno Documentation](https://docs.usebruno.com/)

### Tutoriales
- [RESTful API Design](https://www.restapitutorial.com/)
- [HTTP Status Codes](https://httpstatuses.com/)
- [JSON Schema](https://json-schema.org/)

---

## 👤 Autor

**Dorian Joel Alban Lucas**  
Aplicaciones Web - Semestre 2025B  
[GitHub Repository](https://github.com/2025-b-sw-web-gr1/alban-2025-b-djal-wen-gr1)

---

## ⚠️ Nota Importante sobre la Implementación

**Este proyecto es SOLO documentación y diseño de API.**

### Para Testing con Bruno

He configurado los archivos `.bru` para usar **JSONPlaceholder** (API de prueba gratuita):
- **Libraries** → Simulated by `users` endpoint
- **Books** → Simulated by `posts` endpoint
- **Relationship** → `users/{id}/posts`


**⭐ Recuerda:** Un buen diseño de API facilita su uso, mantenimiento y escalabilidad. La documentación es tan importante como la implementación.
