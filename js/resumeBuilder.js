var name = "Brent Duncan";
var formattedName = HTMLheaderName.replace("%data%", name)

var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role)

$("#header").prepend(formattedName);
$("#header").prepend(formattedRole);

var Bio = {
	// <img src="images/headshot.jpg" alt="me">
	"name" : "Brent",
	"role" : "Web Developer",
	"Welcome into my Skull."
	"skills" : "HTML/CSS Programmer" ,"JS" ,"Insanity"
}
$("#header").append(formattedBio);