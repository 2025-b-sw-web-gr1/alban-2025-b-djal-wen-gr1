# 📚 Documentación de APIs REST con Swagger

**Estudiante:** Dorian Joel Alban Lucas  
**Curso:** Aplicaciones Web - Semestre 2025B  
**Fecha:** 16 de Noviembre de 2025

---

## 📋 Descripción del Proyecto

Este proyecto contiene la documentación completa de la API **JSONPlaceholder** utilizando el estándar **OpenAPI 3.0** y **Swagger**. La documentación incluye todos los endpoints probados previamente con Bruno en los talleres 08-09.

---

## 🎯 Objetivos

- Documentar APIs REST usando el estándar OpenAPI 3.0
- Crear documentación interactiva con Swagger
- Aplicar buenas prácticas de documentación técnica
- Facilitar el consumo y testing de APIs

---

## 📖 Introducción Teórica

### ¿Por qué es importante documentar una API?

#### 📚 **Facilita el entendimiento**
- Permite que otros desarrolladores comprendan cómo consumir la API
- Especifica claramente los parámetros, tipos de datos y formatos esperados
- Define las respuestas posibles y códigos de estado HTTP

#### 🤝 **Mejora la colaboración**
- Equipos de frontend, backend y QA pueden trabajar con mayor sincronía
- Reduce la dependencia de comunicación oral o documentación externa
- Facilita la incorporación de nuevos desarrolladores al equipo

#### 🛠️ **Reduce errores**
- Una documentación clara evita malentendidos en los parámetros, rutas y respuestas
- Especifica tipos de datos, formatos y validaciones
- Define casos de error y cómo manejarlos

#### 🔍 **Permite testing y validación**
- Herramientas como Swagger UI permiten probar directamente desde la documentación
- No requiere herramientas adicionales como Postman o Bruno
- Facilita la validación inmediata de cambios

---

### ¿Qué es Swagger y por qué se usa?

**Swagger** es un conjunto de herramientas que permite definir, visualizar y probar APIs REST usando el estándar **OpenAPI Specification (OAS)**.

#### Componentes clave:

1. **Swagger Editor** 
   - Para escribir la documentación en formato YAML o JSON
   - Validación en tiempo real
   - Preview instantáneo

2. **Swagger UI**
   - Para visualizar la documentación de forma interactiva
   - Permite probar endpoints directamente
   - Genera interfaz web automáticamente

3. **Swagger Codegen**
   - Para generar código cliente o servidor
   - Soporta múltiples lenguajes
   - Acelera el desarrollo

#### Ventajas:

- ✅ Compatible con múltiples lenguajes (Node.js, Java, Python, etc.)
- ✅ Estándar de la industria (OpenAPI)
- ✅ Interfaz visual atractiva
- ✅ Testing integrado
- ✅ Generación automática de código

---

## 🚀 Cómo Usar la Documentación

### Requisitos

