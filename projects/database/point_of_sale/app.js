const Hourly = require('./Employee.js')
const data = require("./employee-db.json")
const fs = require("fs")

const add_hourly_employee = (first, last, role, pay) => {
    
	let employee = new Hourly.Employee(first, last, role, pay)

	fs.writeFile("./employee-db.json", employee, function() {
		console.log( JSON.stringify(data) )
	})
}

add_hourly_employee( "John", "Smith", "hourly", 12 )
add_hourly_employee( "James", "Smith", "hourly", 15 )