class Thermostat{
 constructor(){ // works as initialize as command to "thermostat interact with temperature"
    this.MINIMUM_TEMPERATURE = 10;
    this.temperature = 20;// this is equivalent to the instance variable
    this.powerSaveMode = true;
    this.MAX_LIMIT_PSM_ON = 25;
    this.MAX_LIMIT_PSM_OFF = 32;
 }// the argument is before the curly braces


    up(){
      if(this.isMaximumTemperature()){
        return;
      }
      this.temperature += 1
   }
    down(){
     if (this.temperature > this.MINIMUM_TEMPERATURE){
       this.temperature -= 1; // --;
     }
 }

    ispowerSaveModeOn(){
      return this.powerSaveMode === true;  // is the value is true? return true if is (return boolean)
 }
    switchPowerSaveModeOff(){
      return this.powerSaveMode = false;
    }
    switchPoewrSaveModeOn() {
       this.poewrSaveModeOn = true;
    }
    isMaximumTemperature() {
      if (this.ispowerSaveModeOn() === false) {
        return this.temperature === this.MAX_LIMIT_PSM_OFF;
      }
      return this.temperature === this.MAX_LIMIT_PSM_ON
    }
}

// on line 9 if this.temperature is greater than the MINIMUM_TEMPERATURE it can be decrease by -1