- Navegador web moderno
- Acceso a [Swagger Editor](https://editor.swagger.io/)

### Pasos para Visualizar

1. Abre [Swagger Editor](https://editor.swagger.io/)
2. Copia el contenido del archivo `swagger.yaml`
3. Pégalo en el editor
4. Explora la documentación interactiva

### Probar Endpoints

1. Expande cualquier endpoint
2. Click en "Try it out"
3. Completa los parámetros necesarios
4. Click en "Execute"
5. Observa la respuesta en tiempo real

---

## 📊 Recursos Documentados

La documentación incluye **TODOS** los endpoints probados en Bruno:

### Posts (6 endpoints)
- GET /posts - Obtener todos los posts
- GET /posts/{id} - Obtener post por ID
- POST /posts - Crear nuevo post
- PUT /posts/{id} - Actualizar post completo
- PATCH /posts/{id} - Actualizar post parcialmente
- DELETE /posts/{id} - Eliminar post

### Comments (3 endpoints)
- GET /comments - Obtener todos los comentarios
- GET /comments?postId={id} - Comentarios por post
- POST /comments - Crear comentario

### Albums (3 endpoints)
- GET /albums - Obtener todos los álbumes
- GET /albums/{id} - Obtener álbum por ID
- POST /albums - Crear álbum

### Photos (2 endpoints)
- GET /photos - Obtener todas las fotos
- GET /photos?albumId={id} - Fotos por álbum

### Todos (3 endpoints)
- GET /todos - Obtener todas las tareas
- GET /todos/{id} - Obtener tarea por ID
- POST /todos - Crear tarea

### Users (2 endpoints)
- GET /users - Obtener todos los usuarios
- GET /users/{id} - Obtener usuario por ID

**Total: 19 endpoints documentados** ✅

---

## 🎓 Conceptos Clave Aprendidos

### 1. OpenAPI Specification (OAS)

```yaml
openapi: 3.0.0  # Versión de OpenAPI
info:            # Información general de la API
paths:           # Definición de endpoints
components:      # Schemas, parámetros reutilizables
servers:         # URLs base de la API
```

### 2. Estructura de un Path

```yaml
paths:
  /posts/{id}:           # Ruta con parámetro
    get:                 # Método HTTP
      summary: Descripción breve
      parameters:        # Parámetros del endpoint
      responses:         # Respuestas posibles
```

### 3. Definición de Schemas

```yaml
components:
  schemas:
    Post:                # Nombre del schema
      type: object       # Tipo de dato
      properties:        # Propiedades del objeto
        id:
          type: integer
        title:
          type: string
```

### 4. Referencias Reutilizables

```yaml
$ref: '#/components/schemas/Post'  # Referencia a schema definido
```

### 5. Parámetros

```yaml
parameters:
  - name: id            # Nombre del parámetro
    in: path            # Ubicación (path, query, header, cookie)
    required: true      # Si es obligatorio
    schema:
      type: integer     # Tipo de dato
```

---

## 🔍 Comparación: Bruno vs Swagger

| Aspecto | Bruno | Swagger |
|---------|-------|---------|
| **Propósito** | Testing de APIs | Documentación de APIs |
| **Formato** | Archivos .bru | YAML/JSON (OpenAPI) |
| **Interactividad** | Cliente API | Documentación interactiva |
| **Compartir** | Archivos de texto | URL pública |
| **Testing** | Enfocado en testing | Testing secundario |
| **Documentación** | Manual en README | Generada automáticamente |
| **Versionamiento** | Git-friendly | Git-friendly |
| **Interfaz** | Desktop/VS Code | Web browser |

### ¿Cuándo usar cada uno?

#### Usa **Bruno** cuando:
- ✅ Estés desarrollando y probando APIs
- ✅ Necesites colecciones de pruebas
- ✅ Quieras automatizar tests
- ✅ Trabajes en equipo con Git

#### Usa **Swagger** cuando:
- ✅ Necesites documentar APIs públicas
- ✅ Quieras una interfaz visual para clientes
- ✅ Necesites generar código cliente
- ✅ Quieras compartir documentación con stakeholders

#### Lo ideal: **Usar ambos**
1. **Desarrolla y prueba** con Bruno
2. **Documenta** con Swagger
3. **Mantén ambos sincronizados**

---

## 📚 Referencias

### Documentación Oficial
- [OpenAPI Specification](https://swagger.io/specification/)
- [Swagger Editor](https://editor.swagger.io/)
- [JSONPlaceholder API](https://jsonplaceholder.typicode.com/)

### Recursos Adicionales
- [Swagger Tutorial](https://swagger.io/docs/specification/about/)
- [OpenAPI 3.0 Tutorial](https://support.smartbear.com/swaggerhub/docs/tutorials/openapi-3-tutorial.html)

---

## 👤 Autor

**Dorian Joel Alban Lucas**  
Aplicaciones Web - Semestre 2025B  
[GitHub Repository](https://github.com/2025-b-sw-web-gr1/alban-2025-b-djal-wen-gr1)

