var bio = {
	"name": "Brent Duncan",
	"role": "Web Developer",
	"contacts": {
		"home": "925-684-4229",
		"mobile": "931-237-7790",
		"email": "duncanb730@gmail.com",
		"github": "duncanb730",
		"twitter": "@tweetgonesilent",
		"location": "Brentwood, CA"
	},
	"welcomeMessage": "New beginnings can bring greater ends.",
	"skills": [
		"HTML/CSS", "JavaScript", "tenacity", "General Insanity"
	],
	"bioPic": "images/headshot.jpg"
};

var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
var formattedHome = HTMLhome.replace("%data%",bio.contacts.home);
var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
var formattedMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
var formattedSkills = HTMLskills.replace("%data%",bio.skills);
var formattedbioPic = HTMLbioPic.replace("%data%",bio.bioPic);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#lets-connect").append(formattedHome);
$("#lets-connect").append(formattedMobile);
$("#lets-connect").append(formattedEmail);
$("#lets-connect").append(formattedGithub);
$("#lets-connect").append(formattedTwitter);
$("#lets-connect").append(formattedLocation);
$("#main").prepend(formattedbioPic);
$("#header").append(formattedMsg);

if (bio.skills.length>0) {
	$("#header").append(HTMLskillsStart);
	 var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
	 $("#skills").append(formattedSkill);
	 var formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
	 $("#skills").append(formattedSkill);
	 var formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
	 $("#skills").append(formattedSkill);
	 var formattedSkill = HTMLskills.replace("%data%",bio.skills[3]);
	 $("#skills").append(formattedSkill);
}

var education = {
	"school": [
		{
			"name": "Cape Fear Community College",
			"location": "Wilmington, NC",
			"degree": "AAS",
			"major": "Marine Technology",
			"dates": "2000-2003"
		},
		{
			"name": "Belmont University",
			"location": "Nashville, TN",
			"degree": "BS",
			"major": "General Sciences",
			"dates": "2010-2013"
		}
	],
	"onlineCourses": [
		{
			"title": "HTML/CSS",
			"school": "Udacity",
			"dates": "2016",
			"URL": "http://www.udacity.com"
		},
		{
			"title": "Responsive Web Design Fundamentals",
			"school": "Udacity",
			"dates": "2016",
			"URL": "http://www.udacity.com"
		},
		{
			"title": "Responsive Images",
			"school": "Udacity",
			"dates": "2016",
			"URL": "http://www.udacity.com"
		},
		{
			"title": "Version Control",
			"school": "Udacity",
			"dates": "2016",
			"URL": "http://www.udacity.com"
		},
		{
			"title": "JavaScript Syntax",
			"school": "Udacity",
			"dates": "2016",
			"URL": "http://www.udacity.com"
		}
	]
	// display: function() {
	// for (i in education.school){
	// 	$("#education").append(HTMLschoolStart);

	// 	var formattedSchoolName = HTMLschoolName.replace("%data%",education.school[i].name);
	// 	var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.school[i].degree);
	// 	var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.school[i].dates);
	// 	var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education[i].school.location);
	// 	var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",education.school[i].major);
		
	// 	$("#education").append(formattedSchoolName);
	// 	$("#education").append(formattedSchoolDegree);
	// 	$("#education").append(formattedSchoolDates);
	// 	$("#education").append(formattedSchoolLocation);
	// 	$("#education:last-child").append(formattedSchoolMajor);
	// 	}
	// }
};
$("#education").append(HTMLschoolStart);
var formattedSchoolName = HTMLschoolName.replace("%data%",education.school[0].name);
$("#education").append(formattedSchoolName);
var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.school[0].dates);
$("#education").append(formattedSchoolDates);
var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.school[0].degree);
$("#education").append(formattedSchoolDegree);
var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",education.school[0].major);
$("#education").append(formattedSchoolMajor);
var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.school[0],location);
$("#education").append(formattedSchoolLocation);

$("#education").append(HTMLschoolStart);
var formattedSchoolName = HTMLschoolName.replace("%data%",education.school[1].name);
$("#education").append(formattedSchoolName);
var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.school[1].dates);
$("#education").append(formattedSchoolDates);
var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.school[1].degree);
$("#education").append(formattedSchoolDegree);
var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",education.school[1],major);
$("#education").append(formattedSchoolMajor);
var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.school[1],location);
$("#education").append(formattedSchoolLocation);

$("#education").append(HTMLonlineClasses);
var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[0].title);
$("#education").append(formattedOnlineTitle);
var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[0].school);
$("#education").append(formattedOnlineSchool);
var formattedOnlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[0].dates);
$("#education").append(formattedOnlineDates);
var formattedOnlineURL = HTMLonlineURL.replace("%data%",education.onlineCourses[0].URL);
$("#education").append(formattedOnlineURL);

