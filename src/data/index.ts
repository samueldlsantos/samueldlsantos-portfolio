import {PersonalInformation, Experience, Project } from "../types";

export const personalInformation: PersonalInformation = {
    name: "Samuel de los Santos",
    profession: "Ingeniero en Desarrollo de Software",
    location: "Monterrey, Nuevo León, México",
    introduction: "¡Hola! Soy Samuel de los Santos, Ingeniero en Desarrollo de Software de Monterrey, Nuevo León, México. Tengo amplia experiencia desarrollando aplicaciones web con .NET. Me apasiona aprender sobre nuevas tecnologías y aplicar ese conocimiento para crear soluciones innovadoras. Siempre estoy buscando nuevos desafíos para crecer profesionalmente.",
};

export const experiences: Experience[] = [
  {
    id: 1,
    year: "Junio 2022 - Junio 2023",
    role: "MES Programmer",
    company: "Johnson Controls",
    description: "En este puesto, me encargué del desarrollo, implementación y actualización de funcionalidades críticas para el sistema de operación de la empresa. Desarrollé nuevos módulos para optimizar el flujo de operaciones en la planta, además de mantener y mejorar el Sistema de Ejecución de Manufactura (MES). Implementé DataTables utilizando JQuery para mejorar la gestión y visualización de datos, realicé consultas a servicios web a través de AJAX y estandaricé vistas siguiendo patrones de diseño MVC.",
  },
  {
    id: 2,
    year: "Junio 2023 - Actual",
    role: "Desarrollador Jr. .NET",
    company: "FGJENL",
    description: "En mi rol actual, me enfoco en el desarrollo de proyectos utilizando tecnología .NET con una arquitectura basada en MVC, Repositorios y Servicios. Desarrollo interactividad en JavaScript y JQuery, utilizando servicios web mediante AJAX. También creo y mantengo procedimientos almacenados para la interacción con bases de datos del sistema y participo en el diseño y desarrollo de soluciones robustas y escalables, siguiendo las mejores prácticas de la industria.",
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Guitar Store",
    image: "https://github.com/samueldlsantos/guitarstore-ts/blob/main/preview.png?raw=true",
    description:
      "Carrito de compras para una tienda de Guitarras creado con React y TS",
    urlGithub: "https://github.com/samueldlsantos/guitarstore-ts",
    urlPreview: "https://guitarstore-ts.netlify.app/",
  },
  {
    id: 2,
    title: "Citas Veterinaria",
    image: "https://raw.githubusercontent.com/samueldlsantos/citas-react/main/preview.png",
    description:
      "Aplicacion que da de alta citas que se atienden a pacientes en veterinaria, creada con React y JS",
    urlGithub: "https://github.com/samueldlsantos/citas-react",
    urlPreview: "https://citasveterinariareactvite.netlify.app/",
  },
  {
    id: 3,
    title: "Calorie Tracker",
    image: "https://github.com/samueldlsantos/calorie-tracker/blob/main/preview.png?raw=true",
    description:
      "Aplicacion que administra el consumo y quema de calorias, realizada con React y TS.",
    urlGithub: "https://github.com/samueldlsantos/calorie-tracker",
    urlPreview: "https://calories-tracker-ts.netlify.app",
  },
  {
    id: 4,
    title: "Control de gastos",
    image: "https://github.com/samueldlsantos/control-gastos-contextapi/blob/main/preview.png?raw=true",
    description:
      "Una herramienta para definir tu presupuesto, agregar y clasificar gastos, y mantener un seguimiento preciso de tus finanzas.",
    urlGithub: "https://github.com/samueldlsantos/control-gastos-contextapi",
    urlPreview: "https://control-gastos-context.netlify.app/",
  },
];
