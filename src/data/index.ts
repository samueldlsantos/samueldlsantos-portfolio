import { Experience, Project } from "../types";

export const experiences : Experience[] = [
    {
        id:1,
        year: "2023",
        role: "MES Programmer",
        company: "Johnson Controls",
        description: "MES Programmer en Johnson Controls"
    },
    {
        id:2,
        year: "2023 - Actual",
        role: "Desarrollador .NET",
        company: "FGJENL",
        description: "Programador .NET en la fiscalia del estado"
    }
]

export const projects: Project[]  = [
    {
        id:1,
        title:"Guitar Store",
        image:"",
        description:"Carrito de compras para una tienda de Guitarras creado con React y TS",
        urlGithub:"https://github.com/samueldlsantos/guitarstore-ts",
        urlPreview:"https://guitarstore-ts.netlify.app/"
    },
    {
        id:2,
        title:"Citas Veterinaria",
        image:"",
        description:"Aplicacion que da de alta citas que se atienden a pacientes en veterinaria, creada con React y JS",
        urlGithub:"https://github.com/samueldlsantos/citas-react",
        urlPreview:"https://citasveterinariareactvite.netlify.app/"
    },
    {
        id:3,
        title:"Calorie Tracker",
        image:"",
        description:"Aplicacion que administra el consumo y quema de calorias, realizada con React y TS.",
        urlGithub:"https://github.com/samueldlsantos/calorie-tracker",
        urlPreview:"https://calories-tracker-ts.netlify.app"
    }
]