var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[1].title);
$("#education").append(formattedOnlineTitle);
var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[1].school);
$("#education").append(formattedOnlineSchool);
var formattedOnlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[1].dates);
$("#education").append(formattedOnlineDates);
var formattedOnlineURL = HTMLonlineURL.replace("%data%",education.onlineCourses[1].URL);
$("#education").append(formattedOnlineURL);

var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[2].title);
$("#education").append(formattedOnlineTitle);
var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[2].school);
$("#education").append(formattedOnlineSchool);
var formattedOnlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[2].dates);
$("#education").append(formattedOnlineDates);
var formattedOnlineURL = HTMLonlineURL.replace("%data%",education.onlineCourses[2].URL);
$("#education").append(formattedOnlineURL);

var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[3].title);
$("#education").append(formattedOnlineTitle);
var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[3].school);
$("#education").append(formattedOnlineSchool);
var formattedOnlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[3].dates);
$("#education").append(formattedOnlineDates);
var formattedOnlineURL = HTMLonlineURL.replace("%data%",education.onlineCourses[3].URL);
$("#education").append(formattedOnlineURL);

var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[4].title);
$("#education").append(formattedOnlineTitle);
var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[4].school);
$("#education").append(formattedOnlineSchool);
var formattedOnlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[4].dates);
$("#education").append(formattedOnlineDates);
var formattedOnlineURL = HTMLonlineURL.replace("%data%",education.onlineCourses[4].URL);
$("#education").append(formattedOnlineURL);


var work = [
	{
		"employer": "Bean/Stuyvesant, LLC",
		"title": "Field Engineer",
		"dates": "2005-2007",
		"location": "Based in New Orleans, LA. Worked on projects in the American Gulf Coast and Oregon",
		"description": "Served as an assistant Project Engineer in several areas. Became familiar with high-accuracy GPS systems, basic hydrographic survey equipment, HyPack data collection and analysis software, and routinely served as on-call tech support for Field Operations."
	},
	{
		"employer": "Fugro Pelagos, Inc.",
		"title": "Field Hydrographer",
		"dates": "2007-2010",
		"location": "Based in San Diego, CA. Worked projects in the American Gulf Coast, much of the California Coastline, Alaska, Mexico, and large portions of the South China Sea.",
		"description": "Surveyed much of the California Coastline using advanced multibeam sonars and assisted in subsea cable-laying operations in Asia. Set up equipment on ships and boats, including GPS and real-time 3D postioning systems. Served as Lead Hydrographer on short-notice, rapid completion projects. Routinely tasked with testing new or updated equipment and software systems and making necessary adjustments on-the-fly."
	},
	{
		"employer": "Home Depot, Inc.",
		"title": "Customer service associate-paint, Customer educator",
		"dates": "2010-2012",
		"location": "Nashville, TN",
		"description": "Handled large numbers of customers regularly, often working with several customers and their orders at once. Commonly worked the department alone or with limited assistance. Often lead customer education classes and assisted in training new hires."
	},
	{
		"employer": "H&R Block, Inc.",
		"title": "Tax Preparer",
		"dates": "2012-2015",
		"location": "Nashville, TN",
		"description": "Worked as a tax preparer in one of the more difficult regions of Nashville. Had clients from the investment, finance, entertainment, education, and medical fields. Each one had it's own difficulties and snags. Regularly worked with multiple IRS forms, including 1040, 1040ez, 1040(c), 1099, and more than a dozen other forms for investments, deductions, child support, etc. Often advised clients on minimizing tax payments and arranging necessary payments."
	},
	{
		"employer": "Lowes Home Improvement Stores",
		"title": "Reciever",
		"dates": "2014-2015",
		"location": "Franklin, TN",
		"description": "Unloaded trucks using heavy machinery, but also stocked shelves, ran POS stations, built displays, drove cleaning machinery, and repaired damage done by customers or clumsy employees. In many ways, doing almost everything possible in the store, short of management."
	}
];

$("#workExperience").append(HTMLworkStart);
var formattedWorkEmployer = HTMLworkEmployer.replace("%data%",work[0].employer);
$("#workExperience").append(formattedWorkEmployer);
var formattedWorkTitle = HTMLworkTitle.replace("%data%",work[0].title);
$("#workExperience").append(formattedWorkTitle);
var formattedWorkDates = HTMLworkDates.replace("%data%".work[0].dates);
$("#workExperience").append(formattedWorkDates);
var formattedWorkLocation = HTMLworkLocation.replace("%data%",work[0].location);
$("#workExperience").append(formattedWorkLocation);
var formattedWorkDescription = HTMLworkDescription.replace("%data%",work[0].description);
$("#workExperience").append(formattedWorkDescription);

