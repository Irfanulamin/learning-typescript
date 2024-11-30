"use strict";
// Basic Data Type
//string
let person_name = "Irfanul Amin";
//number
let person_age = 20;
//boolean
let isAdmin = true;
// undefined
let x = undefined;
// null
let y = null;
// any
let any;
// Arry of Strings and Numbers
let friends = ["Max", "Alex"];
let friendsAge = [19, 20];
// Tuple
let myself = ["Irfanul Amin", 20, true];
// Reference Type - Object
let developer = {
    name: "Irfanul Amin",
    age: 20,
    isDeveloper: undefined,
    gender: "male",
    isHuman: true,
};
// Function
function sum(num1, num2) {
    return num1 + num2;
}
const add = (num1, num2) => {
    return num1 + num2;
};
const bankBalance = {
    acc_holder_name: "irfanul amin",
    balance: 0,
    addBalance(balance) {
        this.balance = this.balance + balance;
        const finalBalance = this.balance;
        return `Your Final Amount is ${finalBalance}`;
    },
};
// Array Destructuring
const peoples = ["max", "snax", "alex", "joe", "john"];
const [, , bestfriend, ...rest] = peoples;
const person1 = {
    name: "John Doe",
    age: 25,
    gender: "male",
    address: "123 Main Street, Cityville",
};
const person2 = {
    name: "Jane Smith",
    age: 30,
    gender: "female",
    address: "456 Elm Street, Townsville",
};
const sumofnumbers = (num1, num2) => num1 + num2;
const person = {
    name: "John",
    age: 30,
    email: "john@example.com",
    phone: "123-456-7890",
};
///
// 1. never type
// The never type is used for functions that never return a value, for example, throwing an error.
function throwError(message) {
    // This function always throws an error and doesn't return anything
    throw new Error(message);
}
// 2. unknown type
// The unknown type is safer than `any` because it forces you to check the type before performing operations on it.
let value = "Hello, world!";
// To safely access properties or methods on an unknown type, you need to first check its type.
if (typeof value === "string") {
    console.log(value.toUpperCase());
}
// 3. Nullable types
// A nullable type allows a variable to either hold a specific type or `null`.
let personName = null; // `name` can either be a string or `null`.
personName = "John Doe";
console.log(personName);
personName = null;
console.log(personName);
// You can also include `undefined` in a nullable type if you want a variable to also be `undefined` or a specific type.
let age = undefined;
age = 25;
console.log(age);
age = null;
console.log(age);
