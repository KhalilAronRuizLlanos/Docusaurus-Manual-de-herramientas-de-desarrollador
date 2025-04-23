// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
 const sidebars = {
  tutorialSidebar: [
    'Manual', // Documento simple
    {
      type: 'category',
      label: 'Primeros pasos', // Aquí estará el ícono personalizado
      items: ['primeros-pasos/como-utilizar','primeros-pasos/interfaz-de-inspector'],
      className: 'sidebar-title',
    },
    {
      type: 'category',
      label: 'Guia basica', // Aquí estará el ícono personalizado
      items: ['guia-basica/inspeccionar-html','guia-basica/modificar-css'],
      className: 'sidebar-title',
    },
    {
      type: 'category',
      label: 'Guia avanzada', // Aquí estará el ícono personalizado
      items: ['guia-avanzada/depu-js','guia-avanzada/uso-de-consola','guia-avanzada/rendimiento'],
      className: 'sidebar-title',
    },
    {
      type: 'category',
      label: 'Herramienta Adicionales', // Aquí estará el ícono personalizado
      items: ['herramienta-adicionales/network','herramienta-adicionales/performance','herramienta-adicionales/aplication'],
      className: 'sidebar-title',
    },
    {
      type: 'category',
      label: 'Atajos y Personalizacíon', // Aquí estará el ícono personalizado
      items: ['Atajos-y-personalizacion/atajos-rapidos','Atajos-y-personalizacion/personalizacion'],
      className: 'sidebar-title',
    },
    {
      type: 'doc',
      id: 'caso-practico',
      label: 'Caso practicos'
    }
    
  ],
};

export default sidebars;
