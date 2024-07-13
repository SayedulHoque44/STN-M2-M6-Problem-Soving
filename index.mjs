import fs from "fs";
const rawData = fs.readFileSync("data.json");
const jsonData = JSON.parse(rawData);
const { person, books, cars } = jsonData[0];

//1.Task: Array Filtering And Mapping Create An Array Of Objects, Each Representing A Person With Properties Like Name, Age, And Gender. Write A Function To Filter Out All Females And Then Map The Remaining People To An Array Of Names. Print The Final Result.

const FemaleNames = (persons) => {
  const females = persons.filter((ele) => ele.gender === "female");
  return females.map((ele) => ele.name);
};
// console.log(FemaleNames(person));

//2.Task: Object Manipulation Create An Array Of Objects Representing Books With Properties Like Title, Author, And Year. Write A Function That Takes The Array And Returns A New Array With Only The Book Titles. Print The Result.
const BookTitle = (books) => {
  return books.map((ele) => ele.title);
};

//console.log(BookTitle(books));

//3.Task: Function Composition Write Three Functions: One To Square A Number, One To Double A Number, And One To Add 5 To A Number. Compose These Functions To Create A New Function That Squares A Number, Doubles The Result, And Then Adds 5.

const square = (n) => n * n;
const double = (n) => n * 2;
const addFive = (n) => n + 5;

// Compose the functions
const composeFunctions = (n) => addFive(double(square(n)));

const result = composeFunctions(5);
//console.log(result);

//4.Task: Sorting Objects Create An Array Of Objects Representing Cars With Properties Like Make, Model, And Year. Write A Function To Sort The Array Of Cars By The Year Of Manufacture In Ascending Order. Print The Sorted Array.

const sortCarsByYear = (carArray) => {
  return carArray.sort((a, b) => a.year - b.year);
};

//console.log(sortCarsByYear(cars));

//5.Task: Find And Modify Write A Function That Searches An Array Of Objects For A Specific Person By Name. If Found, Modify Their Age Property. Print The Updated Array.

const modifyPersonAge = (personArray, personName, newAge) => {
  return personArray.map((ele) => {
    if (ele.name === personName) {
      ele.age = 140;
    }
    return ele;
  });

  //another way
  //   for (let person of personArray) {
  //     if (person.name === personName) {
  //       person.age = newAge;
  //       break;
  //     }
  //   }
  //   return personArray;
};
console.log(modifyPersonAge(person, "Jane", 28));

//6.Task: Array Reduction Create An Array Of Numbers. Write A Function That Uses The Reduce Method To Calculate The Sum Of All Even Numbers In The Array.

//7.  Task: Leap Year CheckerWrite A Function That Determines Whether A Given Year Is A Leap Year.Example: Happy New Year

//8. Task: Unique Values Create An Array Of Numbers With Some Duplicate Values. Write A Function To Filter Out The Duplicate Values And Return A New Array With Only Unique Numbers. Print The Result.

//09. Task: Find Maximum Value: Write A Function That Takes An Array Of Numbers And Returns The Maximum Value.

//10.Task: Advanced Sorting Create An Array Of Objects Representing Students With 'Name' And 'Grades' Properties. Write A Function To Sort The Students By Average Grade In Descending Order.

//11. Task: Functional Programming - Reduce Write A Function That Uses The Reduce Function To Calculate The Total Value Of An Array Of Objects With A 'Quantity' And 'Price' Property.Interview
