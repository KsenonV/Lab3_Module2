var MyDocumentType;
(function (MyDocumentType) {
    MyDocumentType["PASSPORT"] = "Passport";
    MyDocumentType["DRIVERLICENSE"] = "Driver License";
    MyDocumentType["IDCard"] = "ID Card";
})(MyDocumentType || (MyDocumentType = {}));
var BodyType;
(function (BodyType) {
    BodyType["SEDAN"] = "Sedan";
    BodyType["SUV"] = "SUV";
    BodyType["HATCHBACK"] = "Hatchback";
})(BodyType || (BodyType = {}));
var CarClass;
(function (CarClass) {
    CarClass["ECONOMY"] = "Economy";
    CarClass["BUSINESS"] = "Business";
    CarClass["PREMIUM"] = "Premium";
})(CarClass || (CarClass = {}));
class OwnerImpl {
    constructor(lastName, firstName, middleName, birthDate, documentType, documentSeries, documentNumber) {
        this._lastName = lastName;
        this._firstName = firstName;
        this._middleName = middleName;
        this._birthDate = birthDate;
        this._documentType = documentType;
        this._documentSeries = documentSeries;
        this._documentNumber = documentNumber;
    }
    get lastName() { return this._lastName; }
    set lastName(value) { this._lastName = value; }
    get firstName() { return this._firstName; }
    set firstName(value) { this._firstName = value; }
    get middleName() { return this._middleName; }
    set middleName(value) { this._middleName = value; }
    get birthDate() { return this._birthDate; }
    set birthDate(value) { this._birthDate = value; }
    get documentType() { return this._documentType; }
    set documentType(value) { this._documentType = value; }
    get documentSeries() { return this._documentSeries; }
    set documentSeries(value) { this._documentSeries = value; }
    get documentNumber() { return this._documentNumber; }
    set documentNumber(value) { this._documentNumber = value; }
    printDetails() {
        console.log(`Owner Details:
        Last Name: ${this._lastName}
        First Name: ${this._firstName}
        Middle Name: ${this._middleName}
        Birth Date: ${this._birthDate.toDateString()}
        Document Type: ${this._documentType}
        Document Series: ${this._documentSeries}
        Document Number: ${this._documentNumber}`);
    }
}
class VehicleImpl {
    constructor(make, model, year, vin, registrationNumber, owner) {
        this._make = make;
        this._model = model;
        this._year = year;
        this._vin = vin;
        this._registrationNumber = registrationNumber;
        this._owner = owner;
    }
    get make() { return this._make; }
    set make(value) { this._make = value; }
    get model() { return this._model; }
    set model(value) { this._model = value; }
    get year() { return this._year; }
    set year(value) { this._year = value; }
    get vin() { return this._vin; }
    set vin(value) { this._vin = value; }
    get registrationNumber() { return this._registrationNumber; }
    set registrationNumber(value) { this._registrationNumber = value; }
    get owner() { return this._owner; }
    set owner(value) { this._owner = value; }
    printVehicleDetails() {
        console.log(`Vehicle Details:
        Make: ${this._make}
        Model: ${this._model}
        Year: ${this._year}
        VIN: ${this._vin}
        Registration Number: ${this._registrationNumber}`);
    }
}
class CarImpl extends VehicleImpl {
    constructor(make, model, year, vin, registrationNumber, owner, bodyType, carClass) {
        super(make, model, year, vin, registrationNumber, owner);
        this._bodyType = bodyType;
        this._carClass = carClass;
    }
    get bodyType() { return this._bodyType; }
    set bodyType(value) { this._bodyType = value; }
    get carClass() { return this._carClass; }
    set carClass(value) { this._carClass = value; }
    printVehicleDetails() {
        super.printVehicleDetails();
        console.log(`Body Type: ${this._bodyType}
        Car Class: ${this._carClass}`);
    }
}
class MotorbikeImpl extends VehicleImpl {
    constructor(make, model, year, vin, registrationNumber, owner, frameType, isSport) {
        super(make, model, year, vin, registrationNumber, owner);
        this._frameType = frameType;
        this._isSport = isSport;
    }
    get frameType() {
        return this._frameType;
    }
    set frameType(value) {
        this._frameType = value;
    }
    get isSport() {
        return this._isSport;
    }
    set isSport(value) {
        this._isSport = value;
    }
    printVehicleDetails() {
        super.printVehicleDetails();
        console.log(`Frame Type: ${this._frameType}
        Is Sport: ${this._isSport ? "Yes" : "No"}`);
    }
}
class VehicleStorageImpl {
    constructor() {
        this.creationDate = new Date();
        this._vehicles = [];
    }
    get vehicles() { return this._vehicles; }
    getAllVehicles() {
        return this._vehicles;
    }
    addVehicle(vehicle) {
        this._vehicles.push(vehicle);
    }
}
const owner = new OwnerImpl("Ksenofontov", "Vladimir", "Andreevich", new Date(1950, 1, 28), MyDocumentType.PASSPORT, "2222", "666666");
const car = new CarImpl("BMW", "F90 M5", 2020, "123", "A123BC", owner, BodyType.SEDAN, CarClass.PREMIUM);
const storage = new VehicleStorageImpl();
storage.addVehicle(car);
storage.getAllVehicles().forEach(vehicle => vehicle.printVehicleDetails());
