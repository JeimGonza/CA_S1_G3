module.exports = {
  tutorialSidebar: [
    // Sección de Análisis
    {
      type: 'category',
      label: 'Análisis',
      link: {
        type: 'doc',
        id: 'analisis-index', // Página principal de la carpeta
      },
      items: [
        'analisis-flujo-negocio',
        'analisis-requisitos',
      ],
    },
    // Sección de Propuesta
    {
      type: 'category',
      label: 'Propuesta',
      link: {
        type: 'doc',
        id: 'propuesta-index',
      },
      items: [
        'propuesta-flujo-solucion',
        'propuesta-acuerdos-tradeoffs',
        'propuesta-elevator-pitch',
        'propuesta-junta-directiva',
        'propuesta-postmortem',
      ],
    },
    // Sección de Recolección de Información
    {
      type: 'category',
      label: 'Recolección de Información',
      link: {
        type: 'doc',
        id: 'recoleccion-index',
      },
      items: [
        'recoleccion-justificacion',
        'recoleccion-preguntas',
        'recoleccion-evidencias',
      ],
    },
  ],
};