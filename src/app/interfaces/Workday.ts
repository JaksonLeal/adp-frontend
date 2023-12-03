import { Day } from "./Day";
import { User } from "./User";

export interface Workday {
    ID: number;
    descanso: Date;
    horaEntrada: number;
    horaSalida: number;
    dia: Day;
    usuario: User;
}