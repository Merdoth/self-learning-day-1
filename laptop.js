import Computer from "./computers";

class Laptop extends Computer {
    constructor(manufacturer, color, ram, harddisk, speed, batteryType){
        if (typeof batteryType !== 'string' ) {
            throw new TypeError ('Invalid input type');
        }
     super();
     this._batteryType = batteryType;
 
   }
   
   get batteryType () {
     return this._batteryType
   }
 
   
   fanNoise(){
     return 'sssssssshhhhhh';
   }
}
 
export default Laptop;