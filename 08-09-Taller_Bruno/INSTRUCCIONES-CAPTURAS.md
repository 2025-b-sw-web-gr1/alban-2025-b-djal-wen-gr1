# 📸 Guía para Tomar Capturas de Pantalla

## Orden Sugerido de Ejecución

Ejecuta las peticiones en este orden y toma una captura de cada una:

---

## 🟢 FASE 1: POSTS (6 capturas)

### 1. GET All Posts
**Archivo:** `get-all-posts.bru`
- Presiona `Ctrl + Enter` o botón "Send"
- **Captura:** Muestra el array de 100 posts y el status 200
- **Guardar como:** `screenshots/01-get-all-posts.png`

### 2. GET Post by ID
**Archivo:** `get-post-by-id.bru`
- Ejecuta la petición
- **Captura:** Muestra el objeto post con id=1 y status 200
- **Guardar como:** `screenshots/02-get-post-by-id.png`

### 3. POST Create Post
**Archivo:** `create-post.bru`
- Ejecuta la petición
- **Captura:** Muestra el post creado con id=101 y status 201
- **Guardar como:** `screenshots/03-create-post.png`

### 4. PUT Update Post
**Archivo:** `update-post-put.bru`
- Ejecuta la petición
- **Captura:** Muestra el post actualizado y status 200
- **Guardar como:** `screenshots/04-update-post-put.png`

### 5. PATCH Update Post Title
**Archivo:** `update-post-title.bru`
- Ejecuta la petición
- **Captura:** Muestra solo el título actualizado y status 200
- **Guardar como:** `screenshots/05-update-post-title.png`

### 6. DELETE Post
**Archivo:** `delete-post.bru`
- Ejecuta la petición
- **Captura:** Muestra {} (objeto vacío) y status 200
- **Guardar como:** `screenshots/06-delete-post.png`

---

## 💬 FASE 2: COMMENTS (3 capturas)

### 7. GET All Comments
**Archivo:** `get-all-comments.bru`
- Ejecuta la petición
- **Captura:** Muestra array de 500 comentarios y status 200
- **Guardar como:** `screenshots/07-get-all-comments.png`

### 8. GET Comments by Post
**Archivo:** `get-comments-by-post.bru`
- Ejecuta la petición
- **Captura:** Muestra comentarios filtrados por postId=1 y status 200
- **Guardar como:** `screenshots/08-get-comments-by-post.png`

### 9. POST Create Comment
**Archivo:** `create-comment.bru`
- Ejecuta la petición
- **Captura:** Muestra comentario creado con id=501 y status 201
- **Guardar como:** `screenshots/09-create-comment.png`

---

## 📷 FASE 3: ALBUMS (3 capturas)

### 10. GET All Albums
**Archivo:** `get-all-albums.bru`
- Ejecuta la petición
- **Captura:** Muestra array de 100 álbumes y status 200
- **Guardar como:** `screenshots/10-get-all-albums.png`

### 11. GET Album by ID
**Archivo:** `get-album-by-id.bru`
- Ejecuta la petición
- **Captura:** Muestra álbum con id=1 y status 200
- **Guardar como:** `screenshots/11-get-album-by-id.png`

### 12. POST Create Album
**Archivo:** `create-album.bru`
- Ejecuta la petición
- **Captura:** Muestra álbum creado con id=101 y status 201
- **Guardar como:** `screenshots/12-create-album.png`

---

## 🖼️ FASE 4: PHOTOS (2 capturas)

### 13. GET All Photos
**Archivo:** `get-all-photos.bru`
- ⚠️ Esta petición puede tardar 2-3 segundos
- Ejecuta la petición
- **Captura:** Muestra array de 5000 fotos y status 200
- **Guardar como:** `screenshots/13-get-all-photos.png`

### 14. GET Photos by Album
**Archivo:** `get-photos-by-album.bru`
- Ejecuta la petición
- **Captura:** Muestra 50 fotos filtradas por albumId=1 y status 200
- **Guardar como:** `screenshots/14-get-photos-by-album.png`

---

## ✅ FASE 5: TODOS (3 capturas)

### 15. GET All Todos
**Archivo:** `get-all-todos.bru`
- Ejecuta la petición
- **Captura:** Muestra array de 200 tareas y status 200
- **Guardar como:** `screenshots/15-get-all-todos.png`

### 16. GET Todo by ID
**Archivo:** `get-todo-by-id.bru`
- Ejecuta la petición
- **Captura:** Muestra tarea con id=1 y status 200
- **Guardar como:** `screenshots/16-get-todo-by-id.png`

