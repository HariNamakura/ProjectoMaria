import { locationlistI } from "./locationList.interface";
import { monitorlistI } from "./monitorList.interface";
import { plaguelistI } from "./plagueList.interface";

export class BinnacleAdd {
    "binnacleDate"!: String;
    "deseaseID"!: Number;
    "monitorID"!: Number;
    "bedID"!: Number;
    "supervisorID"!: Number;
}