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
