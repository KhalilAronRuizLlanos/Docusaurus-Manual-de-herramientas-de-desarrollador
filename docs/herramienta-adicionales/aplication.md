# Application: Manejo de Almacenamiento

El panel **Application** de DevTools te proporciona una interfaz completa para examinar y manipular los distintos mecanismos de almacenamiento que utilizan las aplicaciones web. Desde aquí podrás visualizar, modificar y eliminar datos persistentes como cookies, cachés y bases de datos del lado del cliente.

## 1. Web Storage

Mecanismos de almacenamiento clave-valor para datos del cliente:

* **LocalStorage**
  * Mantiene los datos incluso al cerrar el navegador
  * Perfecto para preferencias de usuario persistentes

* **SessionStorage**
  * Los datos se eliminan cuando se cierra la pestaña
  * Ideal para almacenamiento temporal durante la sesión

**Operaciones disponibles:**
* Edición directa de claves y valores
* Creación y eliminación de entradas mediante menú contextual


**Manipulación desde consola:**

```javascript
localStorage.setItem('theme', 'dark');
console.log(localStorage.getItem('theme')); // 'dark'
```

## 2. IndexedDB

Base de datos NoSQL incorporada para almacenamiento estructurado:

* Permite guardar objetos JavaScript complejos
* Capacidad para manejar grandes volúmenes de información
* Esencial para aplicaciones progresivas (PWAs) y funcionalidad offline

**Características de inspección:**
* Navegación por bases de datos
* Exploración de object stores (tablas)
* Ejecución de operaciones desde consola

```javascript
// Ejemplo básico de acceso a IndexedDB
let dbRequest = indexedDB.open("MiBase", 1);

dbRequest.onsuccess = function(event) {
  let db = event.target.result;
  let tx = db.transaction("usuarios", "readonly");
  let store = tx.objectStore("usuarios");
  let getReq = store.getAll();

  getReq.onsuccess = () => console.log(getReq.result);
};
```

## 3. Cookies

Almacenan información entre peticiones HTTP como sesiones o preferencias.

**Propiedades visibles:**
* Nombre, valor, dominio, ruta y caducidad

**Configuraciones de seguridad:**
* **Secure:** Transmisión exclusiva por HTTPS
* **HttpOnly:** Inaccesible desde código JavaScript
* **SameSite:** Control de envío cross-site

Las DevTools permiten filtrar cookies por dominio, ruta o nombre.

> **Importante:** Evita almacenar datos sensibles en cookies sin cifrar.

## 4. Caché y Service Workers

Herramientas para experiencias offline y mejora de rendimiento:

**Service Workers:**
* Interceptores de peticiones de red
* Habilitan funcionalidad offline y notificaciones push
* Desde el panel puedes ver su estado (Installing/Waiting/Activated)
* Opciones para actualizar o desregistrar manualmente

**Cache Storage:**
* Visualización de recursos estáticos guardados por Service Workers
* Acceso al contenido de cachés específicas

## 5. Limpieza de Datos

La sección **Application > Clear storage** permite eliminar:

* LocalStorage y SessionStorage
* Cookies
* Cache Storage
* IndexedDB
* Web SQL

Esta función resulta especialmente útil para realizar pruebas en estado limpio o solucionar problemas causados por datos corruptos.