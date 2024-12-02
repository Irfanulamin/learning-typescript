// Basic Data Type

//string
let person_name: string = "Irfanul Amin";
//number
let person_age: number = 20;
//boolean
let isAdmin: boolean = true;
// undefined
let x: undefined = undefined;
// null
let y: null = null;
// any
let any: any;

// Arry of Strings and Numbers
let friends: string[] = ["Max", "Alex"];
let friendsAge: number[] = [19, 20];

// Tuple
let myself: [string, number, boolean] = ["Irfanul Amin", 20, true];

// Reference Type - Object

let developer: {
  name: string;
  age: number;
  isDeveloper?: boolean;
  gender: "male" | "female";
  isHuman: true;
} = {
  name: "Irfanul Amin",
  age: 20,
  isDeveloper: undefined,
  gender: "male",
  isHuman: true,
};

// Function

function sum(num1: number, num2: number): number {
  return num1 + num2;
}

const add = (num1: number, num2: number): number => {
  return num1 + num2;
};

const bankBalance = {
  acc_holder_name: "irfanul amin",
  balance: 0,
  addBalance(balance: number): string {
    this.balance = this.balance + balance;
    const finalBalance = this.balance;
    return `Your Final Amount is ${finalBalance}`;
  },
};

// Array Destructuring
const peoples: string[] = ["max", "snax", "alex", "joe", "john"];

const [, , bestfriend, ...rest] = peoples;

// Type Alias

type TPerson = {
  name: string;
  age: number;
  gender: "male" | "female";
  address: string;
};

const person1: TPerson = {
  name: "John Doe",
  age: 25,
  gender: "male",
  address: "123 Main Street, Cityville",
};

const person2: TPerson = {
  name: "Jane Smith",
  age: 30,
  gender: "female",
  address: "456 Elm Street, Townsville",
};

type SumFunction = (num1: number, num2: number) => number;

const sumofnumbers: SumFunction = (num1, num2) => num1 + num2;

// intersection
type Person = {
  name: string;
  age: number;
};

type Contact = {
  email: string;
  phone: string;
};

type PersonWithContact = Person & Contact;

const person: PersonWithContact = {
  name: "John",
  age: 30,
  email: "john@example.com",
  phone: "123-456-7890",
};

///
// 1. never type
// The never type is used for functions that never return a value, for example, throwing an error.
function throwError(message: string): never {
  // This function always throws an error and doesn't return anything
  throw new Error(message);
}

// 2. unknown type
// The unknown type is safer than `any` because it forces you to check the type before performing operations on it.
let value: unknown = "Hello, world!";

// To safely access properties or methods on an unknown type, you need to first check its type.
if (typeof value === "string") {
  console.log(value.toUpperCase());
}

// 3. Nullable types
// A nullable type allows a variable to either hold a specific type or `null`.
let personName: string | null = null; // `name` can either be a string or `null`.

personName = "John Doe";
console.log(personName);

personName = null;
console.log(personName);

// You can also include `undefined` in a nullable type if you want a variable to also be `undefined` or a specific type.
let age: number | null | undefined = undefined;
age = 25;
console.log(age);
age = null;
console.log(age);

// Type Assertion
{
  let value: unknown = "Hello, TypeScript!";
  let length: number = (value as string).length;
}

// Type VS Interface

type student = {
  name: string;
  age: number;
};

type studentWithRole = student & { role: number };

const seu_student: studentWithRole = {
  name: "MAX",
  age: 20,
  role: 1,
};

interface faculty {
  name: string;
  age: number;
}

interface facultyWithRole extends faculty {
  role: number;
}

const seu_faculty: facultyWithRole = {
  name: "ALEX",
  age: 20,
  role: 9071,
};

// Using type
type NumberArray = number[];

const numbers1: NumberArray = [1, 2, 3, 4];

// Using interface
interface INumberArray {
  [index: number]: number;
}

const numbers2: INumberArray = [5, 6, 7, 8];

console.log(numbers1, numbers2);

// Generic

type GenericArr = Array<number>;

const numArr: GenericArr = [1, 2, 23, 4];

const stringArr: Array<string> = ["max", "alex", "fox"];

type TypePerson = {
  name: string;
  age: number;
};

const people: TypePerson[] = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

type GenericArrOfPeople = Array<{ name: string; age: number }>;

const people2: GenericArrOfPeople = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

type GenericTuple = [name: string, age: number, isActive: boolean];

const persons: GenericTuple = ["Alice", 25, true];

{
  interface TStudent<T> {
    name: string;
    age: number;
    scholarship: T;
  }

  const fahim: TStudent<{
    type: string;
    hsc_gpa: number;
  }> = {
    name: "Fahim",
    age: 17,
    scholarship: {
      type: "HSC",
      hsc_gpa: 5.0,
    },
  };
  const mahim: TStudent<{
    university: string;
    cgpa: number;
  }> = {
    name: "Mahim",
    age: 22,
    scholarship: {
      university: "SEUniversity",
      cgpa: 3.9,
    },
  };
}

{
  // Function with Generic
  const returnValue = <T>(value: T): T => {
    return value;
  };

  const getArr = returnValue<number[]>([1, 2, 3, 4, 5]);
  const getObj = returnValue<{ id: number; name: string }>({
    id: 2,
    name: "Irfan",
  });
  const getNum = returnValue<number>(12);
}
