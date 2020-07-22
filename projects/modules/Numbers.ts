/**
 * Copyright (c) 2020
 * 
 * This module exports multiple functions for use
 * in manipulating digits in simple programs for 
 * fun and practice.
 *
 * @summary Numbers module written for fun and practice
 * @author Yossi <yosileyid@gmail.com>
 *
 * Created at     : 2020-06-21 02:21:56 
 * Last modified  : 2020-06-21 15:31:40
 */

const add = ( first: number, second: number ) => {
    return first + second
}

const subtract = ( first: number, second: number ) => {
    return first - second
}

const multiply = ( first: number, second: number ) => {
    return first * second
}

const divide = ( first: number, second: number ) => {
    return first / second
}

// Produce a range of numbers up to n using fibonacci sequence

const fib = (num_to_raise: number): number => {
    if (num_to_raise <= 1) {
        return 1
    }
    
    return fib(num_to_raise - 1) + fib(num_to_raise - 2)
}

// Convert Decimal to Binary 

const Decimal_To_Binary = (Decimal_Number: number) => {
    return Decimal_Number.toString(2)
}

// Convert Binary to Decimal

const Binary_To_Decimal = (Binary_Number: number) => {
    return parseInt(Binary_Number.toString(), 2)
}