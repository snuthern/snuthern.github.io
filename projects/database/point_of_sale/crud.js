/**
 * Copyright (c) 2020
 *
 * long description for the file
 *
 * @summary This file contains all CRUD operators
 * @author Yossi <yosileyid@gmail.com>
 * @description This file contains all the functions 
 *              needed to perform CRUD operations on 
 *              the database.json file. 
 *              
 * METHODS
 * =======
 * 
 * create_employee(first_name, last_name, role [hourly || salaried])
 * read_employee(employee_name)
 * update_employee(employee_name, property_to_update, new_value)
 * delete_employee(employee_name)
 * 
 * Created at     : 2020-06-21 02:21:56
 * Last modified  : 2020-06-21 15:31:40
 */


const Hourly = require('./Employee.js')
const data = require("./database.json")
const fs = require("fs")

// Function to add an employee to the DB

const create_employee = (first, last, role, pay) => {
    
	let employee = new Hourly.Employee(first, last, role, pay)

	if(data[employee.first_name+"_"+employee.last_name]){
		console.log(
		    `User: ${data[employee.first_name+"_"+employee.last_name].first_name+" "+data[employee.first_name+"_"+employee.last_name].last_name} exists already.`
		    
		)
	} else {
	    data[employee.first_name+"_"+employee.last_name] = employee
	
	    fs.writeFile("./database.json", JSON.stringify(data, 2), function() {
		    console.log( 
				`User: ${data[employee.first_name+"_"+employee.last_name].first_name+" "+data[employee.first_name+"_"+employee.last_name].last_name} added.`
			)
		})
	}
}


// create_employee( "John", "Smith", "hourly", 12 )

// function to retrieve employee info from DB

const read_employee = (employee_name) => {
	if(data[employee_name]){
		console.log(data[employee_name])
	} else {
		console.log("No such user")
	}
}

// read_employee("John_Smith")

// function to update a user

const update_employee = (employee_name, property_to_update, new_value) => {
	switch(property_to_update) {
		case("role"):
			data[employee_name].role = new_value
			break
		case("payrate"):
			data[employee_name].payrate = new_value
			break
	}

	fs.writeFile("./database.json", JSON.stringify(data, 2), function() {
		console.log(`User ${property_to_update} updated: ${new_value}`)
	})

}

// update_employee("Test_User", "payrate", 22)

// function to remove a user from the db

const delete_user = (employee_name) => {
	
	if(data[employee_name]){
		let newObj = data
	    delete newObj[employee_name] 
	    fs.writeFile("./database.json", JSON.stringify(newObj), function(){
		    console.log(`${employee_name} deleted from db.`)
	    })
	} else {
        console.log("User does not exist in db")
	}
}

// delete_user("Test_User")