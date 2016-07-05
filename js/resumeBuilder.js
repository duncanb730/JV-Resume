
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
        "HTML/CSS", "JavaScript/jQuery", "Website Construction", "AJAX", "iOS/Swift", "General Insanity"
    ],
    "biopic": "images/headshot.jpg"
};
function displayBio() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedHome = HTMLhome.replace("%data%", bio.contacts.home);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedSkills = HTMLskills.replace("%data%", bio.skills);
    var formattedbiopic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#lets-connect").append(formattedHome, formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);
    $("#topContacts").append(formattedHome, formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);
    $("#main").prepend(formattedbiopic);
    $("#header").append(formattedMsg);
    $("#header").append(HTMLskillsStart);
   for (var i = 0; i < bio.skills.length; i++) {
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
    $("#skills").append(formattedSkill);
   }
}
displayBio();

var education = {
    "schools": [{
        "name": "Cape Fear Community College",
        "location": "Wilmington, NC",
        "degree": "AAS",
        "major": "Marine Technology",
        "dates": "2000-2003"
    }, {
        "name": "Belmont University",
        "location": "Nashville, TN",
        "degree": "BS",
        "major": "General Sciences",
        "dates": "2010-2013"
    }],
    "onlineCourses": [{
        "title": "HTML/CSS",
        "school": "Udacity",
        "dates": "2016",
        "url": "http://www.udacity.com"
    }, {
        "title": "Responsive Web Design Fundamentals",
        "school": "Udacity",
        "dates": "2016",
        "url": "http://www.udacity.com"
    }, {
        "title": "Responsive Images",
        "school": "Udacity",
        "dates": "2016",
        "url": "http://www.udacity.com"
    }, {
        "title": "Version Control",
        "school": "Udacity",
        "dates": "2016",
        "url": "http://www.udacity.com"
    }, {
        "title": "JavaScript Syntax",
        "school": "Udacity",
        "dates": "2016",
        "url": "http://www.udacity.com"
    }, {
        "title": "jQuery Syntax",
        "school": "Udacity",
        "dates": "2016",
        "url": "http://www.udacity.com"
    }]
};

var work = {
    jobs: [{
       "employer": "Bean/Stuyvesant, LLC",
        "title": "Field Engineer",
        "dates": "2005-2007",
        "location": "New Orleans, LA",
        "description": "Served as an assistant Project Engineer in several areas. Became familiar with high-accuracy GPS systems, basic hydrographic survey equipment, HyPack data collection and analysis software, and routinely served as on-call tech support for Field Operations. With this company I worked in places like New Orleans, Tampa/St Petersburg, FL, Astoria, OR, and Texas City, TX. Most of the projects I was assigned were in the northern Gulf Coast."
    }, {
        "employer": "Fugro Pelagos, Inc.",
        "title": "Field Hydrographer",
        "dates": "2007-2010",
        "location": "San Diego, CA",
        "description": "Surveyed much of the California Coastline using advanced multibeam sonars, used multibeam and sidescan sonars to locate missing equipment, boats, and debris, and assisted in subsea cable-laying operations in Asia. Set up equipment on ships and boats, including GPS and real-time 3D postioning systems. Served as Lead Hydrographer on short-notice, rapid completion projects. Routinely tasked with testing new or updated equipment and software systems and making necessary adjustments on-the-fly. I worked and surveyed much of the California Coastline, as well as parts of Alaska's Aleutian Islands and worked as a Navigation Officer and Assistant Cable Engineer on cable-laying projects in the South China Sea, Taiwan, Vietnam, and the Philippines."
    }, {
        "employer": "Home Depot, Inc.",
        "title": "Customer service associate-paint, Customer educator",
        "dates": "2010-2012",
        "location": "Nashville, TN",
        "description": "Handled large numbers of customers regularly, often working with several customers and their orders at once. Commonly worked the department alone or with limited assistance. Often lead customer education classes and assisted in training new hires."
    }, {
        "employer": "Lowes Home Improvement Stores",
        "title": "Receiver",
        "dates": "2014-2015",
        "location": "Franklin, TN",
        "description": "Unloaded trucks using heavy machinery, but also stocked shelves, ran POS stations, built displays, drove cleaning machinery, and repaired damage done by customers or clumsy employees. In many ways, doing almost everything possible in the store, short of management."
    }, {
        "employer": "H&R Block, Inc.",
        "title": "Tax Preparer",
        "dates": "2012-2015",
        "location": "Nashville, TN",
        "description": "Worked as a tax preparer in one of the more difficult regions of Nashville. Had clients from the investment, finance, entertainment, education, and medical fields. Each one had it's own difficulties and snags. Regularly worked with multiple IRS forms, including 1040, 1040ez, 1040(c), 1099, and more than a dozen other forms for investments, deductions, child support, etc. Often advised clients on minimizing tax payments and arranging necessary payments."
    }] 
};
    
for (var i = 0; i < work.jobs.length; i++) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
    $(".work-entry:last").append(formattedDates);
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
    $(".work-entry:last").append(formattedLocation);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
    $(".work-entry:last").append(formattedDescription);
}

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});
var projects = {
    "project": [{
        "title": "Portfolio",
        "dates": "2016",
        "description": "First iteration of my personal portfolio. Updates will be coming out as projects are finished and/or updated.",
        "images": "images/Portfolio_mk1.15.jpg"
    }, {
        "title": "Dylan's Page",
        "dates": "2016",
        "description": "I built this one for practice right after finishing the portfolio project. It has JavaScript modals built in, providing larger images and notes from the photographer and parents.",
        "images": "images/Dylans_page.jpg"
    }, {
        "title": "Animal Trading Card",
        "dates": "2016",
        "description": "This one was simple but fun.",
        "images": "images/AnimalCard.jpg"
    }, {
        "title": "Under Construction",
        "dates": "2016",
        "description": "As always, there are projects in the works. There should be at least two more projects and several more classes listed on this resume in the near future. Until then, have a picture of a puppy.",
        "images": "http://lorempixel.com/640/480/animals/8"
    }]
};
for (var i = 0; i < projects.project.length; i++) {
    $("#projects").append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.project[i].title);
    $(".project-entry:last").append(formattedTitle);
    var formattedDates = HTMLprojectDates.replace("%data%", projects.project[i].dates);
    $(".project-entry:last").append(formattedDates);
    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.project[i].description);
    $(".project-entry:last").append(formattedDescription);
    var formattedImages = HTMLprojectImage.replace("%data%", projects.project[i].images);
    $(".project-entry:last").append(formattedImages);
}

for (var i = 0; i < education.schools.length; i++) {
    $("#education").append(HTMLschoolStart);
    var formattedSchool = HTMLschoolName.replace("%data%", education.schools[i].name);
    var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
    var formattedSchoolDegree = formattedSchool + formattedDegree;
    $(".education-entry:last").append(formattedSchoolDegree);
    var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
    $(".education-entry:last").append(formattedDates);
    var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
    $(".education-entry:last").append(formattedLocation);
    var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
    $(".education-entry:last").append(formattedMajor);

}
$("#education").append(HTMLonlineClasses);
for (var i = 0; i < education.onlineCourses.length; i++) {
    $("#education").append(HTMLschoolStart);
    var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
    var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
    var formattedTitleSchool = formattedTitle + formattedSchool;
    $(".education-entry:last").append(formattedTitleSchool);
    var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
    $(".education-entry:last").append(formattedDates);
    var formattedurl = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
    $(".education-entry:last").append(formattedurl);
}

$("#mapDiv").append(googleMap);