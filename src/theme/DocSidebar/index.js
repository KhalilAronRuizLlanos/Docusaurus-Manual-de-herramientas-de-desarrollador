import React from 'react';
import DefaultDocSidebar from '@theme-original/DocSidebar';
import * as FaIcons from 'react-icons/fa';


export default function DocSidebar(props) {
  const sidebarConfig = props.sidebar;

  // Definir íconos para categorías
  const icons = {
    'Primeros pasos': <FaIcons.FaPlayCircle style={{ marginRight: '8px' }} />,
    'Intro': <FaIcons.FaBook style={{ marginRight: '8px' }} />,
    'casa': <FaIcons.FaBook style={{ marginRight: '8px' }} />,
    'Guia basica': <FaIcons.FaCode style={{ marginRight: '8px' }} />,
    'Guia avanzada': <FaIcons.FaCodeBranch  style={{ marginRight: '8px' }} />,
    'Herramienta Adicionales': <FaIcons.FaToolbox style={{ marginRight: '8px' }} />,
    'Atajos y Personalizacíon': <FaIcons.FaTools style={{ marginRight: '8px' }} />,
    'Caso practicos': <FaIcons.FaSun style={{ marginRight: '8px' }} />,
  };

  // Añadir ícono a la categoría
  const addIconToCategory = (categoryLabel) => {
    return icons[categoryLabel] || null;
  };

  // Modificar sidebar para agregar íconos
  const modifiedSidebar = sidebarConfig.map((item) => {
    if (item.type === 'category') {
      return {
        ...item,
        label: (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {addIconToCategory(item.label)}
            {item.label}
          </div>
        ),
      };
    }
    return item;
  });

  // Renderizar sidebar con íconos
  return <DefaultDocSidebar {...props} sidebar={modifiedSidebar} />;
}
