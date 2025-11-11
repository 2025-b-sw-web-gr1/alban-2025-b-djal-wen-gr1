# Taller 08-09: Testing de APIs con Bruno

## 📋 Descripción del Proyecto

Este taller consiste en utilizar **Bruno** (una alternativa open-source a Postman/Insomnia) para probar todos los endpoints de la API pública **JSONPlaceholder**.

## 🎯 Objetivos del Taller

1. ✅ Instalar y configurar Bruno en VS Code
2. ✅ Crear una colección completa de peticiones HTTP
3. ✅ Probar todos los métodos HTTP (GET, POST, PUT, PATCH, DELETE)
4. ✅ Entender cómo funcionan los parámetros en APIs REST
5. ✅ Analizar códigos de respuesta HTTP
6. ✅ Trabajar con diferentes tipos de peticiones (query params, body JSON)

---

## 🔧 Herramientas Utilizadas

- **Bruno** - Cliente de APIs open-source
- **VS Code Extension** - Bruno integrado en el editor
- **JSONPlaceholder** - API REST de prueba gratuita

---

## 📁 Estructura de la Colección

```
08-09-Taller_Bruno/
├── bruno.json                      # Configuración de la colección
├── README.md                       # Esta documentación
│
├── 📂 POSTS (6 peticiones)
│   ├── get-all-posts.bru          # GET /posts
│   ├── get-post-by-id.bru         # GET /posts/1
│   ├── create-post.bru            # POST /posts
│   ├── update-post-put.bru        # PUT /posts/1
│   ├── update-post-title.bru      # PATCH /posts/1
│   └── delete-post.bru            # DELETE /posts/1
│
├── 📂 COMMENTS (3 peticiones)
│   ├── get-all-comments.bru       # GET /comments
│   ├── get-comments-by-post.bru   # GET /comments?postId=1
│   └── create-comment.bru         # POST /comments
│
├── 📂 ALBUMS (3 peticiones)
│   ├── get-all-albums.bru         # GET /albums
│   ├── get-album-by-id.bru        # GET /albums/1
│   └── create-album.bru           # POST /albums
│
├── 📂 PHOTOS (2 peticiones)
│   ├── get-all-photos.bru         # GET /photos
│   └── get-photos-by-album.bru    # GET /photos?albumId=1
│
├── 📂 TODOS (3 peticiones)
│   ├── get-all-todos.bru          # GET /todos
│   ├── get-todo-by-id.bru         # GET /todos/1
│   └── create-todo.bru            # POST /todos
│
└── 📂 USERS (2 peticiones)
    ├── get-all-users.bru          # GET /users
    └── get-user-by-id.bru         # GET /users/1
```

**Total: 19 peticiones organizadas** ✅

---

## 🚀 Cómo Usar la Colección

### 1. Abrir la colección en Bruno

#### Opción A: Usando la extensión de VS Code
1. Abre VS Code en la carpeta `08-09-Taller_Bruno`
2. La extensión de Bruno detectará automáticamente el archivo `bruno.json`
3. Verás todas las peticiones en el panel lateral de Bruno

#### Opción B: Usando Bruno Desktop
1. Abre la aplicación Bruno
2. File → Open Collection
3. Selecciona la carpeta `08-09-Taller_Bruno`

### 2. Ejecutar peticiones

Para cada archivo `.bru`:
1. Haz clic en el archivo en el explorador de Bruno
2. Presiona el botón **"Send"** o usa `Ctrl + Enter`
3. Observa:
   - **Status Code** (200, 201, etc.)
   - **Response Time** (tiempo de respuesta)
   - **Response Body** (datos JSON devueltos)
   - **Headers** (cabeceras de respuesta)

### 3. Modificar peticiones

Puedes editar cualquier archivo `.bru` para:
- Cambiar IDs en las URLs
- Modificar el body JSON
- Agregar headers personalizados
- Cambiar query parameters

---

## 📊 Tabla Completa de Peticiones

