class Car {

  #brand;
  #model;
  #yearOfManufacturing;
  #maxSpeed;
  #maxFuelVolume;
  #fuelConsumption;
  #currentFuelVolume = 0;
  #isStarted = false;
  #mileage = 0;

  constructor(brand, model, yearOfManufacturing, maxSpeed, maxFuelVolume, fuelConsumption) {
    if (isValidString(brand)) throw new Error(`model invalid range or value type`);
    if (isValidString(model)) throw new Error(`brand invalid range or value type`);  
    if (isValidYear(yearOfManufacturing)) throw new Error(`yearOfManufacturing invalid range or value type`);    
    if (isValidMaxSpeed(maxSpeed)) throw new Error(`maxSpeed invalid range or value type`);    
    if (isValidMaxFuelVolume(maxFuelVolume)) throw new Error(`maxFuelVolume invalid range or value type`);    
    if (isValidFuelConsumption(fuelConsumption)) throw new Error(`fuelConsumption invalid range or value type`);   
    this.#brand = brand;
    this.#model = model;
    this.#yearOfManufacturing = yearOfManufacturing;
    this.#maxSpeed = maxSpeed;
    this.#maxFuelVolume = maxFuelVolume;
    this.#fuelConsumption = fuelConsumption; 
  }

  get brand() {
    return this.#brand;
  }

  set brand(value) {
    if (isValidString(value)) {
      throw new Error(`brand invalid range or value type`);
    }
    this.#brand = value;
  }

  get model() {
    return this.#model;
  }

  set model(value) {
    if (isValidString(value)) {
      throw new Error(`model invalid range or value type`);
    }
      this.#model = value;
  }

  get yearOfManufacturing() {
    return this.#yearOfManufacturing;
  }

  set yearOfManufacturing(value) {
    if (isValidYear(value)) {
      throw new Error(`yearOfManufacturing invalid range or value type`);
    }
    this.#yearOfManufacturing = value;
  }

  get maxSpeed() {
    return this.#maxSpeed;
  }

  set maxSpeed(value) {
    if (isValidMaxSpeed(value)) {
      throw new Error(`maxSpeed invalid range or value type`);
    }
    this.#maxSpeed = value;
  }

  get maxFuelVolume() {
    return this.#maxFuelVolume;
  }
  
  set maxFuelVolume(value) {
    if (isValidMaxFuelVolume(value)) {
      throw new Error(`maxFuelVolume invalid range or value type`);
    }
    this.#maxFuelVolume = value;
  }

  get fuelConsumption() {
    return this.#fuelConsumption;
  }

  set fuelConsumption(value) {
    if (isValidFuelConsumption(value)) {
      throw new Error(`fuelConsumption invalid range or value type`);
    }
    this.#fuelConsumption = value;
  }

  get currentFuelVolume() {
    return this.#currentFuelVolume; 
  }

  get isStarted() {
    return this.#isStarted;
  }

  get mileage() {
    return this.#mileage;
  }

  start() {
    if (this.#isStarted) throw new Error("Машина уже заведена");   
       this.#isStarted = true; 
  }

  shutDownEngine() {
    if (!this.#isStarted)throw new Error("Машина ещё не заведена");
      this.#isStarted = true;
  }

  fillUpGasTank(fuel) {
    if (!isValidNumber(fuel)) {
      throw new Error("Неверное количество топлива для заправки");
    }
    if (isValidRang(fuel)) {
      throw new Error("Неверное количество топлива для заправки");
    }
      this.#currentFuelVolume += fuel;
    
    if (this.#currentFuelVolume > 20) {
      throw new Error("Топливный бак переполнен");
    }

  }

  drive(speed, hours) {
    if (!isValidNumber(speed) || isValidRang(speed)) {
      throw new Error("Неверная скорость");
    }
    if (!isValidNumber(hours) || isValidRang(hours)) {
      throw new Error("Неверное количество часов");
    }
    if (speed > 300) {
      throw new Error("Машина не может ехать так быстро");
    }

    if (!this.#isStarted){
      throw new Error("Машина должна быть заведена, чтобы ехать");
    }
    if (this.#currentFuelVolume < 5){
      throw new Error("Недостаточно топлива");
    }else {
      let distanceTraveled = speed * hours;
      let requiredFuel = distanceTraveled * this.#fuelConsumption / 100;
      this.#currentFuelVolume -= requiredFuel;
      this.#mileage += distanceTraveled;
    }
  }
}

function isValidRang(rang) {
   return rang === 0 || rang < 0;
}

function isValidNumber(gas) {
  return typeof gas === 'number' && !isNaN(gas) && isFinite(gas);
}

function isValidString(string) {
  return typeof string !== 'string' || string.length < 1 || string.length > 50; 
}
  
function isValidYear(year) {
  return year < 1900 || year > new Date().getFullYear() || typeof year !== 'number' && isNaN(year);
}

function isValidMaxSpeed(speed) {
  return speed < 100 || speed > 300 || typeof speed !== 'number' && isNaN(speed);
}

function isValidMaxFuelVolume(maxFuelVolume) {
  return maxFuelVolume < 5 || maxFuelVolume > 20 || typeof maxFuelVolume !== 'number' && isNaN(maxFuelVolume);
}

function isValidFuelConsumption(fuelConsumption) {
  return  fuelConsumption < 1.2 || fuelConsumption > 3 || typeof fuelConsumption !== 'number' && isNaN(fuelConsumption);
}

module.exports = Car;
