declare var Docs: any;
declare class Owner {
    constructor(surname: any, name: any, patronymic: any, dataOfBirth: any, document: any, serieDocumnt: any, numberDocument: any);
    get surname(): any;
    set surname(surname: any);
    get name(): any;
    set name(name: any);
    get patronymic(): any;
    set patronymic(patronymic: any);
    get dataOfBirth(): any;
    set dataOfBirth(dataOfBirth: any);
    get document(): any;
    set document(document: any);
    get serieDocument(): any;
    set serieDocument(serieDocument: any);
    get numberDocument(): any;
    set numberDocument(numberDocument: any);
    showInfo(): void;
}
declare class Vehicle {
    constructor(mark: any, model: any, yearOfRelease: any, VIN_number: any, registrationNumber: any, owner: any);
    get mark(): any;
    set mark(mark: any);
    get model(): any;
    set model(model: any);
    get yearOfRelease(): any;
    set yearOfRelease(yearOfRelease: any);
    get VIN_number(): any;
    set VIN_number(VIN_number: any);
    get registrationNumber(): any;
    set registrationNumber(registrationNumber: any);
    get owner(): any;
    set owner(owner: any);
    showInfo(): void;
}
declare var CarcaseType: any;
declare var ClassCar: any;
declare class Car extends Vehicle {
    constructor(mark: any, model: any, yearOfRelease: any, VIN_number: any, registrationNumber: any, owner: any, carcase: any, classCar: any);
    get carcase(): any;
    set carcase(carcase: any);
    get classCar(): any;
    set classCar(classCar: any);
    showInfo(): void;
}
declare class Motorbike extends Vehicle {
    constructor(mark: any, model: any, yearOfRelease: any, VIN_number: any, registrationNumber: any, owner: any, forSport: any, frameType: any);
    get frameType(): any;
    set frameType(frameType: any);
    get forSport(): any;
    set forSport(forSport: any);
    showInfo(): void;
}
declare class VehicleStorage {
    constructor();
    get dateCreate(): any;
    get data(): any;
    save(data: any): void;
    getAll(): any;
}
declare const owner: Owner;
declare const car1: Car;
declare const car2: Car;
declare const owner1: Owner;
declare const bike1: Motorbike;
declare const bike2: Motorbike;
declare const v1: Vehicle;
declare const v2: Vehicle;
declare const v3: Vehicle;
declare const v4: Vehicle;
declare const vehicleStorage: VehicleStorage;
