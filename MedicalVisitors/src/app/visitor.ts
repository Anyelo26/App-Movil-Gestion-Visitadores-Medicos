export class Visitor {
    full_name:string;
    born_date:string;
    height_cm:number;
    address:string;
    gps_lat:number;
    gps_lon:number;
    weight_kl:number;
    temperature:number;
    pressure:number;
    saturation:number;
    
    constructor(full_name:string,born_date: string, height_cm: number, address: string, 
                gps_lat:number, gps_lon:number, weight_kl:number, temperature:number, pressure:number, saturation:number){
        this.full_name=full_name;
        this.born_date=born_date;
        this.height_cm=height_cm;
        this.address=address;
        this.gps_lat=gps_lat;
        this.gps_lon=gps_lon;
        this.weight_kl=weight_kl;
        this.temperature=temperature;
        this.pressure=pressure;
        this.saturation=saturation;
    }

}
