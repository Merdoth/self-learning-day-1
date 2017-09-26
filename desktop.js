import Computer from "./computers"

class Desktop extends Computer {
    constructor(manufacturer, color, ram, harddisk, speed, screenType) {
        if (typeof screenType !== 'string' ) {
                throw new TypeError ('Invalid input type');
            }
      super();
      this._screenType = screenType;

    }
    
    get screenType () {
      return this._screenType
    }
    
    fanNoise(){
      return 'whossssh';
    }
  }

  export default Desktop;