| # | Archivo | Método | Endpoint | Descripción | Status |
|---|---------|--------|----------|-------------|--------|
| 1 | `get-all-posts.bru` | GET | `/posts` | Obtener todos los posts | 200 |
| 2 | `get-post-by-id.bru` | GET | `/posts/1` | Obtener post por ID | 200 |
| 3 | `create-post.bru` | POST | `/posts` | Crear nuevo post | 201 |
| 4 | `update-post-put.bru` | PUT | `/posts/1` | Actualizar post completo | 200 |
| 5 | `update-post-title.bru` | PATCH | `/posts/1` | Actualizar parcialmente | 200 |
| 6 | `delete-post.bru` | DELETE | `/posts/1` | Eliminar post | 200 |
| 7 | `get-all-comments.bru` | GET | `/comments` | Obtener todos los comentarios | 200 |
| 8 | `get-comments-by-post.bru` | GET | `/comments?postId=1` | Comentarios por post | 200 |
| 9 | `create-comment.bru` | POST | `/comments` | Crear comentario | 201 |
| 10 | `get-all-albums.bru` | GET | `/albums` | Obtener todos los álbumes | 200 |
| 11 | `get-album-by-id.bru` | GET | `/albums/1` | Obtener álbum por ID | 200 |
| 12 | `create-album.bru` | POST | `/albums` | Crear álbum | 201 |
| 13 | `get-all-photos.bru` | GET | `/photos` | Obtener todas las fotos | 200 |
| 14 | `get-photos-by-album.bru` | GET | `/photos?albumId=1` | Fotos por álbum | 200 |
| 15 | `get-all-todos.bru` | GET | `/todos` | Obtener todas las tareas | 200 |
| 16 | `get-todo-by-id.bru` | GET | `/todos/1` | Obtener tarea por ID | 200 |
| 17 | `create-todo.bru` | POST | `/todos` | Crear tarea | 201 |
| 18 | `get-all-users.bru` | GET | `/users` | Obtener todos los usuarios | 200 |
| 19 | `get-user-by-id.bru` | GET | `/users/1` | Obtener usuario por ID | 200 |

---

## 🎓 Conceptos Aprendidos

### 1. **Métodos HTTP**

#### GET - Obtener datos
```
GET /posts/1
No requiere body
```

#### POST - Crear recursos
```
POST /posts
Body: { "title": "foo", "body": "bar", "userId": 1 }
```

#### PUT - Actualizar completo
```
PUT /posts/1
Body: { "id": 1, "title": "foo", "body": "bar", "userId": 1 }
Requiere TODOS los campos
```

#### PATCH - Actualizar parcial
```
PATCH /posts/1
Body: { "title": "updated title" }
Solo los campos a actualizar
```

#### DELETE - Eliminar
```
DELETE /posts/1
No requiere body
```

### 2. **Códigos de Respuesta HTTP**

| Código | Significado | Cuándo aparece |
|--------|-------------|----------------|
| **200 OK** | Éxito | GET, PUT, PATCH, DELETE exitosos |
| **201 Created** | Creado | POST exitoso |
| **204 No Content** | Sin contenido | DELETE exitoso (alternativa) |
| **400 Bad Request** | Petición incorrecta | Body inválido |
| **404 Not Found** | No encontrado | Recurso no existe |
| **500 Server Error** | Error del servidor | Problema en el servidor |

### 3. **Tipos de Parámetros**

#### Path Parameters (en la URL)
```
/posts/1
       ↑
       ID en la ruta
```

#### Query Parameters (después de ?)
```
/comments?postId=1
          ↑
          Filtro por post
```

#### Body Parameters (en el cuerpo JSON)
```json
{
  "title": "foo",
  "body": "bar",
  "userId": 1
}
```

### 4. **Headers Importantes**

```http
Content-Type: application/json
```
- Indica que el body es JSON
- Requerido en POST, PUT, PATCH

---

## 🔍 Diferencias: PUT vs PATCH

### PUT - Reemplazo Completo
```json
PUT /posts/1
{
  "id": 1,
  "title": "nuevo título",
  "body": "nuevo contenido",
  "userId": 1
}
```
- Requiere **todos los campos**
- Reemplaza el recurso completo
- Si omites un campo, se elimina

### PATCH - Actualización Parcial
```json
PATCH /posts/1
{
  "title": "solo cambio el título"
}
```
- Solo los campos a modificar
- Mantiene los demás campos intactos
- Más eficiente para cambios pequeños

---

## 📈 Recursos de JSONPlaceholder

