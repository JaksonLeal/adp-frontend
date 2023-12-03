import { Week } from "./Week";
import { Workday } from "./Workday";

export interface Day {
    ID: number;
    nombreDia: string;
    semana: Week;
    jornada: Workday;

}