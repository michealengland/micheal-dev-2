---
title: ES6 Destructure Examples
# date: 2019-12-01T22:15:03.284Z
description: Here are some simple examples of what destructuring looks like in JavaScript.
pubDate: 'Dec 01 2019'
lastUpdated: 'Nov 12 2023'
heroImage: /src/content/blog/assets/robot-trex-cooking-breakfast-960x480.webp
heroAlt: 'Robot T-rex cooking breakfast.'
---

## Simple Examples of Destructuring in Javascript

Before going too far, let's talk about what destructuring is. Destructuring is the process of taking data and extracting the data into simpler pieces such as variables.

## Destructuring Objects

Let's take a simple object and destructure it.

```js
// Example object.
const person = {
  fName: 'Micheal',
  lName: 'England',
  age: '28'
}

// Extracting data one at a time.
firstName = person.firstName
lastName = person.lName
currentAge = person.age

// Extract more data with less code.
const {fName, lName, age} = person

console.log(fName)
console.log(lName)
console.log(age)
```

## Destructuring Functions

In this example we're destructuring a function that returns an object.

```js
// Example function that returns an object.
function createMotorcycle() {
  return {
    engine: '107 Cubic Inch',
    frame: 'touring',
    style: 'cruiser'
  }
}

// Extracting data one at a time.
const motorcycleEngine = createMotorcycle().engine
const motorcycleFrame = createMotorcycle().frame
const motorcycleStyle = createMotorcycle().style

// Extract more data with less code.
const {engine, frame, style} = createMotorcycle()

console.log(engine)
console.log(frame)
console.log(style)
```

## Destructuring Arrays

Just like functions and objects destructuring arrays is handled the in the same manner.

```js
console.log('Array Destructuring:')
const myArray = ['puppies', 'kittens', 'zombies']

// You can destructure a array like this...
const firstIndex = myArray[0]
const secondIndex = myArray[1]
const thirdIndex = myArray[2]

// Extract more data with less code.
const [puppies, kittens, zombies] = myArray

console.log(puppies)
console.log(kittens)
console.log(zombies)
```

### Assigning new variables

Let's take this one step further and assign new variables to values. During each of the exercises above, the variables all match the original property or index names.

**Destructured object with new variables:**

```js
const colorPalette = {
	exampleOne: 'Red',
	exampleTwo: 'Orange',
	exampleThree: 'Yellow',
}

// Assigning new variables.
const { exmapleOne: 'red', exampleTwo: 'orange', exampleThree: 'yellow' } = colorPalette;

console.log( red );
console.log( orange );
console.log( yellow );
```

**Destructured function with new variables:**

```js
function colorPalette() {
	return {
		exampleOne: 'Red',
		exampleTwo: 'Orange',
		exampleThree: 'Yellow',
	}
}

// Assigning new variables.
const { exmapleOne: 'red', exampleTwo: 'orange', exampleThree: 'yellow' } = colorPalette();

console.log( red );
console.log( orange );
console.log( yellow );
```

**Destructured array with new variables:**

```js
const colorPalette = [
  (exampleOne: 'Red'),
  (exampleTwo: 'Orange'),
  (exampleThree: 'Yellow')
]

// Assigning new variables.
const [
  exmapleOne: 'red',
  exampleTwo: 'orange',
  exampleThree: 'yellow'
] = colorPalette

console.log(red)
console.log(orange)
console.log(yellow)
```