| Recurso | Cantidad | Descripción |
|---------|----------|-------------|
| `/posts` | 100 | Publicaciones de blog |
| `/comments` | 500 | Comentarios en posts |
| `/albums` | 100 | Álbumes de fotos |
| `/photos` | 5000 | Fotos en álbumes |
| `/todos` | 200 | Lista de tareas |
| `/users` | 10 | Usuarios del sistema |

---

## 💡 Ventajas de Bruno sobre Postman

1. ✅ **Open Source** - Código abierto y gratuito
2. ✅ **Git-Friendly** - Archivos `.bru` en texto plano
3. ✅ **Sin Cuenta** - No requiere registro
4. ✅ **Offline** - Funciona sin conexión
5. ✅ **Ligero** - Menos consumo de recursos
6. ✅ **VS Code Integration** - Extensión nativa
7. ✅ **Version Control** - Fácil de versionar con Git

---

## 🧪 Ejercicios Prácticos Sugeridos

### Nivel Básico
1. ✅ Ejecutar todas las peticiones GET
2. ✅ Observar los códigos de respuesta
3. ✅ Analizar la estructura JSON de las respuestas

### Nivel Intermedio
4. ✅ Modificar los IDs en las URLs (probar con /posts/2, /posts/3)
5. ✅ Cambiar los valores en el body de POST
6. ✅ Probar diferentes query parameters (postId=2, albumId=3)

### Nivel Avanzado
7. ✅ Crear peticiones para obtener posts de un usuario específico
8. ✅ Combinar parámetros: `/comments?postId=1&id=5`
9. ✅ Documentar qué pasa si envías un ID inválido (999999)

---

## 📚 Documentación de Referencia

- [Bruno Official Docs](https://docs.usebruno.com/)
- [JSONPlaceholder Guide](https://jsonplaceholder.typicode.com/guide/)
- [HTTP Methods - MDN](https://developer.mozilla.org/es/docs/Web/HTTP/Methods)
- [HTTP Status Codes](https://developer.mozilla.org/es/docs/Web/HTTP/Status)

---

## ✅ Checklist de Completación del Taller

- [x] Instalar Bruno en VS Code
- [x] Crear archivo `bruno.json` de configuración
- [x] Crear 19 archivos `.bru` con todas las peticiones
- [x] Organizar peticiones por recurso (posts, comments, albums, etc.)
- [x] Documentar cada petición con comentarios
- [x] Probar todas las peticiones
- [ ] Verificar códigos de respuesta (200, 201, etc.)
- [ ] Analizar las respuestas JSON
- [ ] Experimentar con diferentes parámetros

---

## 🎯 Resultado Esperado

Al finalizar este taller, deberías poder:

1. ✅ Entender cómo funcionan las APIs REST
2. ✅ Usar todos los métodos HTTP correctamente
3. ✅ Diferenciar entre PUT y PATCH
4. ✅ Trabajar con query parameters y path parameters
5. ✅ Interpretar códigos de respuesta HTTP
6. ✅ Usar Bruno para testing de APIs
7. ✅ Organizar colecciones de peticiones

---

## 👨‍💻 Autor

Desarrollado para el curso de Aplicaciones Web - Semestre 2025B

---

## 📝 Notas Importantes

### ⚠️ JSONPlaceholder es una API de PRUEBA

- Las peticiones POST/PUT/PATCH/DELETE **no modifican la base de datos real**
- Solo simulan la respuesta que daría un servidor real
- Ideal para aprender sin riesgo de romper nada

### 💡 Tips para Usar Bruno

1. **Usa la documentación integrada**: Cada archivo `.bru` tiene una sección `docs`
2. **Shortcuts útiles**:
   - `Ctrl + Enter` - Ejecutar petición
   - `Ctrl + S` - Guardar cambios
3. **Ver respuestas**: Pestaña "Response" muestra el JSON formateado
4. **Ver headers**: Pestaña "Headers" muestra cabeceras de respuesta y petición

---

## 🎉 Conclusión

Este taller proporciona una base sólida para trabajar con APIs REST. Bruno es una herramienta profesional que te permitirá probar y documentar APIs de manera eficiente, con la ventaja de que todo queda versionado en Git como archivos de texto plano.

¡Explora, experimenta y aprende! 🚀