# Performance: Optimización de carga

La velocidad de carga y la fluidez de una página web son fundamentales para la experiencia del usuario. El panel **Performance** de DevTools te permite registrar, analizar y optimizar el comportamiento real de tu aplicación.

## 1. Capturando el Rendimiento

Para comenzar cualquier análisis:

* Inicia una grabación con el botón ⏺️ (o usa `Ctrl + E` / `Cmd + E`)
* Durante la grabación, realiza acciones importantes:
  * Desplazamiento
  * Navegación y clics
  * Activación de animaciones
* Finaliza la grabación para examinar los resultados

> **Tip**: Activa la opción "Screenshots" para obtener imágenes de cada fotograma durante la grabación.

## 2. Interpretando la Línea de Tiempo

Después de grabar, podrás analizar:

* **Etapas principales**:
  * **Loading**: Descarga de recursos y construcción del DOM
  * **Scripting**: Ejecución de código JavaScript
  * **Rendering**: Cálculos de estilo y layout
  * **Painting & Compositing**: Renderizado final en pantalla

* **Tareas Largas**:
  * Aparecen destacadas en rojo
  * Bloquean el hilo principal durante más de 50ms
  * Examina eventos como `scroll`, `click` y `DOMContentLoaded`

* **Análisis de Funciones**:
  * Usa las vistas **Call Tree** o **Bottom-Up** para identificar las funciones que más consumen

