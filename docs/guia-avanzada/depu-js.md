# 🛠️ Depuración de JavaScript

Detectar y corregir errores en JavaScript es crucial para asegurar que las aplicaciones web funcionen correctamente. Los navegadores modernos incluyen herramientas que permiten examinar el comportamiento del código paso a paso usando el panel de desarrollo o DevTools.

---

## 🎯 Colocar puntos de interrupción (Breakpoints)

Los breakpoints permiten detener el código en una línea específica para observar su estado actual, lo cual es muy útil cuando el error no es evidente.

### 🔹 Cómo agregar un breakpoint
1. Abre el inspector de elementos
1. Ahora dirigete a la seccíon **Sources** del navegador.
2. Selecciona el archivo JavaScript que estás depurando.
3. Haz clic en el número de la línea que quieres pausar.

La línea quedará marcada con un círculo azul, indicando que el breakpoint está activo.

### 🧠 Tipos de breakpoints adicionales

- **Condicionales:**  
  Haz clic derecho en una línea > *Add conditional breakpoint*.  
  Por ejemplo, `usuario.edad >= 18` pausará el código solo si la condición es verdadera.

- **Basados en eventos:**  
  Desde el panel derecho, activa eventos como `mouseover`, `change`, o `submit` para pausar en función de la interacción del usuario.

- **Breakpoints de red (XHR/fetch):**  
  Pausa el código cuando se hacen solicitudes `fetch()` o `XMLHttpRequest`.

---

## ⏱️ Avanzar paso a paso

Cuando el código se detiene en un breakpoint o por `debugger;`, puedes seguirlo línea por línea.

### 🔘 Controles del depurador

- ▶️ **Resume**: Continúa hasta el siguiente punto de interrupción.
- ⤵️ **Step over (F10)**: Ejecuta la línea actual sin entrar en funciones.
- ⤴️ **Step into (F11)**: Entra en la función llamada.
- ⬆️ **Step out (Shift + F11)**: Sale de la función y vuelve al contexto anterior.

### 🔍 Inspección de variables

En el panel derecho puedes ver:
- Variables locales (`let`, `const`, `var`).
- Parámetros de funciones.
- Variables de ámbito global.

También puedes modificar sus valores manualmente.

#### ✨ Ejemplo:

```js
function calcularDescuento(precio, porcentaje) {
  let descuento = precio * (porcentaje / 100);
  let total = precio - descuento;
  return total;
}
