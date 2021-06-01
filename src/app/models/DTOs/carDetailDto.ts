import { Brand } from "../brand";
import { Color } from "../color";
import { LocationDto } from "./locationDto";

export interface CarDetailDto{
    id:number,
    name:string,
    brand:Brand,
    color:Color,
    location:LocationDto,
    modelYear:number,
    dailyPrice:number,
    description:string
}