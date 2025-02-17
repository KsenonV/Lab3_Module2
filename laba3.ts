var Docs;
(function (Docs) {
    Docs["PASSPORT"] = "\u041F\u0430c\u043F\u043E\u0440\u0442";
    Docs["POLIC"] = "\u041F\u043E\u043B\u0438\u0441";
    Docs["STUDENCHESKY"] = "\u0421\u0442\u0443\u0434\u0435\u043D\u0447\u0435\u0441\u043A\u0438\u0439";
})(Docs || (Docs = {}));
class Owner {
    constructor(surname, name, patronymic, dataOfBirth, document, serieDocumnt, numberDocument) {
        this._surname = surname;
        this._name = name;
        this._dataOfBirth = dataOfBirth;
        this._document = document;
        this._numberDocument = numberDocument;
        this._patronymic = patronymic;
        this._serieDocument = serieDocumnt;
    }
    get surname() { return this._surname; }
    set surname(surname) { this._surname = surname; }
    get name() { return this._name; }
    set name(name) { this._name = name; }
    get patronymic() { return this._patronymic; }
    set patronymic(patronymic) { this._patronymic = patronymic; }
    get dataOfBirth() { return this._dataOfBirth; }
    set dataOfBirth(dataOfBirth) { this._dataOfBirth = dataOfBirth; }
    get document() { return this._document; }
    set document(document) { this._document = document; }
    get serieDocument() { return this._serieDocument; }
    set serieDocument(serieDocument) { this._serieDocument = serieDocument; }
    get numberDocument() { return this._numberDocument; }
    set numberDocument(numberDocument) { this._numberDocument = numberDocument; }
    showInfo() {
        console.log(this._surname, this._name, this._dataOfBirth, this._document, this._numberDocument, this._serieDocument, this._patronymic);
    }
}
class Vehicle {
    constructor(mark, model, yearOfRelease, VIN_number, registrationNumber, owner) {
        this._mark = mark;
        this._model = model;
        this._yearOfRelease = yearOfRelease;
        this._VIN_number = VIN_number;
        this._registrationNumber = registrationNumber;
        this._owner = owner;
    }
    get mark() { return this._mark; }
    set mark(mark) { this._mark = mark; }
    get model() { return this._model; }
    set model(model) { this._model = model; }
    get yearOfRelease() { return this._yearOfRelease; }
    set yearOfRelease(yearOfRelease) { this._yearOfRelease = yearOfRelease; }
    get VIN_number() { return this._VIN_number; }
    set VIN_number(VIN_number) { this._VIN_number = VIN_number; }
    get registrationNumber() { return this._registrationNumber; }
    set registrationNumber(registrationNumber) { this._registrationNumber = registrationNumber; }
    get owner() { return this._owner; }
    set owner(owner) { this._owner = owner; }
    showInfo() {
        console.log(this._mark, this._model, this._VIN_number, this._owner, this._registrationNumber, this._yearOfRelease);
    }
}
var CarcaseType;
(function (CarcaseType) {
    CarcaseType["UNIVERSAL"] = "\u0423\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B\u044C\u043D\u044B\u0439";
    CarcaseType["KUPE"] = "\u041A\u0443\u043F\u0435";
    CarcaseType["SEDAN"] = "\u0421\u0435\u0434\u0430\u043D";
    CarcaseType["Crossover"] = "\u041A\u0440\u043E\u0441\u0441\u043E\u0432\u0435\u0440";
})(CarcaseType || (CarcaseType = {}));
;
var ClassCar;
(function (ClassCar) {
    ClassCar["A"] = "\u041C\u0438\u043D\u0438-\u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C";
    ClassCar["B"] = "\u041C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0439 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C";
    ClassCar["C"] = "\u0441\u0440\u0435\u0434\u043D\u0435\u0440\u0430\u0437\u043C\u0435\u0440\u043D\u044B\u0439 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C";
    ClassCar["D"] = "\u043F\u043E\u043B\u043D\u043E\u0440\u0430\u0437\u043C\u0435\u0440\u043D\u044B\u0439 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C";
})(ClassCar || (ClassCar = {}));
class Car extends Vehicle {
    constructor(mark, model, yearOfRelease, VIN_number, registrationNumber, owner, carcase, classCar) {
        super(mark, model, yearOfRelease, VIN_number, registrationNumber, owner);
        this._carcase = carcase;
        this._classCar = classCar;
    }
    get carcase() { return this._carcase; }
    set carcase(carcase) { this._carcase = carcase; }
    get classCar() { return this._classCar; }
    set classCar(classCar) { this._classCar = classCar; }
    showInfo() {
        console.log(this._carcase, this._classCar, this.mark, this.model, this.yearOfRelease, this.registrationNumber, this.VIN_number);
    }
}
class Motorbike extends Vehicle {
    constructor(mark, model, yearOfRelease, VIN_number, registrationNumber, owner, forSport, frameType) {
        super(mark, model, yearOfRelease, VIN_number, registrationNumber, owner);
        this._forSport = forSport;
        this._frameType = frameType;
    }
    get frameType() { return this._frameType; }
    set frameType(frameType) { this._frameType = frameType; }
    get forSport() { return this._forSport; }
    set forSport(forSport) { this._forSport = forSport; }
    showInfo() {
        console.log(this._frameType, this._forSport, this.mark, this.model, this.yearOfRelease, this.registrationNumber, this.VIN_number);
    }
}
class VehicleStorage {
    constructor() {
        this._dateCreate = new Date();
        this._data = [];
    }
    get dateCreate() { return this._dateCreate; }
    get data() { return this._data; }
    save(data) {
        this._data.push(data);
    }
    getAll() { return this._data; }
}
const owner = new Owner("Ксенофонтов", "Владимир", "Андреевич", new Date(), Docs.PASSPORT, 1111111, 42422);
const car1 = new Car("Ford", "Focus", 2009, 2444, 32131, owner, CarcaseType.KUPE, ClassCar.B);
const car2 = new Car("Sckoda", "Octavia", 2019, 24434, 561365, owner, CarcaseType.SEDAN, ClassCar.C);
const owner1 = new Owner("Карашов", "Сергей", "Сергеевич", new Date(), Docs.POLIC, 12312, 235145);
const bike1 = new Motorbike("cool", "colcol", 2014, 12421, 2144, owner1, true, "маленький");
const bike2 = new Motorbike("lave", "lamelame", 2020, 5325235, 2352, owner1, false, "большой");
const v1 = new Vehicle("BMW", "M5", 2019, 451, 51141, owner);
const v2 = new Vehicle("Lada", "Vesta", 2023, 5214, 114, owner1);
const v3 = new Vehicle("Toyota", "Camry", 2018, 4112, 515511, owner1);
const v4 = new Vehicle("Skoda", "Oktavia", 2014, 5151, 421412, owner);
const vehicleStorage = new VehicleStorage();
vehicleStorage.save(v1);
vehicleStorage.save(v2);
vehicleStorage.save(v3);
vehicleStorage.save(v4);
console.log(vehicleStorage.getAll());
