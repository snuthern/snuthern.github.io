// Unit Converter (temp, currency, volume, mass and more)
// - Converts various units between one another. The user 
//   enters the type of unit being entered, the type of unit
//   they want to convert to and then the value. The program
//   will then make the conversion.
//
//
// TEMP
// C to F
// Ex: Celsius_To_Faranheit(26)

const Celsius_To_Faranheit = (Temprature: number) => {
    console.log( `C: ${Temprature}, F: ${Math.round((Temprature * 9/5) + 32)}` )
}

// F to C
// Ex: Faranheit_To_Celsius(78)

const Faranheit_To_Celsius = (Temprature: number) => {
    console.log( `F: ${Temprature}, C: ${Math.round((Temprature - 32) * 5/9)}` )
}

// CURRENCY CONVERSION

import { readJsonSync } from "https://deno.land/std/fs/mod.ts";

const data: any = readJsonSync("./latest.json")


// Ex: USD_To_ILS(750)
const USD_To_ILS = (dollars_to_convert: number) => {
     
    const ils = data.rates.ILS
    
    let shekels = (dollars_to_convert * ils).toString().split(".")
    let converted_change: string[] = []
    
    for (var i = 0; i < shekels[1].length; i++) {
        if(i === 0 || i === 1){
            converted_change.push(shekels[1][i])
        }
    }

    console.log( `USD $${dollars_to_convert} = ILS $${shekels[0]+"."+converted_change[0]+converted_change[1]}` )
}


// Ex: ILS_To_USD(33)
const ILS_To_USD = (shekels_to_convert: number) => {
    
    const usd = data.rates.USD
    
    let dollars = (shekels_to_convert * usd).toString().split(".")
    let converted_change: string[] = []
    
    for (var i = 0; i < dollars[1].length; i++) {
        if(i === 0 || i === 1){
            converted_change.push(dollars[1][i])
        }
    }

    console.log( `ILS $${shekels_to_convert} = USD $${dollars[0]+"."+converted_change[0]+converted_change[1]}` )
}

// VOLUME

// MASS