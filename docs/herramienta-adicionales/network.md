# Network: Monitorización de Solicitudes

El panel **Network** de las DevTools es una herramienta esencial para inspeccionar, depurar y optimizar las solicitudes HTTP, tiempos de carga y comportamientos de red en cualquier aplicación web.

---

## 🔍 1. Filtrar solicitudes de manera eficiente

Cuando una página contiene muchas solicitudes, puede ser difícil encontrar lo que necesitas. Para facilitar el análisis:

### Filtrado por tipo de recurso:

Utiliza los botones para filtrar según el tipo:

- **XHR:** Peticiones AJAX o Fetch.
- **JS:** Archivos JavaScript.
- **CSS:** Hojas de estilo.
- **Img:** Imágenes.
- **Media:** Archivos de video o audio.

### Búsqueda rápida:

- Usa **Ctrl + F** (Windows) o **Cmd + F** (Mac) para buscar por nombre de archivo o URL.
- Aplica filtros avanzados como `status-code:404` o `domain:example.com` para resultados más específicos.

💡 **Sugerencia:** Haz clic derecho sobre cualquier encabezado de columna para personalizar las métricas visibles (como *Iniciador* o *Prioridad*).

---

## 📊 2. Información clave en la tabla

Cada solicitud en la tabla incluye datos importantes que ayudan a diagnosticar problemas de rendimiento:

- **Status:** Código de estado HTTP (ej. 200, 301, 404).
- **Type:** Tipo de recurso (document, script, fetch, etc.).
- **Size:** Peso de la respuesta (en versiones comprimida y sin comprimir).
- **Time:** Desglose de tiempos, incluyendo:
  - **TTFB (Time to First Byte):** Tiempo que tarda el servidor en responder.
  - **Content Download:** Tiempo necesario para descargar la respuesta.
- **Waterfall:** Gráfico en cascada que muestra:
  - Orden de carga de los recursos.
  - Recursos bloqueantes (por ejemplo, CSS que retrasa el renderizado).
  - Posibles cuellos de botella en el rendimiento.

⏱️ **Consejo:** Pasa el ratón sobre las barras del gráfico de cascada para obtener detalles adicionales como espera, conexión, DNS, SSL, envío y descarga.

---

## ⚙️ 3. Funciones avanzadas

El panel **Network** incluye opciones avanzadas para un análisis más profundo, especialmente en sesiones de depuración prolongadas:

### **Preserve log:**
- Conserva los registros de red entre recargas o cambios de página.
- Actívalo marcando la casilla en la parte superior del panel.

### **Disable cache:**
- Desactiva la caché del navegador para simular el comportamiento de una visita inicial.
- Ideal para pruebas sin recursos almacenados en caché. Actívalo junto con **Preserve log**.

### **Throttling de red:**
- Simula diferentes condiciones de red, como conexiones 3G o incluso un estado sin conexión.
- Configúralo desde el menú desplegable **No throttling**.

📡 **Tip:** Usa el modo de dispositivos móviles para probar latencias o activa el estado offline para evaluar cómo responde tu aplicación ante errores de red.

---

## 🧪 4. Ejemplo práctico

Desde la consola, puedes inspeccionar eventos de carga usando:

```javascript
// Ejemplo práctico: Inspeccionar eventos de carga

// Obtener y mostrar los event listeners asociados al evento 'load' en la ventana
const loadEventListeners = getEventListeners(window).load;

// Verificar si loadEventListeners no es undefined antes de intentar iterar sobre él
if (loadEventListeners) {
    // Mostrar los event listeners en la consola
    console.log('Event Listeners para el evento "load":', loadEventListeners);

    // Iterar sobre los event listeners y mostrar información detallada
    loadEventListeners.forEach((listener, index) => {
        console.log(`Listener ${index + 1}:`);
        console.log('Función:', listener.listener);
        console.log('UseCapture:', listener.useCapture);
        console.log('Once:', listener.once);
        console.log('Passive:', listener.passive);
        console.log('Origen:', listener.srcElement);
        console.log('Tipo:', listener.type);
        console.log('-------');
    });
} else {
    console.log('No se encontraron event listeners para el evento "load".');
}