// navbar.config.ts
export interface NavbarConfig {
  titulo: string;
  links: {
    label: string;
    route: string;
  }[];
}

export const NAVBAR_CONFIG: Record<string, NavbarConfig> = {
  principal: {
    titulo: 'SISTEMA DE GESTION DE ORDENES DE OPERACIONES',
    links: [],
  },

  localidades: {
    titulo: 'PANEL DE LOCALIDADES',
    links: [
      { label: 'Listado', route: '/pages/lst_localidades' },
      // { label: 'Correo Institucional', route: '/pages/lst_correos_institucionales' },
      // { label: 'Sistemas Federales', route: '/pages/lst_plataforma' },
      // { label: 'Reclamos', route: '/pages/lst_reclamos' }
    ],
  },

  ordenes: {
    titulo: 'PANEL DE ORDENES',
    links: [
      { label: 'Lugares', route: '/pages/lst_lugares' },
      { label: 'Supervisiones', route: '/pages/lst_supervision' },
      { label: 'Unidades Afectadas', route: '/pages/lst_unidadAfectada' },
      { label: 'Tipos de Eventos', route: '/pages/lst_tipoEvento' },
      { label: 'Tipos de Secuestros', route: '/pages/lst_tipoSecuestro' },
      { label: 'Resultados', route: '/pages/lst_resultados' },
      { label: 'Personas', route: '/pages/lst_personas' },

    ]
  },

  // sistemas: {
  //   titulo: 'SISTEMAS INTERNOS POLICIALES',
  //   links: [
  //     { label: 'Solicitudes de Desarrollo', route: '/pages/lst_solicitudes' },
  //     { label: 'Sistemas', route: '/pages/lst_sistemas' },
  //     { label: 'Mantenimiento Preventivo', route: '/pages/lst_mantenimiento' }
  //   ]
  // },

  // insumos: {
  //   titulo: 'CONTROL DE INSUMOS',
  //   links: [
  //     { label: 'Marcas', route: '/pages/lst_marcas' },
  //     { label: 'Modelos', route: '/pages/lst_modelos' },
  //     { label: 'Tipos de Insumos', route: '/pages/lst_tipoEquipo' },
  //     { label: 'Proveedores', route: '/pages/lst_proveedor' },
  //     { label: 'Equipamientos', route: '/pages/lst_equipamientos' }
  //   ]
  // },

  // conexiones: {
  //   titulo: 'CONEXIONES Y RECLAMOS SERVICIO DE INTERNET',
  //   links: [
  //     { label: 'Conexiones', route: '/pages/lst_conexiones' },
  //     { label: 'Solicitudes / Reclamos', route: '/pages/lst_solicitudReclamo' }
  //   ]
  // },

  // novedades: {
  //   titulo: 'NOVEDADES DIARIAS - DTI',
  //   links: [
  //     { label: 'Novedades', route: '/pages/lst_novedadesDTI' },
  //     { label: 'Tipos de Novedades', route: '/pages/lst_tipoNovedad' }
  //   ]
  // },

  // reportes: {
  //   titulo: 'REPORTES DEL SISTEMA',
  //   links: [
  //     //{ label: 'Reporte de Prendas', route: '/pages/lst_reporte_entrega' },
  //     // { label: 'Solicitudes / Reclamos', route: '/pages/lst_solicitudReclamo' }
  //   ]
  // },
};
