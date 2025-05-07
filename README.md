# 💻 Explore Advanced Types of TypeScript
### ✅  [ 1 ] What is the use of the keyof keyword in TypeScript? Provide an example.
The keyof operator in TypeScript is used for extracting the keys of a type and is powerful for creating type-safe, generic, and dynamic code.
This operator returns a union type of all the property names (keys) of a given type.


### 1. Type-Safe Property Access
Used in generic functions to ensure only valid property names are accessed:
```ts
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
const person = { name: "Alice", age: 30 };
getProperty(person, "name"); 

```
### 2. Mapped Types with keyof
Build reusable types based on keys of another type:
```ts
type ReadonlyProps<T> = {
  readonly [K in keyof T]: T[K];
};

type User = { id: number; name: string };
type ReadonlyUser = ReadonlyProps<User>;
```
### 3. Constraining Generic Types
Prevent passing invalid keys by constraining K with keyof T:
```ts
function hasKey<T, K extends keyof T>(obj: T, key: K): boolean {
  return key in obj;
}

```
### ✅  [ 2 ] Provide an example of using union and intersection types in TypeScript.
### 1. Union Type (|)
In TypeScript, a union type allows a variable to hold values of multiple types, meaning a variable can be one of several types. The union is denoted by the pipe symbol (|), which joins the types
Union of Primitive Types
```ts
let value: string | number;

value = "hello"; 
value = 42;      

```
Union Type with if-else
```ts
type Pet = "cat" | "dog" | "bird";

function describePet(pet: Pet) {
  if (pet === "cat") {
    console.log("You have a cat!");
  } else if (pet === "dog") {
    console.log("You have a dog!");
  } else {
    console.log("You have a bird!");
  }
}

describePet("dog");   // Output: You have a dog!
describePet("cat");   // Output: You have a cat!
describePet("bird");  // Output: You have a bird!
```
### 2.Intersection Type (&)
In TypeScript, an intersection type allows you to combine multiple types into a single type that has all the properties and methods of the individual types. The intersection is denoted by the & operator.
```ts
type Animal = {
  name: string;
  species: string;
};

type Pet = {
  isFriendly: boolean;
};

type PetAnimal = Animal & Pet;

const myPet: PetAnimal = {
  name: "Buddy",
  species: "Dog",
  isFriendly: true,
};

console.log(myPet);
     

```




