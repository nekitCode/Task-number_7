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
    if (isValidString(brand)) throw new Error(`parameter ${brand} typeof ${typeof brand} is not string or length < 1 or > 50`);
    if (isValidString(model)) throw new Error(`parameter ${model} typeof ${typeof model} is not string or length < 1 or > 50`);    
    if (isValidYear(yearOfManufacturing)) throw new Error(`Error`);    
    if (isValidMaxSpeed(maxSpeed)) throw new Error(`Error`);    
    if (isValidMaxFuelVolume(maxFuelVolume)) throw new Error(`Error`);    
    if (isValidFuelConsumption(fuelConsumption)) throw new Error(`Error`);    
    this.#brand = brand;
    this.#model = model;
    this.#yearOfManufacturing = yearOfManufacturing;
    this.#maxSpeed = maxSpeed;
    this.#maxFuelVolume = maxFuelVolume;`` 
    this.#fuelConsumption = fuelConsumption; 
  }

  get brand() {
    return this.#brand;
  }

  set brand(value) {
    if (isValidString(value)) {
      throw new Error(`brand typeof ${typeof value} is not string or length < 1 or > 50`);
    }
    this.#brand = value;
  }

  get model() {
    return this.#model;
  }

  set model(value) {
    if (isValidString(value)) {
      throw new Error(`model typeof ${typeof value} is not string or length < 1 or > 50`);
    }
      this.#model = value;
  }

  get yearOfManufacturing() {
    return this.#yearOfManufacturing;
  }

  set yearOfManufacturing(value) {
    if (isValidYear(value)) {
      throw new Error(`typeof ${typeof value}`);
    }
    this.#yearOfManufacturing = value;
  }

  get maxSpeed() {
    return this.#maxSpeed;
  }

  set maxSpeed(value) {
    if (isValidMaxSpeed(value)) {
      throw new Error(`typeof ${typeof value}`);
    }
    this.#maxSpeed = value;
  }

  get maxFuelVolume() {
    return this.#maxFuelVolume;
  }
  
  set maxFuelVolume(value) {
    if (isValidMaxFuelVolume(value)) {
      throw new Error(`typeof ${typeof value} maxFuelVolume`);
    }
    this.#maxFuelVolume = value;
  }

  get fuelConsumption() {
    return this.#fuelConsumption;
  }

  set fuelConsumption(value) {
    if (isValidFuelConsumption(value)) {
      throw new Error(`typeof ${typeof value}`);
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
    if (this.#isStarted) {
      throw new Error("Машина уже заведена");
    }else {
      this.#isStarted = true;
    }
  }

  shutDownEngine() {
    if (!this.#isStarted) {
      throw new Error("Машина ещё не заведена");
    }else {
      this.#isStarted = true;
    }
  }

  fillUpGasTank(gas) {
    if (!isValidNumber(gas)) {
      throw new Error("Неверное количество топлива для заправки 1");
    }
    if (isValidRang(gas)) {
      throw new Error("Неверное количество топлива для заправки 2");
    }
    if (gas > 20 || this.#currentFuelVolume > 20) {
      throw new Error("Топливный бак переполнен");
    }
    this.#currentFuelVolume += gas;
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
      let distance = speed * hours;
      let v = distance * this.#fuelConsumption / 100;
      this.#currentFuelVolume -= v;
      this.#mileage += distance;
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