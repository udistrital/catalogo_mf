import { Component, signal } from '@angular/core';
import { NgFor } from '@angular/common';

interface Aplicativo {
  nombre: string;
  descripcion: string;
  enlace?: string;
  imagen: string;
}

@Component({
  selector: 'catalogo',
  imports: [NgFor],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.scss'
})
export class CatalogoComponent {
  title = 'catalogo_mf';
  aplicaciones = signal<Aplicativo[]>([
    {
      nombre: 'Agora',
      descripcion: 'Gestión de matrícula, notas, horarios y otros trámites académicos.',
      enlace: 'https://sga.universidad.edu.co',
      imagen: 'assets/images/agora.png'
    },
    {
      nombre: 'Argo',
      descripcion: 'Acceso a tesis, investigaciones y documentos institucionales.',
      enlace: 'https://repositorio.universidad.edu.co',
      imagen: 'assets/images/argo.png'
    },
    {
      nombre: 'Arka I',
      descripcion: 'Plataforma de aprendizaje y materiales académicos en línea.',
      enlace: 'https://aulavirtual.universidad.edu.co',
      imagen: 'assets/images/arka1.png'
    },
    {
      nombre: 'Arka II',
      descripcion: 'Registro y seguimiento de proyectos de investigación institucional.',
      enlace: 'https://sicud.universidad.edu.co',
      imagen: 'assets/images/arka2.png'
    },
    {
      nombre: 'Módulo de cumplidos',
      descripcion: 'Gestión de matrícula, notas, horarios y otros trámites académicos.',
      enlace: 'https://sga.universidad.edu.co',
      imagen: 'assets/images/moduloCumplidos.png'
    },
    {
      nombre: 'Oikos',
      descripcion: 'Acceso a tesis, investigaciones y documentos institucionales.',
      enlace: 'https://repositorio.universidad.edu.co',
      imagen: 'assets/images/oikos.png'
    },
    {
      nombre: 'Perseo',
      descripcion: 'Plataforma de aprendizaje y materiales académicos en línea.',
      enlace: 'https://aulavirtual.universidad.edu.co',
      imagen: 'assets/images/perseoVotoElectronico.png'
    },
    {
      nombre: 'Módulo de resoluciones',
      descripcion: 'Registro y seguimiento de proyectos de investigación institucional.',
      enlace: 'https://sicud.universidad.edu.co',
      imagen: 'assets/images/moduloResoluciones.png'
    },
    {
      nombre: 'Sísifo',
      descripcion: 'Gestión de matrícula, notas, horarios y otros trámites académicos.',
      enlace: 'https://sga.universidad.edu.co',
      imagen: 'assets/images/sisifo.png'
    },
    {
      nombre: 'Temis',
      descripcion: 'Acceso a tesis, investigaciones y documentos institucionales.',
      enlace: 'https://repositorio.universidad.edu.co',
      imagen: 'assets/images/temis.png'
    },
    {
      nombre: 'Iris',
      descripcion: 'Plataforma de aprendizaje y materiales académicos en línea.',
      enlace: 'https://aulavirtual.universidad.edu.co',
      imagen: 'assets/images/iris.png'
    },
    {
      nombre: 'Ud App',
      descripcion: 'Registro y seguimiento de proyectos de investigación institucional.',
      enlace: 'https://sicud.universidad.edu.co',
      imagen: 'assets/images/udapp.png'
    }
  ]);

  aplicacionesUrano = signal<Aplicativo[]>([
    {
      nombre: 'APEA',
      descripcion: 'Gestión de matrícula, notas, horarios y otros trámites académicos.',
      enlace: 'https://sga.universidad.edu.co',
      imagen: 'assets/images/apea.png'
    },
    {
      nombre: 'Campus virtual',
      descripcion: 'Acceso a tesis, investigaciones y documentos institucionales.',
      enlace: 'https://repositorio.universidad.edu.co',
      imagen: 'assets/images/campusVirtual.png'
    },
    {
      nombre: 'Jano',
      descripcion: 'Plataforma de aprendizaje y materiales académicos en línea.',
      enlace: 'https://aulavirtual.universidad.edu.co',
      imagen: 'assets/images/jano.png'
    },
    {
      nombre: 'Kyron',
      descripcion: 'Registro y seguimiento de proyectos de investigación institucional.',
      enlace: 'https://sicud.universidad.edu.co',
      imagen: 'assets/images/kyron.png'
    },
    {
      nombre: 'Pólux',
      descripcion: 'Gestión de matrícula, notas, horarios y otros trámites académicos.',
      enlace: 'https://sga.universidad.edu.co',
      imagen: 'assets/images/polux.png'
    },
    {
      nombre: 'SGA',
      descripcion: 'Acceso a tesis, investigaciones y documentos institucionales.',
      enlace: 'https://repositorio.universidad.edu.co',
      imagen: 'assets/images/sga.png'
    },
    {
      nombre: 'SGA Posgrado',
      descripcion: 'Plataforma de aprendizaje y materiales académicos en línea.',
      enlace: 'https://aulavirtual.universidad.edu.co',
      imagen: 'assets/images/sgaPosgrado.png'
    },
    {
      nombre: 'Siciud',
      descripcion: 'Registro y seguimiento de proyectos de investigación institucional.',
      enlace: 'https://sicud.universidad.edu.co',
      imagen: 'assets/images/siciud.png'
    },
    {
      nombre: 'Concurso docente',
      descripcion: 'Gestión de matrícula, notas, horarios y otros trámites académicos.',
      enlace: 'https://sga.universidad.edu.co',
      imagen: 'assets/images/concursoDocente.png'
    }
  ]);

  aplicacionesNix = signal<Aplicativo[]>([
    {
      nombre: 'Titán',
      descripcion: 'Gestión de matrícula, notas, horarios y otros trámites académicos.',
      enlace: 'https://sga.universidad.edu.co',
      imagen: 'assets/images/titan.png'
    },
    {
      nombre: 'Sisgplan',
      descripcion: 'Acceso a tesis, investigaciones y documentos institucionales.',
      enlace: 'https://repositorio.universidad.edu.co',
      imagen: 'assets/images/sisgplan.png'
    },
    {
      nombre: 'Samanta',
      descripcion: 'Plataforma de aprendizaje y materiales académicos en línea.',
      enlace: 'https://aulavirtual.universidad.edu.co',
      imagen: 'assets/images/samanta.png'
    },
    {
      nombre: 'Sofia',
      descripcion: 'Registro y seguimiento de proyectos de investigación institucional.',
      enlace: 'https://sicud.universidad.edu.co',
      imagen: 'assets/images/sofia.png'
    }
  ]);

  aplicacionesAthenea = signal<Aplicativo[]>([
    {
      nombre: 'Knowage',
      descripcion: 'Gestión de matrícula, notas, horarios y otros trámites académicos.',
      enlace: 'https://sga.universidad.edu.co',
      imagen: 'assets/images/knowage.png'
    },
    {
      nombre: 'Metabase',
      descripcion: 'Acceso a tesis, investigaciones y documentos institucionales.',
      enlace: 'https://repositorio.universidad.edu.co',
      imagen: 'assets/images/metaBase.png'
    },
    {
      nombre: 'Base de conocimiento',
      descripcion: 'Plataforma de aprendizaje y materiales académicos en línea.',
      enlace: 'https://aulavirtual.universidad.edu.co',
      imagen: 'assets/images/baseConocimiento.png'
    }
  ]);
}
