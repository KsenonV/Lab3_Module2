enum MyDocumentType {
    PASSPORT = "Passport",
    DRIVERLICENSE = "Driver License",
    IDCard = "ID Card"
}

enum BodyType {
    SEDAN = "Sedan",
    SUV = "SUV",
    HATCHBACK = "Hatchback"
}

enum CarClass {
    ECONOMY = "Economy",
    BUSINESS = "Business",
    PREMIUM = "Premium"
}

interface Owner {
    lastName: string;
    firstName: string;
    middleName: string;
    birthDate: Date;
    documentType: MyDocumentType;
    documentSeries: string;
    documentNumber: string;
    printDetails(): void;
}

interface Vehicle {
    make: string;
    model: string;
    year: number;
    vin: string;
    registrationNumber: string;
    owner: Owner;
    printVehicleDetails(): void;
}

class OwnerImpl implements Owner {
    private _lastName: string;
    private _firstName: string;
    private _middleName: string;
    private _birthDate: Date;
    private _documentType: MyDocumentType;
    private _documentSeries: string;
    private _documentNumber: string;

    constructor(
        lastName: string, firstName: string, middleName: string, birthDate: Date,
        documentType: MyDocumentType, documentSeries: string, documentNumber: string
    ) {
        this._lastName = lastName;
        this._firstName = firstName;
        this._middleName = middleName;
        this._birthDate = birthDate;
        this._documentType = documentType;
        this._documentSeries = documentSeries;
        this._documentNumber = documentNumber;
    }

    get lastName(): string { return this._lastName; }
    set lastName(value: string) { this._lastName = value; }

    get firstName(): string { return this._firstName; }
    set firstName(value: string) { this._firstName = value; }

    get middleName(): string { return this._middleName; }
    set middleName(value: string) { this._middleName = value; }

    get birthDate(): Date { return this._birthDate; }
    set birthDate(value: Date) { this._birthDate = value; }

    get documentType(): MyDocumentType { return this._documentType; }
    set documentType(value: MyDocumentType) { this._documentType = value; }

    get documentSeries(): string { return this._documentSeries; }
    set documentSeries(value: string) { this._documentSeries = value; }

    get documentNumber(): string { return this._documentNumber; }
    set documentNumber(value: string) { this._documentNumber = value; }

    public printDetails(): void {
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

class VehicleImpl implements Vehicle {
    private _make: string;
    private _model: string;
    private _year: number;
    private _vin: string;
    private _registrationNumber: string;
    private _owner: Owner;

    constructor( make: string, model: string, year: number, vin: string,registrationNumber: string, owner: Owner) {
        this._make = make;
        this._model = model;
        this._year = year;
        this._vin = vin;
        this._registrationNumber = registrationNumber;
        this._owner = owner;
    }

    get make(): string 
    { return this._make; }
    set make(value: string) 
    { this._make = value; }
    get model(): string 
    { return this._model; }
    set model(value: string)
     { this._model = value; }
    get year(): number
     { return this._year; }
    set year(value: number) 
    { this._year = value; }
    get vin(): string 
    { return this._vin; }
    set vin(value: string)
    { this._vin = value; }
    get registrationNumber(): string
     { return this._registrationNumber; }
    set registrationNumber(value: string) 
    { this._registrationNumber = value; }
    get owner(): Owner
     { return this._owner; }
    set owner(value: Owner) 
    { this._owner = value; }

    public printVehicleDetails(): void {
        console.log(`Vehicle Details:
        Make: ${this._make}
        Model: ${this._model}
        Year: ${this._year}
        VIN: ${this._vin}
        Registration Number: ${this._registrationNumber}`);
    }
}

interface Car extends Vehicle {
    bodyType: BodyType;
    carClass: CarClass;
}

class CarImpl extends VehicleImpl implements Car {
    private _bodyType: BodyType;
    private _carClass: CarClass;

    constructor(
        make: string, model: string, year: number, vin: string,
        registrationNumber: string, owner: Owner, bodyType: BodyType, carClass: CarClass
    ) {
        super(make, model, year, vin, registrationNumber, owner);
        this._bodyType = bodyType;
        this._carClass = carClass;
    }

    get bodyType(): BodyType { return this._bodyType; }
    set bodyType(value: BodyType) { this._bodyType = value; }

    get carClass(): CarClass { return this._carClass; }
    set carClass(value: CarClass) { this._carClass = value; }

    public printVehicleDetails(): void {
        super.printVehicleDetails();
        console.log(`Body Type: ${this._bodyType}
        Car Class: ${this._carClass}`);
    }

}
interface Motorbike extends Vehicle {
    frameType: string;
    isSport: boolean;
}

class MotorbikeImpl extends VehicleImpl implements Motorbike {
    private _frameType: string;
    private _isSport: boolean;

    constructor(
        make: string,
        model: string,
        year: number,
        vin: string,
        registrationNumber: string,
        owner: Owner,
        frameType: string,
        isSport: boolean
    ) {
        super(make, model, year, vin, registrationNumber, owner);
        this._frameType = frameType;
        this._isSport = isSport;
    }

    get frameType(): string {
        return this._frameType;
    }

    set frameType(value: string) {
        this._frameType = value;
    }

    get isSport(): boolean {
        return this._isSport;
    }

    set isSport(value: boolean) {
        this._isSport = value;
    }

    public printVehicleDetails(): void {
        super.printVehicleDetails();
        console.log(`Frame Type: ${this._frameType}
        Is Sport: ${this._isSport ? "Yes" : "No"}`);
    }
}

interface VehicleStorage<T extends Vehicle> {
    creationDate: Date;
    vehicles: T[];
    getAllVehicles(): T[];
    addVehicle(vehicle: T): void;
}

class VehicleStorageImpl<T extends Vehicle> implements VehicleStorage<T> {
    public creationDate: Date;
    private _vehicles: T[];

    constructor() {
        this.creationDate = new Date();
        this._vehicles = [];
    }

    get vehicles(): T[] { return this._vehicles; }
    
    public getAllVehicles(): T[] {
        return this._vehicles;
    }

    public addVehicle(vehicle: T): void {
        this._vehicles.push(vehicle);
    }
}


const owner = new OwnerImpl("Ksenofontov", "Vladimir", "Andreevich", new Date(1950, 1, 28),MyDocumentType.PASSPORT, "2222", "666666");
const car = new CarImpl("BMW", "F90 M5", 2020, "123", "A123BC", owner, BodyType.SEDAN, CarClass.PREMIUM);
const storage = new VehicleStorageImpl<Vehicle>();
storage.addVehicle(car);
storage.getAllVehicles().forEach(vehicle => vehicle.printVehicleDetails());
