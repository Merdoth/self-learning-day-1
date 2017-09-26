class Computer {
    constructor(manufacturer, color, ram, harddisk, speed) {
        if (typeof manufacturer !== 'string' ||
        typeof color !== 'string' ||
        typeof ram !== 'string' ||
        typeof harddisk !== 'string' ||
        typeof speed !== 'string') {
            throw new TypeError ('Invalid input type');
        }
     this._manufacturer = manufacturer;
     this._color = color;
     this._ram = ram;
     this._harddisk = harddisk;
     this._speed = speed;
    }
    
    get manufacturer () {
      return this._manufacturer;
    }
    
    set color(newColor) {
      this._color = newColor;
    }
    
    get color() {
      return this._color;
    }
    
    set ram(newRam) {
      this._ram = newRam;
    }
    
     get ram() {
      return this._ram;
    }
    
     set harddisk(newHarddisk) {
      this._harddisk = newHarddisk;
    }
    
     get harddisk() {
      return this._harddisk;
    }
    
     set speed(newSpeed) {
      this._speed = newSpeed;
    }
    
     get speed() {
      return this._speed;
    }
    
     on () {
      return `${_manufacturer} : Loading...`;
    }
    
    off () {
      return 'Shutting Down...';
    }
    
    fanNoise() {
      return 'Computer fan noise';
    }
}

export default Computer;