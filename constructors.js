//1) Create a Car class or function constructor that has the following properties:
//a. make (string): The make of the car, e.g., "Toyota".
//b. model (string): The model of the car, e.g., "Camry".
//c. year (number): The year the car was manufactured, e.g., 2020.
//d. isAvailable (boolean): Indicates if the car is currently available for rent.
//The Car class or function constructor should also have a method called
//toggleAvailability that changes the isAvailable property to its opposite value (true to
//false, false to true)

class Car{
    constructor(make,model,year){
    this.make=make;
    this.model=model;
    this.year=year;
    this.isAvailable="True";
    }
}
let car=new Car("Subaru","Camry",2022,);
console.log({car});

let vehicle=new Car("landcruser","new",2030);
console.log({vehicle});
console.log(vehicle.prototype);
vehicle.prototype.toggleAvailability="false";
console.log(Car.prototype);
console.log(vehicle.prototype);




//2 Create a Rental class or function constructor that has the following properties:
// car (Car object): The car that has been rented.
// renterName (string): The name of the person who rented the car.
 //rentalStartDate (Date object): The start date of the rental period.
 //rentalEndDate (Date object): The end date of the rental period.
//The Rental class or function constructor should also have a method called
//calculateRentalDuration that returns the rental duration in days.
class Rental{
    constructor(car,renterName,rentalStartdate,rentalEnddate){
        this.car=car
        this.renterName=renterName
        this.rentalStartdate=rentalStartdate
        this.rentalEnddate=rentalEnddate
    }
         
}
let Rental= new Rental("masendense ")

//3 Create an instance of the Car class or function constructor for a car in the
//inventory. Then, create an instance of the Rental class or function constructor for
//a rental involving the car you created. Finally, calculate the rental duration using