### 17. POST Create Todo
**Archivo:** `create-todo.bru`
- Ejecuta la petición
- **Captura:** Muestra tarea creada con id=201 y status 201
- **Guardar como:** `screenshots/17-create-todo.png`

---

## 👥 FASE 6: USERS (2 capturas)

### 18. GET All Users
**Archivo:** `get-all-users.bru`
- Ejecuta la petición
- **Captura:** Muestra array de 10 usuarios y status 200
- **Guardar como:** `screenshots/18-get-all-users.png`

### 19. GET User by ID
**Archivo:** `get-user-by-id.bru`
- Ejecuta la petición
- **Captura:** Muestra usuario completo con id=1 y status 200
- **Guardar como:** `screenshots/19-get-user-by-id.png`

---

## 📋 Tips para las Capturas

### Qué Incluir en Cada Captura:

1. ✅ **Nombre del archivo .bru** (en el explorador)
2. ✅ **Método HTTP** (GET, POST, PUT, etc.)
3. ✅ **URL completa**
4. ✅ **Status Code** (200, 201, etc.)
5. ✅ **Response Time** (ms)
6. ✅ **Response Body** (JSON formateado)
7. ✅ **Headers** (si es relevante)

### Cómo Tomar una Buena Captura:

1. **Maximiza la ventana de Bruno** para ver todo claramente
2. **Expande el panel de respuesta** para mostrar el JSON
3. **Verifica que se vea el status code** en la parte superior
4. **Usa una herramienta de captura**:
   - Windows: `Win + Shift + S` (Recorte de pantalla)
   - Alt: `PrtScn` (Imprimir pantalla)
5. **Guarda con el nombre exacto** indicado arriba

### Elementos Importantes a Verificar:

#### Para peticiones GET:
- ✅ Status: 200 OK
- ✅ Array o objeto en response
- ✅ Datos completos

#### Para peticiones POST:
- ✅ Status: 201 Created
- ✅ Objeto creado con nuevo ID
- ✅ Body enviado visible

#### Para peticiones PUT/PATCH:
- ✅ Status: 200 OK
- ✅ Objeto actualizado
- ✅ Cambios reflejados

#### Para peticiones DELETE:
- ✅ Status: 200 OK
- ✅ Response vacío {}

---

## 🎯 Checklist de Capturas

Marca cada captura conforme la tomes:

### Posts
- [ ] 01-get-all-posts.png
- [ ] 02-get-post-by-id.png
- [ ] 03-create-post.png
- [ ] 04-update-post-put.png
- [ ] 05-update-post-title.png
- [ ] 06-delete-post.png

### Comments
- [ ] 07-get-all-comments.png
- [ ] 08-get-comments-by-post.png
- [ ] 09-create-comment.png

### Albums
- [ ] 10-get-all-albums.png
- [ ] 11-get-album-by-id.png
- [ ] 12-create-album.png

### Photos
- [ ] 13-get-all-photos.png
- [ ] 14-get-photos-by-album.png

### Todos
- [ ] 15-get-all-todos.png
- [ ] 16-get-todo-by-id.png
- [ ] 17-create-todo.png

### Users
- [ ] 18-get-all-users.png
- [ ] 19-get-user-by-id.png

**Total: 19 capturas** ✅

---

## ⚡ Atajos Útiles

| Atajo | Acción |
|-------|--------|
| `Ctrl + Enter` | Ejecutar petición |
| `Win + Shift + S` | Captura de pantalla (Windows) |
| `Ctrl + S` | Guardar archivo .bru |
| `F11` | Pantalla completa |

---

## 💡 Sugerencias

1. **Toma todas las capturas en una sesión** para mantener consistencia
2. **Verifica que los nombres coincidan** exactamente con los indicados
3. **Revisa cada captura** antes de continuar a la siguiente
4. **Guarda todas en la carpeta screenshots/** 
5. **Mantén el orden numérico** para facilitar la organización

---

## 🚀 Después de las Capturas

Una vez tengas todas las capturas:

1. ✅ Verifica que tienes las 19 imágenes
2. ✅ Revisa que estén en la carpeta `screenshots/`
3. ✅ Comprueba que los nombres sean correctos
4. ✅ Abre `01-Evidencias.md` para verificar que se ven correctamente
5. ✅ Marca el checklist del archivo de evidencias

---

¡Éxito con las capturas! 📸✨