const Hourly = require('./Employee.js')
const data = require("./employee-db.json")
const fs = require("fs")

const add_hourly_employee = (first, last, role, pay) => {
    
	let employee = new Hourly.Employee(first, last, role, pay)

	if(data[employee.first_name+"_"+employee.last_name]){
		console.log(
		    `User: ${data[employee.first_name+"_"+employee.last_name].first_name+" "+data[employee.first_name+"_"+employee.last_name].last_name} exists already.`
		    
		)
	} else {
	    data[employee.first_name+"_"+employee.last_name] = employee
	
	    fs.writeFile("./employee-db.json", JSON.stringify(data, 2), function() {
		    console.log( 
				`User: ${data[employee.first_name+"_"+employee.last_name].first_name+" "+data[employee.first_name+"_"+employee.last_name].last_name} added.`
			)
		})
	}
}


add_hourly_employee( "John", "Smith", "hourly", 12 )
add_hourly_employee( "James", "Smith", "hourly", 15 )
add_hourly_employee( "Bob", "Smith", "hourly", 15 )