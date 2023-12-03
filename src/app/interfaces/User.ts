import { Workday } from "./Workday";

export interface User {
    cedula: number;
    nombre: string;
    password: string;
    edad: string;
    numCelular: string;
    role: string;
    status: boolean;
    email: string;
    jornada: Workday;

}