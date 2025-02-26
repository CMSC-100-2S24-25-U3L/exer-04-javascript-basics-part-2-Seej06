function generateUniqueID(fname, lname) {
	// checking if inputs are correct
	if(typeof(fname) != "string" && typeof(lname)!= "string"){
    	return false;
	}

	const {v4: uuidv4 } = require('uuid');

	let alphanumeric = uuidv4()

	let id = fname[0].toLowerCase()+lname.toLowerCase()+alphanumeric.substring(0,8)

	return id;
}

function addAccount(Details){
	//checking if conditions are correct
	if(Array.isArray(Details)){ //check if input is an array
    	if(Details.length == 4){ //check if there are 4 elements in the array
        	if(Details[0].length === 0 || Details[1].length === 0 || Details[2].length === 0){ //check if any entries are empty string
            	console.log("Some details are empty string!");
            	return false;
        	} else {
            	var validator = require('validator');
            	if(validator.isEmail(Details[2])){
                	if(Details[3] >= 18){
                    	console.log("All details are valid!");

                    	const newUser = Details[0] + ", " + Details[1] + ", " + Details[2] + ", " + Details[3] + ", " + generateUniqueID(Details[0], Details[1])
                    	const fs = require('fs')

                    	fs.appendFileSync("users.txt", newUser + "\n")
                    	return true;

                	} else {console.log("Underage!"); return false}
            	} else {console.log("Email is not valid!");return false}
        	}
    	} else {console.log("Lacking details!");return false}
	} else {console.log("Not an array!"); return false}

}

module.exports.generateUniqueID = generateUniqueID;
module.exports.addAccount = addAccount;
