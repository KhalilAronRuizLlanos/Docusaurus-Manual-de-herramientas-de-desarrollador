# Ajustar estilos CSS

Además de explorar el HTML, el Inspector de Elementos permite modificar los estilos CSS de una página en tiempo real. Es una herramienta esencial para probar y depurar aspectos visuales del diseño de forma inmediata y dinámica. A continuación, te mostramos cómo aprovechar estas funcionalidades.

---

## 🎨 Cómo modificar estilos CSS en tiempo real

Realizar cambios de estilo a los elementos seleccionados es sencillo desde el panel **Styles** del Inspector.

### ✏️ Editar propiedades existentes
Dentro del panel Styles, verás todas las reglas CSS que afectan al elemento. Puedes hacer clic sobre el valor de cualquier propiedad (como `color: red;`) para editarlo al instante. Los cambios se verán reflejados de inmediato en la página.

**Ejemplo:** Si deseas cambiar el color de fondo, edita `background-color: red;` por `background-color: blue;` y el cambio será visible al instante.

### 🚫 Desactivar propiedades temporalmente
Si quieres comprobar cómo se vería un diseño sin una propiedad específica, puedes desactivarla sin eliminarla. Mantén presionada la tecla `Ctrl` (Windows) o `Cmd` (Mac) y haz clic en la casilla de verificación junto a la propiedad en el panel. Esto es útil para hacer pruebas sin perder configuraciones.

### ➕ Agregar nuevas reglas CSS
Puedes incorporar nuevas reglas directamente desde el Inspector:

- Haz clic en el ícono `+` al lado de `element.style` para añadir estilos personalizados al elemento seleccionado.
- También puedes usar el selector de color (cuentagotas) para elegir colores directamente de la página, sin necesidad de buscar sus códigos manualmente.

---

## ⚙️ Herramientas avanzadas del Inspector

Además de modificar estilos básicos, el Inspector ofrece funciones avanzadas para simular estados y entender con precisión cómo se aplican los estilos.

### 🖱️ Simulación de pseudoclases con `:hov`
Esta opción permite activar estados como `:hover`, `:focus` o `:active` sin necesidad de interactuar con la página. Es ideal para revisar cómo se comporta un elemento en situaciones específicas.

**Ejemplo:** Si un botón cambia de color al pasar el cursor, puedes activar `:hover` para ver ese efecto sin mover el ratón.

### 📊 Panel Computed
La pestaña Computed muestra los estilos finales aplicados a un elemento, considerando herencias y prioridades entre reglas. Es muy útil cuando hay conflictos entre múltiples estilos.

**Ejemplo:** Si dos reglas intentan asignar colores diferentes a un fondo, el panel Computed te dirá cuál se está usando realmente y por qué, mostrando la jerarquía de reglas aplicada.

---

## ✅ Conclusión

El Inspector de Elementos te brinda un entorno flexible para trabajar con CSS en tiempo real. Desde la edición directa de propiedades, pasando por la creación de nuevas reglas, hasta el análisis de estilos computados y simulaciones de estado, todo se puede hacer sin modificar el código fuente. Dominar estas funciones te permitirá ajustar y depurar tus diseños de manera eficiente y profesional.