$("#workExperience").append(HTMLworkStart);
var formattedWorkEmployer = HTMLworkEmployer.replace("%data%",work[1].employer);
$("#workExperience").append(formattedWorkEmployer);
var formattedWorkTitle = HTMLworkTitle.replace("%data%",work[1].title);
$("#workExperience").append(formattedWorkTitle);
var formattedWorkDates = HTMLworkDates.replace("%data%".work[1].dates);
$("#workExperience").append(formattedWorkDates);
var formattedWorkLocation = HTMLworkLocation.replace("%data%",work[1].location);
$("#workExperience").append(formattedWorkLocation);
var formattedWorkDescription = HTMLworkDescription.replace("%data%",work[1].description);
$("#workExperience").append(formattedWorkDescription);

$("#workExperience").append(HTMLworkStart);
var formattedWorkEmployer = HTMLworkEmployer.replace("%data%",work[2].employer);
$("#workExperience").append(formattedWorkEmployer);
var formattedWorkTitle = HTMLworkTitle.replace("%data%",work[2].title);
$("#workExperience").append(formattedWorkTitle);
var formattedWorkDates = HTMLworkDates.replace("%data%".work[2].dates);
$("#workExperience").append(formattedWorkDates);
var formattedWorkLocation = HTMLworkLocation.replace("%data%",work[2].location);
$("#workExperience").append(formattedWorkLocation);
var formattedWorkDescription = HTMLworkDescription.replace("%data%",work[2].description);
$("#workExperience").append(formattedWorkDescription);

$("#workExperience").append(HTMLworkStart);
var formattedWorkEmployer = HTMLworkEmployer.replace("%data%",work[3].employer);
$("#workExperience").append(formattedWorkEmployer);
var formattedWorkTitle = HTMLworkTitle.replace("%data%",work[3].title);
$("#workExperience").append(formattedWorkTitle);
var formattedWorkDates = HTMLworkDates.replace("%data%".work[3].dates);
$("#workExperience").append(formattedWorkDates);
var formattedWorkLocation = HTMLworkLocation.replace("%data%",work[3].location);
$("#workExperience").append(formattedWorkLocation);
var formattedWorkDescription = HTMLworkDescription.replace("%data%",work[3].description);
$("#workExperience").append(formattedWorkDescription);

$("#workExperience").append(HTMLworkStart);
var formattedWorkEmployer = HTMLworkEmployer.replace("%data%",work[4].employer);
$("#workExperience").append(formattedWorkEmployer);
var formattedWorkTitle = HTMLworkTitle.replace("%data%",work[4].title);
$("#workExperience").append(formattedWorkTitle);
var formattedWorkDates = HTMLworkDates.replace("%data%".work[4].dates);
$("#workExperience").append(formattedWorkDates);
var formattedWorkLocation = HTMLworkLocation.replace("%data%",work[4].location);
$("#workExperience").append(formattedWorkLocation);
var formattedWorkDescription = HTMLworkDescription.replace("%data%",work[4].description);
$("#workExperience").append(formattedWorkDescription);

if (work.length>0) {
	for (var job in work.jobs) {

		$("#workExperience").append(HTMLworkStart);

		var formattedWorkEmployer1 = HTMLworkEmployer.replace("%data%".work[job].employer);
		var formattedWorkTitle1 = HTMLworkTitle.replace("%data%",work[job].title);
		var formattedWorkDates1 = HTMLworkDates.replace("%data%",work[job].dates);
		var formattedWorkLocation1 = HTMLworkLocation.replace("%data%",work[job].location);
		var formattedWorkDescription1  = HTMLworkDescription.replace("%data%",work[job].description);
		var formattedEmployerTitle1 = formattedWorkEmployer + formattedWorkTitle;

		$(".work.entry:last").append(formattedEmployerTitle);
	}
}
// var formattedWorkEmployer = HTMLworkEmployer.replace("%data%",work.employer);
// var formattedWorkTitle = HTMLworkTitle.replace("%data%",work.title);
// var formattedWorkDates = HTMLworkDates.replace("%data%",work.dates);
// var formattedWorkLocation = HTMLworkLocation.replace("%data%",work.location);
// var formattedWorkDescription  = HTMLworkDescription.replace("%data%",work.description);

// var projects = {
// 	"projects" = [
// 		{
// 			"title": "Sample",
// 			"dates": "2016",
// 			"description": "Sample",
// 			"images": [
// 			"screenshot",
// 			],
// 		}
// 	]
// }

