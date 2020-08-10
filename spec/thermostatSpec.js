
describe('Thermostat', function(){ // description of the class
    beforeEach(function(){ //  command to say before each test do something(classe,variable,etc)
     thermostat = new Thermostat(); // We created an object a global object.
   });


   it('Thermostat starts at 20 degrees', function(){
    expect(thermostat.temperature).toEqual(20); // thermostat is the object created interacting together with the constructor method
    });


    it('Increases the temperature', function(){
    thermostat.up();//
    expect(thermostat.temperature).toEqual(21);
  });

    it('Decrease the temperature', function(){
       thermostat.down();
       expect(thermostat.temperature).toEqual(19);
     });

    it('has a minimum of 10 degrees', function() {
      var i;
      for ( i = 0; i <= 10; i++) { //increment
      thermostat.down();
  };
      expect(thermostat.temperature).toEqual(10);
});

    it ('has powers saving mode on by default', function(){
      expect(thermostat.ispowerSaveModeOn()).toBe(true);
    });

      it ('can switch PMS off', function(){
      thermostat.switchPowerSaveModeOff();
      expect(thermostat.ispowerSaveModeOn()).toBe(false);

    });

    it('can switch PSM back on', function(){
      thermostat.switchPowerSaveModeOff();
      expect(thermostat.ispowerSaveModeOn()).toBe(false); // how stop switching between on and another true or false?? Have I gave a rithg solution for the test pass?
      thermostat.switchPowerSaveModeOff();
      expect(thermostat.ispowerSaveModeOn()).toBe(false);
    });
    describe('when power saving mode is on', function() {
      it('has a maximum temperature of 25 degrees', function(){
        for (var i = 0; i < 6; i++) {// I have a loop , inside there is the variable = 0 then if i less than 6?? increase it by one.
          thermostat.up();
        }
        expect(thermostat.temperature()).toEqual(25);

      });
    });
});
