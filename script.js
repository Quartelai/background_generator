var classroom = [
	{
		username: "walter",
		password: "N44Kwaaley"
	},
	{
		username: "wendy",
		password: "1234"
	},
	{
		username: "violet",
		password: "2345"
	}
];

var course = [
	{ 
		username: "Alvina",
		timeline: "So tired from all the noise!"
	},
	{
		username: "Caitlyn",
		timeline: "I love pets"
	},
	{
		username: "kaia-lauren",
		timeline: "I love tick-tock"
	}
];

function isUserValid(username, password) {
	for (var i =0; i < classroom.length; i++){
			if(classroom[i].username === username && 
				classroom[i].password === password) {
				return true;
			}
		}
		return false;
	}

 function signIn(username, password) {
 	 if (isUserValid(username, password)) {
 	 	console.log(course);
 	 } else {
 	 	alert("sorry, wrong username and password!");
 	 }
 }	

var userNamePrompt = prompt("what is your username?");
var passwordPrompt = prompt("What is your password");

signIn(userNamePrompt, passwordPrompt);   