# Bruno API Testing - Evidencias
## Nombre: Dorian Joel Alban Lucas
## Fecha: 11 de Noviembre de 2025

---

## 📋 Índice de Peticiones Probadas

1. [Posts (6 peticiones)](#1-posts)
2. [Comments (3 peticiones)](#2-comments)
3. [Albums (3 peticiones)](#3-albums)
4. [Photos (2 peticiones)](#4-photos)
5. [Todos (3 peticiones)](#5-todos)
6. [Users (2 peticiones)](#6-users)

---

## 1. Posts

### 1.1 GET /posts - Obtener todos los posts

**Archivo:** `get-all-posts.bru`

**Pasos para ejecutar:**
1. Abre el archivo `get-all-posts.bru` en Bruno
2. Presiona el botón "Send" o usa `Ctrl + Enter`
3. Observa el código de respuesta: **200 OK**
4. Verifica que devuelve un array de 100 posts

**Captura de pantalla:**



**Resultado esperado:**
- ✅ Status: 200 OK
- ✅ Array con 100 posts
- ✅ Cada post tiene: userId, id, title, body

---

### 1.2 GET /posts/1 - Obtener post por ID

**Archivo:** `get-post-by-id.bru`

**Pasos para ejecutar:**
1. Abre el archivo `get-post-by-id.bru` en Bruno
2. Presiona "Send"
3. Observa el código de respuesta: **200 OK**
4. Verifica que devuelve el post con id=1

**Captura de pantalla:**

![GET Post by ID](./screenshots/02-get-post-by-id.png)

**Resultado esperado:**
- ✅ Status: 200 OK
- ✅ Objeto con id: 1
- ✅ Contiene: userId, id, title, body

---

### 1.3 POST /posts - Crear nuevo post

**Archivo:** `create-post.bru`

**Pasos para ejecutar:**
1. Abre el archivo `create-post.bru` en Bruno
2. Verifica el body JSON:
   ```json
   {
     "title": "foo",
     "body": "bar",
     "userId": 1
   }
   ```
3. Presiona "Send"
4. Observa el código de respuesta: **201 Created**
5. Verifica que devuelve el post creado con id=101

**Captura de pantalla:**

![POST Create Post](./screenshots/03-create-post.png)

**Resultado esperado:**
- ✅ Status: 201 Created
- ✅ Post creado con id: 101
- ✅ Contiene los datos enviados

---

### 1.4 PUT /posts/1 - Actualizar post completo

**Archivo:** `update-post-put.bru`

**Pasos para ejecutar:**
1. Abre el archivo `update-post-put.bru` en Bruno
2. Verifica el body JSON (requiere TODOS los campos):
   ```json
   {
     "id": 1,
     "title": "foo",
     "body": "bar",
     "userId": 1
   }
   ```
3. Presiona "Send"
4. Observa el código de respuesta: **200 OK**

**Captura de pantalla:**

![PUT Update Post](./screenshots/04-update-post-put.png)

**Resultado esperado:**
- ✅ Status: 200 OK
- ✅ Post actualizado con los nuevos valores

---

### 1.5 PATCH /posts/1 - Actualizar título de post

**Archivo:** `update-post-title.bru`

**Pasos para ejecutar:**
1. Abre el archivo `update-post-title.bru` en Bruno
2. Verifica el body JSON (solo el campo a actualizar):
   ```json
   {
     "title": "updated title"
   }
   ```
3. Presiona "Send"
4. Observa el código de respuesta: **200 OK**
5. Nota la diferencia con PUT: solo enviamos el campo que queremos cambiar

**Captura de pantalla:**

![PATCH Update Post Title](./screenshots/05-update-post-title.png)

**Resultado esperado:**
- ✅ Status: 200 OK
- ✅ Solo el título se actualizó
- ✅ Los demás campos permanecen intactos

---

### 1.6 DELETE /posts/1 - Eliminar post

**Archivo:** `delete-post.bru`

**Pasos para ejecutar:**
1. Abre el archivo `delete-post.bru` en Bruno
2. Presiona "Send"
3. Observa el código de respuesta: **200 OK**
4. Verifica que devuelve un objeto vacío {}

**Captura de pantalla:**

![DELETE Post](./screenshots/06-delete-post.png)

**Resultado esperado:**
- ✅ Status: 200 OK
- ✅ Response: {} (objeto vacío)

---

## 2. Comments

### 2.1 GET /comments - Obtener todos los comentarios

**Archivo:** `get-all-comments.bru`

**Pasos para ejecutar:**
1. Abre el archivo `get-all-comments.bru` en Bruno
2. Presiona "Send"
3. Observa el código de respuesta: **200 OK**
4. Verifica que devuelve un array de 500 comentarios

**Captura de pantalla:**

![GET All Comments](./screenshots/07-get-all-comments.png)

**Resultado esperado:**
- ✅ Status: 200 OK
- ✅ Array con 500 comentarios
- ✅ Cada comentario tiene: postId, id, name, email, body

---

### 2.2 GET /comments?postId=1 - Obtener comentarios por post

**Archivo:** `get-comments-by-post.bru`

**Pasos para ejecutar:**
1. Abre el archivo `get-comments-by-post.bru` en Bruno
2. Observa el query parameter: `postId=1`
3. Presiona "Send"
4. Observa el código de respuesta: **200 OK**
5. Verifica que devuelve solo los comentarios del post 1

**Captura de pantalla:**

![GET Comments by Post](./screenshots/08-get-comments-by-post.png)

**Resultado esperado:**
- ✅ Status: 200 OK
- ✅ Array con comentarios filtrados
- ✅ Todos tienen postId: 1

---

### 2.3 POST /comments - Crear nuevo comentario

**Archivo:** `create-comment.bru`

**Pasos para ejecutar:**
1. Abre el archivo `create-comment.bru` en Bruno
2. Verifica el body JSON:
   ```json
   {
     "name": "test",
     "email": "test@example.com",
     "body": "Nice!",
     "postId": 1
   }
   ```
3. Presiona "Send"
4. Observa el código de respuesta: **201 Created**

**Captura de pantalla:**

![POST Create Comment](./screenshots/09-create-comment.png)

**Resultado esperado:**
- ✅ Status: 201 Created
- ✅ Comentario creado con id: 501

---

## 3. Albums

### 3.1 GET /albums - Obtener todos los álbumes

**Archivo:** `get-all-albums.bru`

**Pasos para ejecutar:**
1. Abre el archivo `get-all-albums.bru` en Bruno
2. Presiona "Send"
3. Observa el código de respuesta: **200 OK**
4. Verifica que devuelve un array de 100 álbumes

**Captura de pantalla:**

![GET All Albums](./screenshots/10-get-all-albums.png)

**Resultado esperado:**
- ✅ Status: 200 OK
- ✅ Array con 100 álbumes
- ✅ Cada álbum tiene: userId, id, title

---

### 3.2 GET /albums/1 - Obtener álbum por ID

**Archivo:** `get-album-by-id.bru`

**Pasos para ejecutar:**
1. Abre el archivo `get-album-by-id.bru` en Bruno
2. Presiona "Send"
3. Observa el código de respuesta: **200 OK**

**Captura de pantalla:**

![GET Album by ID](./screenshots/11-get-album-by-id.png)

**Resultado esperado:**
- ✅ Status: 200 OK
- ✅ Objeto álbum con id: 1

---

### 3.3 POST /albums - Crear nuevo álbum

**Archivo:** `create-album.bru`

**Pasos para ejecutar:**
1. Abre el archivo `create-album.bru` en Bruno
2. Verifica el body JSON:
   ```json
   {
     "title": "Vacation",
     "userId": 1
   }
   ```
3. Presiona "Send"
4. Observa el código de respuesta: **201 Created**

**Captura de pantalla:**

![POST Create Album](./screenshots/12-create-album.png)

**Resultado esperado:**
- ✅ Status: 201 Created
- ✅ Álbum creado con id: 101

---

## 4. Photos

### 4.1 GET /photos - Obtener todas las fotos

**Archivo:** `get-all-photos.bru`

**Pasos para ejecutar:**
1. Abre el archivo `get-all-photos.bru` en Bruno
2. Presiona "Send"
3. **⚠️ NOTA:** Esta petición puede tardar unos segundos (5000 fotos)
4. Observa el código de respuesta: **200 OK**

**Captura de pantalla:**

![GET All Photos](./screenshots/13-get-all-photos.png)

**Resultado esperado:**
- ✅ Status: 200 OK
- ✅ Array con 5000 fotos
- ✅ Cada foto tiene: albumId, id, title, url, thumbnailUrl
- ⏱️ Tiempo de respuesta: ~1-3 segundos

---

### 4.2 GET /photos?albumId=1 - Obtener fotos por álbum

**Archivo:** `get-photos-by-album.bru`

**Pasos para ejecutar:**
1. Abre el archivo `get-photos-by-album.bru` en Bruno
2. Observa el query parameter: `albumId=1`
3. Presiona "Send"
4. Observa el código de respuesta: **200 OK**

**Captura de pantalla:**

![GET Photos by Album](./screenshots/14-get-photos-by-album.png)

**Resultado esperado:**
- ✅ Status: 200 OK
- ✅ Array con 50 fotos del álbum 1
- ✅ Todas tienen albumId: 1

---

## 5. Todos

### 5.1 GET /todos - Obtener todas las tareas

**Archivo:** `get-all-todos.bru`

**Pasos para ejecutar:**
1. Abre el archivo `get-all-todos.bru` en Bruno
2. Presiona "Send"
3. Observa el código de respuesta: **200 OK**
4. Verifica que devuelve un array de 200 tareas

**Captura de pantalla:**

![GET All Todos](./screenshots/15-get-all-todos.png)

**Resultado esperado:**
- ✅ Status: 200 OK
- ✅ Array con 200 tareas
- ✅ Cada tarea tiene: userId, id, title, completed

---

### 5.2 GET /todos/1 - Obtener tarea por ID

**Archivo:** `get-todo-by-id.bru`

**Pasos para ejecutar:**
1. Abre el archivo `get-todo-by-id.bru` en Bruno
2. Presiona "Send"
3. Observa el código de respuesta: **200 OK**

**Captura de pantalla:**

![GET Todo by ID](./screenshots/16-get-todo-by-id.png)

**Resultado esperado:**
- ✅ Status: 200 OK
- ✅ Objeto tarea con id: 1

---

### 5.3 POST /todos - Crear nueva tarea

**Archivo:** `create-todo.bru`

**Pasos para ejecutar:**
1. Abre el archivo `create-todo.bru` en Bruno
2. Verifica el body JSON:
   ```json
   {
     "title": "Buy milk",
     "completed": false,
     "userId": 1
   }
   ```
3. Presiona "Send"
4. Observa el código de respuesta: **201 Created**

**Captura de pantalla:**

![POST Create Todo](./screenshots/17-create-todo.png)

**Resultado esperado:**
- ✅ Status: 201 Created
- ✅ Tarea creada con id: 201

---

## 6. Users

### 6.1 GET /users - Obtener todos los usuarios

**Archivo:** `get-all-users.bru`

**Pasos para ejecutar:**
1. Abre el archivo `get-all-users.bru` en Bruno
2. Presiona "Send"
3. Observa el código de respuesta: **200 OK**
4. Verifica que devuelve un array de 10 usuarios

**Captura de pantalla:**

![GET All Users](./screenshots/18-get-all-users.png)

**Resultado esperado:**
- ✅ Status: 200 OK
- ✅ Array con 10 usuarios
- ✅ Cada usuario tiene: id, name, username, email, address, phone, website, company

---

### 6.2 GET /users/1 - Obtener usuario por ID

**Archivo:** `get-user-by-id.bru`

**Pasos para ejecutar:**
1. Abre el archivo `get-user-by-id.bru` en Bruno
2. Presiona "Send"
3. Observa el código de respuesta: **200 OK**
4. Verifica que devuelve el usuario completo con todos sus datos

**Captura de pantalla:**

![GET User by ID](./screenshots/19-get-user-by-id.png)

**Resultado esperado:**
- ✅ Status: 200 OK
- ✅ Objeto usuario completo con address anidado y company

---

## 🎓 Conclusiones

### Conceptos Aprendidos:

1. ✅ **Métodos HTTP**
   - GET: Para obtener datos
   - POST: Para crear recursos (Status 201)
   - PUT: Para actualizar completo (requiere todos los campos)
   - PATCH: Para actualizar parcial (solo campos específicos)
   - DELETE: Para eliminar recursos

2. ✅ **Códigos de Respuesta**
   - 200 OK: Operación exitosa
   - 201 Created: Recurso creado exitosamente
   - 404 Not Found: Recurso no encontrado

3. ✅ **Tipos de Parámetros**
   - Path parameters: IDs en la URL (`/posts/1`)
   - Query parameters: Filtros (`?postId=1`)
   - Body parameters: Datos JSON en el cuerpo

4. ✅ **Headers HTTP**
   - Content-Type: application/json
   - Requerido en POST, PUT, PATCH

### Diferencias Clave: PUT vs PATCH

- **PUT**: Reemplaza el recurso completo (requiere TODOS los campos)
- **PATCH**: Actualiza solo campos específicos (más eficiente)

### Ventajas de Bruno:

- ✅ Open source y gratuito
- ✅ Archivos .bru en texto plano (fácil de versionar con Git)
- ✅ No requiere cuenta
- ✅ Integración con VS Code
- ✅ Interfaz limpia y rápida
