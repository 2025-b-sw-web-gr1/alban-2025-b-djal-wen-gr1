# 🚀 Guía Rápida de Uso - Bruno

## Pasos para Empezar

### 1. Abrir la Colección en VS Code

```bash
# Abre VS Code en esta carpeta
code .
```

La extensión de Bruno detectará automáticamente la colección.

---

## 2. Probar las Peticiones

### 🟢 Peticiones GET (Lectura)

#### Obtener todos los posts
```
Archivo: get-all-posts.bru
Método: GET
URL: https://jsonplaceholder.typicode.com/posts
Resultado: Array de 100 posts
```

#### Obtener un post específico
```
Archivo: get-post-by-id.bru
Método: GET
URL: https://jsonplaceholder.typicode.com/posts/1
Resultado: Objeto del post con id=1
```

### 🔵 Peticiones POST (Crear)

#### Crear un nuevo post
```
Archivo: create-post.bru
Método: POST
URL: https://jsonplaceholder.typicode.com/posts
Body: 
{
  "title": "foo",
  "body": "bar",
  "userId": 1
}
Resultado: Post creado con id=101
```

### 🟡 Peticiones PUT (Actualizar completo)

#### Actualizar post completo
```
Archivo: update-post-put.bru
Método: PUT
URL: https://jsonplaceholder.typicode.com/posts/1
Body: Objeto completo con todos los campos
Resultado: Post actualizado
```

### 🟠 Peticiones PATCH (Actualizar parcial)

#### Actualizar solo el título
```
Archivo: update-post-title.bru
Método: PATCH
URL: https://jsonplaceholder.typicode.com/posts/1
Body: 
{
  "title": "updated title"
}
Resultado: Post con título actualizado
```

### 🔴 Peticiones DELETE (Eliminar)

#### Eliminar un post
```
Archivo: delete-post.bru
Método: DELETE
URL: https://jsonplaceholder.typicode.com/posts/1
Resultado: {} (objeto vacío)
```

---

## 3. Entender las Respuestas

### Códigos de Estado

| Código | Color | Significado |
|--------|-------|-------------|
| 200 | 🟢 | OK - Operación exitosa |
| 201 | 🟢 | Created - Recurso creado |
| 204 | 🟢 | No Content - Éxito sin contenido |
| 400 | 🔴 | Bad Request - Error en la petición |
| 404 | 🔴 | Not Found - Recurso no encontrado |
| 500 | 🔴 | Server Error - Error del servidor |

---

## 4. Probar Query Parameters

### Ejemplo: Filtrar comentarios por post

```
Archivo: get-comments-by-post.bru
URL: https://jsonplaceholder.typicode.com/comments?postId=1
                                                    ↑
                                         Query parameter
```

Puedes cambiar `postId=1` por `postId=2`, `postId=3`, etc.

---

## 5. Modificar las Peticiones

### Cambiar IDs en la URL

```
Original: /posts/1
Prueba:   /posts/2
Prueba:   /posts/50
Prueba:   /posts/999 (verás un error 404)
```

### Cambiar valores en el Body

```json
// Original
{
  "title": "foo",
  "body": "bar",
  "userId": 1
}

// Modificado
{
  "title": "Mi primer post",
  "body": "Este es el contenido de mi post",
  "userId": 5
}
```

---

## 6. Orden Recomendado para Probar

### Comienza con lo básico:

1. ✅ `get-all-users.bru` - Ver usuarios disponibles
2. ✅ `get-user-by-id.bru` - Ver detalles de un usuario
3. ✅ `get-all-posts.bru` - Ver todos los posts
4. ✅ `get-post-by-id.bru` - Ver un post específico

### Luego prueba creación:

5. ✅ `create-post.bru` - Crear un nuevo post
6. ✅ `create-comment.bru` - Crear un comentario
7. ✅ `create-todo.bru` - Crear una tarea

### Después actualización:

8. ✅ `update-post-put.bru` - Actualización completa
9. ✅ `update-post-title.bru` - Actualización parcial

### Finalmente eliminación:

10. ✅ `delete-post.bru` - Eliminar recurso

