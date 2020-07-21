---
title: Number Modules in Ts
permalink: /projects/numbers/
layout: page
excerpt: Simple numbers module rendered to html to display code
comments: false
---

Numbers modules are simple number manipulation modules I create for solving challenges and for later use in programs if I need them. Simple things like addition, subtraction, multiplication, and division are useful for example in a calculator app. I will link the code in the [projects](/projects/) page to go to those repos. Being a [TypeScript](/tags/#typescript/) developer, I write all of my code in ts. You can compile these into Javascript files and run locally, but I use [Deno](/tags/#deno/) a simple typescript engine written and created by the creator of Node.Js Ryan Dahl

```ts

// Addition, Subtraction, Multiplication, and Division
// These functions only take two arguments, in a real world 
// situation this would need to be recoded to allow as many 
// as needed. I also bundle these into a class Object in another 
// file. 
//
// https://github.com/snuthern/snuthern/tree/master/modules/Numbers.ts


const addition = (first_number: number, second_number: number) => {
    return first_number + second_number 
}

addition( 1 , 3 )  // 4

const subtraction = (first_number: number, second_number: number) => {
    return first_number - second_number 
}

subtraction( 5 , 1 ) // 4 

const multiplication = (first_number: number, second_number: number) => {
    return first_number * second_number 
}

multiplication( 5 , 5 ) // 25

const division = (first_number: number, second_number: number) => {
    return first_number / second_number 
}

division( 25 , 5 ) // 5
```
