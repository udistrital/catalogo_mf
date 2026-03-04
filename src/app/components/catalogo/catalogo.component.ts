import { Component, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

interface Aplicativo {
  nombre: string;
  descripcion: string;
  enlace?: string;
  imagen: string;
}

@Component({
  selector: 'catalogo',
  imports: [TranslatePipe],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.scss'
})
export class CatalogoComponent {

  aplicaciones = signal<Aplicativo[]>([
    {
      nombre: 'Agora',
      descripcion: 'Sistema para la gestión de proveedores que apoya procesos de cotización y contratación.',
      enlace: 'https://evaluacion.portaloas.udistrital.edu.co',
      imagen: 'assets/images/agora.png'
    },
    {
      nombre: 'Argo',
      descripcion: 'Sistema de apoyo para la gestión de procesos precontractuales, contractuales y de compras',
      enlace: 'https://funcionarios.portaloas.udistrital.edu.co/argo',
      imagen: 'assets/images/argo.png'
    },
    {
      nombre: 'Arka I',
      descripcion: 'Sistema para la gestión de los movimientos de almacén e inventarios de bienes',
      enlace: 'https://funcionarios.portaloas.udistrital.edu.co/arka',
      imagen: 'assets/images/arka1.png'
    },
    {
      nombre: 'Arka II',
      descripcion: 'Sistema para la gestión de los movimientos de almacén e inventarios de bienes',
      enlace: 'https://arka.portaloas.udistrital.edu.co',
      imagen: 'assets/images/arka2.png'
    },
    {
      nombre: 'Módulo de cumplidos',
      descripcion: 'Sistema para la gestión de informes sobre las actividades laborales de los contratistas.',
      enlace: 'https://contratistas.portaloas.udistrital.edu.co',
      imagen: 'assets/images/moduloCumplidos.png'
    },
    {
      nombre: 'Oikos',
      descripcion: 'Sistema para la gestión de dependencias y espacios físicos de la universidad.',
      enlace: 'https://oikosmicroclientes.portaloas.udistrital.edu.co',
      imagen: 'assets/images/oikos.png'
    },
    {
      nombre: 'Perseo',
      descripcion: 'Sistema para el desarrollo de procesos electorales dentro de la universidad de forma digital.',
      enlace: 'https://voto.portaloas.udistrital.edu.co',
      imagen: 'assets/images/perseoVotoElectronico.png'
    },
    {
      nombre: 'Módulo de resoluciones',
      descripcion: 'Sistema de gestión de los docentes de vinculación especial que apoya procesos de RRHH.',
      enlace: 'https://resoluciones.portaloas.udistrital.edu.co',
      imagen: 'assets/images/moduloResoluciones.png'
    },
    {
      nombre: 'Sísifo',
      descripcion: 'Sistema para la gestión de planes de mejoramiento en los procesos académico administrativos',
      enlace: 'https://pruebassisifomicroclientes.portaloas.udistrital.edu.co',
      imagen: 'assets/images/sisifo.png'
    },
    {
      nombre: 'Temis',
      descripcion: 'Sistema de apoyo en el cálculo de las cuotas partes pensionales con entidades externas.',
      enlace: 'https://funcionarios.portaloas.udistrital.edu.co/gefad',
      imagen: 'assets/images/temis.png'
    },
    {
      nombre: 'Iris',
      descripcion: 'Sistema para la gestión de trámites generados al interior de la universidad.',
      enlace: 'https://iris.portaloas.udistrital.edu.co/scp/login.php',
      imagen: 'assets/images/iris.png'
    },
    {
      nombre: 'Ud App',
      descripcion: 'Aplicación móvil para el uso de carnets de la universidad.',
      enlace: 'https://play.google.com/store/apps/details?id=com.scrinio.udapp',
      imagen: 'assets/images/udapp.png'
    }
  ]);

  aplicacionesUrano = signal<Aplicativo[]>([
    {
      nombre: 'APEA',
      descripcion: 'NA',
      enlace: '',
      imagen: 'assets/images/apea.png'
    },
    {
      nombre: 'Jano',
      descripcion: 'Sistema para registro de hojas de vida de contratistas.',
      enlace: 'https://funcionarios.portaloas.udistrital.edu.co/jano',
      imagen: 'assets/images/jano.png'
    },
    {
      nombre: 'Kyron',
      descripcion: 'Sistema para el trámite de información y gestiones de docentes.',
      enlace: 'https://funcionarios.portaloas.udistrital.edu.co/kyron',
      imagen: 'assets/images/kyron.png'
    },
    {
      nombre: 'Pólux',
      descripcion: 'Sistema para el seguimiento y gestión de trabajos de grado de los estudiantes.',
      enlace: 'https://polux.portaloas.udistrital.edu.co',
      imagen: 'assets/images/polux.png'
    },
    {
      nombre: 'SGA',
      descripcion: 'Sistema para la gestión de trámites académicos para estudiantes.',
      enlace: 'https://funcionarios.portaloas.udistrital.edu.co',
      imagen: 'assets/images/sga.png'
    },
    {
      nombre: 'SGA Posgrado',
      descripcion: 'Sistema para la gestión de trámites académicos para estudiantes solo de posgrado.',
      enlace: 'https://sgamicroclientes.portaloas.udistrital.edu.co',
      imagen: 'assets/images/sgaPosgrado.png'
    },
    {
      nombre: 'Siciud',
      descripcion: 'Sistema para el registro y seguimiento de proyectos de investigación institucional.',
      enlace: '',
      imagen: 'assets/images/siciud.png'
    },
    {
      nombre: 'Concurso docente',
      descripcion: 'Sistema para el registro de vida de docentes.',
      enlace: 'https://funcionarios.portaloas.udistrital.edu.co/concurso',
      imagen: 'assets/images/concursoDocente.png'
    }
  ]);

  aplicacionesNix = signal<Aplicativo[]>([
    {
      nombre: 'Titán',
      descripcion: 'Sistema para construir las diferentes nóminas y pago de honorarios de compromisos contractuales.',
      enlace: 'https://titan.portaloas.udistrital.edu.co',
      imagen: 'assets/images/titan.png'
    },
    {
      nombre: 'Sisgplan',
      descripcion: 'Sistema para apoyar los procesos financieros y generar los reportes a entes de control.',
      enlace: 'https://planeacion.portaloas.udistrital.edu.co',
      imagen: 'assets/images/sisgplan.png'
    }
  ]);

  aplicacionesAthenea = signal<Aplicativo[]>([
    {
      nombre: 'Knowage',
      descripcion: 'Sistema de análisis de información cruda y gestión de reportes.',
      enlace: 'https://inteligenciainstitucional.portaloas.udistrital.edu.co/knowage',
      imagen: 'assets/images/knowage.png'
    },
    {
      nombre: 'Metabase',
      descripcion: 'Sistemas para la gestión y visualización de reportes estadísticos.',
      enlace: 'https://inteligenciainstitucional.portaloas.udistrital.edu.co',
      imagen: 'assets/images/metaBase.png'
    },
    {
      nombre: 'Base de conocimiento',
      descripcion: 'Sistema para la gestión de información sobre los aplicativos, usuarios y procesos de la universidad.',
      enlace: 'https://conocimiento.portaloas.udistrital.edu.co',
      imagen: 'assets/images/baseConocimiento.png'
    }
  ]);
}
