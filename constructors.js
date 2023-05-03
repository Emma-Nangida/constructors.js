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

let vehicle=new Car("Subaru",2030,"toggleAvailability");
console.log({vehicle});
console.log(Car.prototype);
Car.prototype.toggleAvailability="false";
console.log(Car.prototype);
// console.log(vehicle.prototype);




//2 Create a Rental class or function constructor that has the following properties:
// car (Car object): The car that has been rented.
// renterName (string): The name of the person who rented the car.
 //rentalStartDate (Date object): The start date of the rental period.
 //rentalEndDate (Date object): The end date of the rental period.
//The Rental class or function constructor should also have a method called
//calculateRentalDuration that returns the rental duration in days.

        class Rental{
            constructor(object,renterName,rentalStartDate,rentalEndDate){
                this.object=object
                this.renterName=renterName
                this.rentalStartDate=rentalStartDate
                this.rentalEndDate=rentalEndDate
            }
            calculateRentalDuration(){
                this.rentalEndDate=!this.rentalEndDate
            }
        }
        let rental=new Rental("tiana","emma",60,30)
        console.log(Rental)

//3 Create an instance of the Car class or function constructor for a car in the
//inventory. Then, create an instance of the Rental class or function constructor for
//a rental involving the car you created. Finally, calculate the rental duration using


//1. Create a Question class with the following properties:
//● text(string): The text of the question.
//● options(array): An array containing the multiple-choice options.
//● correctAnswer(string): The correct answer to the question.
//The Question class should also have a method called checkAnswer that takes a
//user's answer as a parameter and returns true if the answer is correct and false
//otherwise.
class Question {
    constructor(text, options, correctAnswer) {
      this.text = text;
      this.options = options;
      this.correctAnswer = correctAnswer;
    }
    checkAnswer(userAnswer) {
      return userAnswer === this.correctAnswer;
    }
  }
  const myQuestion = new Question('Which is the largest continent in the world?',
   ['America', 'Newzeeland', 'Asia'], 'Africa');
  console.log(myQuestion.checkAnswer('Asia'));
  console.log(myQuestion.checkAnswer('Africa'));
  
  //2. Create a Quiz class with the following properties:
  //● questions(array):An array of Question objects.
  //● currentQuestionIndex(number): The index of the current question in the
  //questions array.
 // ● score(number): The user’s current score.
 // The Quiz class should have the following methods:
  //● addQuestion: Takes a Question object as a parameter and adds it to the
  //questions array.
  //● nextQuestion: Advances to the next question in the quiz by incrementing the
  //currentQuestionIndex.
 // ● submitAnswer: Takes a user's answer as a parameter, checks if the answer is
  //correct using the checkAnswer method of the Question class, and updates the
  //score if the answer is correct.
 