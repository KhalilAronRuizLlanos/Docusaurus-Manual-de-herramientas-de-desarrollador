# Uso de la Consola Integrada

La consola de desarrollo del navegador no solo se utiliza para imprimir valores con `console.log()`. Es una herramienta potente para inspeccionar datos, probar código, depurar errores y experimentar en tiempo real. Utilizarla eficazmente puede optimizar tu flujo de trabajo como desarrollador frontend o full-stack.

## Comandos Esenciales

`console.log(valor)`
Este comando imprime cualquier tipo de dato, como números, cadenas de texto, objetos, arreglos, entre otros.

```js
console.log("Hola mundo");
console.log({ nombre: "Ana", edad: 30 });
console.table(objeto/array)
```

Este comando muestra los datos en una tabla estructurada, lo que es útil para visualizar arreglos de objetos.
```js
const usuarios = [
  { nombre: "Luis", edad: 28 },
  { nombre: "María", edad: 35 }
];
console.table(usuarios);
```
## Métodos Útiles
- `monitorEvents(elemento,[tipo])`
Este método monitorea los eventos de un elemento específico. Puedes especificar el tipo de evento (por ejemplo, click, keydown, resize, etc.).

```js
monitorEvents(document.body, 'click');
```
- `unmonitorEvents(elemento,[tipo])`
Este método detiene la monitorización de eventos.

```js
unmonitorEvents(document.body, 'click');
```




- `clear()`: Limpia el contenido actual de la consola.