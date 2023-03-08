let character: string;
let age: number;
let isLoggedn: boolean;

age = 98;

let ninjas: string[];

//union types
let mixed: (string | number | boolean)[] = [];
mixed.push("hello");
mixed.push(87);
mixed.push(true);

let uid: string | number;
uid = "hi";
uid = 6;

let user: object;
let userTwo: {
  name: string;
  age: number;
  category: string;
};
