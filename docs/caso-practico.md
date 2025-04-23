# Casos Prácticos Básicos

Este manual presenta ejemplos sencillos para entender cada panel de DevTools a través de ejercicios prácticos que puedes realizar inmediatamente.

## Panel Elements: Cambiar el título de una página

**Caso práctico**: Imagina que quieres ver cómo se vería un sitio web con un título diferente.

**Pasos**:
1. Visita cualquier sitio web (por ejemplo, wikipedia.org)
2. Abre DevTools con `F12` o clic derecho → "Inspeccionar"
3. En el panel Elements, busca la etiqueta `<h1>` del título principal
4. Haz doble clic en el texto del título
5. Escribe un nuevo título y presiona Enter

**Resultado**: El título del sitio cambiará temporalmente en tu navegador (solo para ti).

![Ejemplo de edición de título](https://via.placeholder.com/400x200)

## Panel Console: Contar elementos en una página

**Caso práctico**: Quieres saber cuántos enlaces hay en una página web.

**Pasos**:
1. Visita cualquier sitio web con varios enlaces
2. Abre DevTools y ve a la pestaña "Console"
3. Escribe el siguiente código y presiona Enter:
   ```javascript
   const enlaces = document.querySelectorAll('a');
   console.log(`Esta página tiene ${enlaces.length} enlaces`);
   
   // Bonus: ver los primeros 5 enlaces
   console.log("Primeros 5 enlaces:");
   for (let i = 0; i < 5 && i < enlaces.length; i++) {
     console.log(enlaces[i].textContent + " → " + enlaces[i].href);
   }
   ```

**Resultado**: Verás en la consola el número total de enlaces y una lista de los primeros 5.

## Panel Network: Identificar la imagen más grande

**Caso práctico**: Quieres encontrar qué imagen está ralentizando la carga de una página.

**Pasos**:
1. Visita un sitio web con varias imágenes (como un periódico online)
2. Abre DevTools y ve a la pestaña "Network"
3. Marca la casilla "Disable cache"
4. Recarga la página presionando F5
5. Haz clic en "Img" para filtrar solo imágenes
6. Haz clic en la columna "Size" para ordenar por tamaño

**Resultado**: Ahora puedes ver qué imagen es más grande y cuánto tiempo tardó en cargar.

![Ejemplo del panel Network](https://via.placeholder.com/400x200)

## Panel Sources: Pausar un contador

**Caso práctico**: Tienes una página con un contador que se incrementa automáticamente y quieres ver cómo funciona.

**Pasos**:
1. Copia y pega este código en la consola para crear un contador:
   ```javascript
   const div = document.createElement('div');
   div.style = 'position:fixed;top:10px;right:10px;background:black;color:white;padding:10px;';
   document.body.appendChild(div);
   
   let contador = 0;
   function incrementar() {
     contador++;
     div.textContent = contador;
     setTimeout(incrementar, 1000);
   }
   incrementar();
   ```
2. Ve a la pestaña "Sources"
3. En el panel izquierdo, expande "snippets" → clic derecho → "New"
4. Introduce el código anterior y guárdalo
5. Haz clic en el número de línea junto a `contador++;` para crear un breakpoint
6. Ejecuta el snippet (clic derecho → "Run")

**Resultado**: El contador se pausará cuando llegue al breakpoint, permitiéndote inspeccionar variables y continuar la ejecución paso a paso.

## Panel Application: Crear y modificar datos locales

**Caso práctico**: Quieres entender cómo se almacenan las preferencias del usuario.

**Pasos**:
1. Abre DevTools y ve a la pestaña "Application"
2. En el panel izquierdo, selecciona "Local Storage"
3. Haz clic en el dominio actual
4. Haz clic en el botón "+" para añadir un nuevo item
5. Crea una entrada:
   - Clave: `theme`
   - Valor: `dark`
6. Recarga la página
7. Verifica que tu entrada sigue ahí

**Resultado**: Has creado manualmente un dato persistente que podría usarse para recordar las preferencias del usuario.

![Ejemplo del panel Application](https://via.placeholder.com/400x200)

## Panel Performance: Analizar una animación lenta

**Caso práctico**: Quieres entender por qué una animación no es fluida.

**Pasos**:
1. Copia y pega este código en la consola para crear una animación ineficiente:
   ```javascript
   const box = document.createElement('div');
   box.style = 'width:50px;height:50px;background:red;position:absolute;';
   document.body.appendChild(box);
   
   function animarCaja() {
     // Simulamos código ineficiente que fuerza recálculos de layout
     for (let i = 0; i < 200; i++) {
       box.style.left = (i % 150) + 'px';
       // Forzamos un reflow al leer una propiedad
       console.log(box.offsetLeft);
     }
   }
   
   setInterval(animarCaja, 1000);
   ```
2. Ve a la pestaña "Performance"
3. Haz clic en el botón de grabar (círculo rojo)
4. Espera 2-3 segundos mientras la animación se ejecuta
5. Haz clic en "Stop"

**Resultado**: Verás gráficos mostrando picos de CPU y frames perdidos. Las barras rojas largas indican tareas que bloquean el hilo principal.

## Panel Memory: Detectar objetos duplicados

**Caso práctico**: Quieres ver cuántos objetos de un mismo tipo existen en memoria.

**Pasos**:
1. Copia y pega este código en la consola para crear muchos objetos:
   ```javascript
   const objetos = [];
   for (let i = 0; i < 1000; i++) {
     objetos.push({
       id: i,
       nombre: `Objeto ${i}`,
       datos: new Array(100).fill(Math.random())
     });
   }
   console.log(`Creados ${objetos.length} objetos en memoria`);
   ```
2. Ve a la pestaña "Memory"
3. Selecciona "Heap snapshot" y haz clic en "Take snapshot"
4. En el campo de búsqueda escribe "Object"

**Resultado**: Verás un resumen de los objetos en memoria, incluyendo cuántos hay de cada tipo y cuánto espacio ocupan.

## Panel Security: Verificar la seguridad de un sitio

**Caso práctico**: Quieres comprobar si un sitio web usa conexión segura.

**Pasos**:
1. Visita un sitio web como https://google.com
2. Abre DevTools y ve a la pestaña "Security"
3. Observa el estado de seguridad del sitio
4. Ahora visita un sitio con HTTP si puedes encontrar uno
5. Compara la información de seguridad

**Resultado**: Podrás identificar si un sitio utiliza HTTPS correctamente y ver detalles sobre su certificado.

![Ejemplo del panel Security](https://via.placeholder.com/400x200)

## Panel Accessibility: Revisar contraste de color

**Caso práctico**: Quieres verificar si el texto en un sitio es legible para personas con problemas de visión.

**Pasos**:
1. Visita cualquier sitio web
2. Abre DevTools y ve a la pestaña "Elements"
3. Selecciona un elemento de texto en la página
4. Busca el panel "Accessibility" en la parte derecha
5. Expande la sección "Computed Properties"
6. Busca "Color Contrast"

**Resultado**: Verás una puntuación de relación de contraste. Un valor por encima de 4.5:1 es bueno para la mayoría del texto. Te mostrará si pasa las directrices WCAG.

## Panel Rendering: Visualizar márgenes y rellenos

**Caso práctico**: Quieres entender por qué los elementos no se alinean correctamente.

**Pasos**:
1. Abre DevTools con F12
2. Presiona `Ctrl+Shift+P` (`Cmd+Shift+P` en Mac)
3. Escribe "rendering" y selecciona "Show Rendering"
4. En el panel Rendering que aparece, activa la opción "Show layout borders"

**Resultado**: Verás bordes de diferentes colores alrededor de los elementos:
- Azul: margen
- Verde: relleno (padding)
- Naranja: contenido

Esto te ayuda a visualizar inmediatamente el modelo de caja de CSS.

## Panel Coverage: Encontrar CSS no utilizado

**Caso práctico**: Quieres optimizar una página eliminando estilos que no se usan.

**Pasos**:
1. Abre DevTools y presiona `Ctrl+Shift+P` (`Cmd+Shift+P` en Mac)
2. Escribe "coverage" y selecciona "Show Coverage"
3. Haz clic en el botón "Start instrumenting coverage and reload page" (icono circular con recarga)
4. Espera a que la página cargue completamente

**Resultado**: Verás un informe que muestra qué porcentaje de CSS y JavaScript no se está utilizando. Las barras rojas representan código no utilizado, las azules el código utilizado.

---

## Consejos para Practicar

1. **Usa sitios reales**: Practica estos ejemplos en tus sitios web favoritos
2. **Experimenta sin miedo**: Los cambios que hagas con DevTools son temporales y desaparecen al recargar
3. **Usa el atajo F12**: La forma más rápida de abrir DevTools
4. **Prueba un panel nuevo cada día**: Domina una herramienta a la vez

Recuerda: DevTools es como una navaja suiza, no necesitas dominar todas las funciones desde el principio. Comienza con estos casos prácticos sencillos e irás descubriendo más características conforme las necesites.