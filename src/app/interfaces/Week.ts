import { Day } from "./Day";
import { Month } from "./Month";

export interface Week {
    ID: number;
    fecha: Date;
    mes: Month;
    dia: Day;

}