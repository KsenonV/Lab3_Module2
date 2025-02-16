declare enum MyDocumentType {
    PASSPORT = "Passport",
    DRIVERLICENSE = "Driver License",
    IDCard = "ID Card"
}
declare enum BodyType {
    SEDAN = "Sedan",
    SUV = "SUV",
    HATCHBACK = "Hatchback"
}
declare enum CarClass {
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
declare class OwnerImpl implements Owner {
    private _lastName;
    private _firstName;
    private _middleName;
    private _birthDate;
    private _documentType;
    private _documentSeries;
    private _documentNumber;
    constructor(lastName: string, firstName: string, middleName: string, birthDate: Date, documentType: MyDocumentType, documentSeries: string, documentNumber: string);
    get lastName(): string;
    set lastName(value: string);
    get firstName(): string;
    set firstName(value: string);
    get middleName(): string;
    set middleName(value: string);
    get birthDate(): Date;
    set birthDate(value: Date);
    get documentType(): MyDocumentType;
    set documentType(value: MyDocumentType);
    get documentSeries(): string;
    set documentSeries(value: string);
    get documentNumber(): string;
    set documentNumber(value: string);
    printDetails(): void;
}
declare class VehicleImpl implements Vehicle {
    private _make;
    private _model;
    private _year;
    private _vin;
    private _registrationNumber;
    private _owner;
    constructor(make: string, model: string, year: number, vin: string, registrationNumber: string, owner: Owner);
    get make(): string;
    set make(value: string);
    get model(): string;
    set model(value: string);
    get year(): number;
    set year(value: number);
    get vin(): string;
    set vin(value: string);
    get registrationNumber(): string;
    set registrationNumber(value: string);
    get owner(): Owner;
    set owner(value: Owner);
    printVehicleDetails(): void;
}
interface Car extends Vehicle {
    bodyType: BodyType;
    carClass: CarClass;
}
declare class CarImpl extends VehicleImpl implements Car {
    private _bodyType;
    private _carClass;
    constructor(make: string, model: string, year: number, vin: string, registrationNumber: string, owner: Owner, bodyType: BodyType, carClass: CarClass);
    get bodyType(): BodyType;
    set bodyType(value: BodyType);
    get carClass(): CarClass;
    set carClass(value: CarClass);
    printVehicleDetails(): void;
}
interface Motorbike extends Vehicle {
    frameType: string;
    isSport: boolean;
}
declare class MotorbikeImpl extends VehicleImpl implements Motorbike {
    private _frameType;
    private _isSport;
    constructor(make: string, model: string, year: number, vin: string, registrationNumber: string, owner: Owner, frameType: string, isSport: boolean);
    get frameType(): string;
    set frameType(value: string);
    get isSport(): boolean;
    set isSport(value: boolean);
    printVehicleDetails(): void;
}
interface VehicleStorage<T extends Vehicle> {
    creationDate: Date;
    vehicles: T[];
    getAllVehicles(): T[];
    addVehicle(vehicle: T): void;
}
declare class VehicleStorageImpl<T extends Vehicle> implements VehicleStorage<T> {
    creationDate: Date;
    private _vehicles;
    constructor();
    get vehicles(): T[];
    getAllVehicles(): T[];
    addVehicle(vehicle: T): void;
}
declare const owner: OwnerImpl;
declare const car: CarImpl;
declare const storage: VehicleStorageImpl<Vehicle>;