---

## 7. Atajos de Teclado

| Atajo | Acción |
|-------|--------|
| `Ctrl + Enter` | Ejecutar petición |
| `Ctrl + S` | Guardar cambios |
| `Ctrl + K` | Abrir búsqueda rápida |

---

## 8. Qué Observar en Cada Petición

### ✅ En la Pestaña "Request"
- Método HTTP (GET, POST, etc.)
- URL completa
- Headers (cabeceras)
- Body (cuerpo JSON si aplica)

### ✅ En la Pestaña "Response"
- **Status**: Código de respuesta (200, 201, etc.)
- **Time**: Tiempo de respuesta en ms
- **Size**: Tamaño de la respuesta
- **Body**: JSON con los datos devueltos
- **Headers**: Cabeceras de respuesta

---

## 9. Ejercicios Rápidos

### Ejercicio 1: Explorar Usuarios
```
1. Ejecuta get-all-users.bru
2. Observa cuántos usuarios hay
3. Prueba get-user-by-id.bru con diferentes IDs (1-10)
```

### Ejercicio 2: Crear Recursos
```
1. Ejecuta create-post.bru
2. Observa el ID que te devuelve (101)
3. Cambia el título y vuelve a ejecutar
4. Observa que siempre devuelve id=101 (es simulado)
```

### Ejercicio 3: Filtrar Datos
```
1. Ejecuta get-comments-by-post.bru con postId=1
2. Cuenta cuántos comentarios tiene
3. Cambia a postId=2
4. Compara los resultados
```

### Ejercicio 4: Diferencia PUT vs PATCH
```
1. Ejecuta update-post-put.bru (requiere todos los campos)
2. Ejecuta update-post-title.bru (solo un campo)
3. Compara las respuestas
```

---

## 10. Recursos de JSONPlaceholder

### URLs Base
```
Base URL: https://jsonplaceholder.typicode.com
```

### Endpoints Disponibles
```
/posts       → 100 publicaciones
/comments    → 500 comentarios
/albums      → 100 álbumes
/photos      → 5000 fotos (¡tarda un poco!)
/todos       → 200 tareas
/users       → 10 usuarios
```

---

## 🎯 Checklist de Verificación

- [ ] Ejecuté todas las peticiones GET
- [ ] Probé crear recursos con POST
- [ ] Entendí la diferencia entre PUT y PATCH
- [ ] Usé query parameters (?postId=1)
- [ ] Modifiqué IDs en las URLs
- [ ] Observé los códigos de respuesta
- [ ] Analicé el tiempo de respuesta
- [ ] Revisé los headers de respuesta
- [ ] Cambié valores en el body JSON
- [ ] Probé con IDs inválidos (999)

---

## ❓ Preguntas Frecuentes

### ¿Por qué las peticiones POST no persisten?
JSONPlaceholder es una API de prueba. Simula las respuestas pero no guarda los datos realmente.

### ¿Puedo cambiar la URL base?
Sí, puedes editar cualquier archivo `.bru` y cambiar la URL.

### ¿Qué pasa si obtengo error 404?
Significa que el recurso no existe. Verifica el ID en la URL.

### ¿Cómo sé si una petición fue exitosa?
- Status 200-299 = Éxito ✅
- Status 400-499 = Error del cliente ❌
- Status 500-599 = Error del servidor ❌

---

## 🎓 Próximos Pasos

Una vez domines JSONPlaceholder:

1. 🔜 Crea tu propia API con Node.js + Express
2. 🔜 Prueba APIs reales de servicios públicos
3. 🔜 Aprende sobre autenticación (JWT, OAuth)
4. 🔜 Explora GraphQL como alternativa a REST

---

## 💡 Tips Finales

1. **Experimenta sin miedo** - No puedes romper nada
2. **Lee las respuestas** - Contienen información valiosa
3. **Compara métodos** - GET vs POST vs PUT vs PATCH
4. **Usa la documentación** - Cada `.bru` tiene docs integradas
5. **Guarda tus cambios** - Bruno guarda todo en archivos de texto

---

¡Disfruta explorando las APIs! 🚀