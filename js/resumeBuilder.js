
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
    "bioPic": "images/headshot.jpg"
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
    var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
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
   if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
    $("#skills").append(formattedSkill);
   }
}
displayBio();

var education = {
    "school": [{
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
        "URL": "http://www.udacity.com"
    }, {
        "title": "Responsive Web Design Fundamentals",
        "school": "Udacity",
        "dates": "2016",
        "URL": "http://www.udacity.com"
    }, {
        "title": "Responsive Images",
        "school": "Udacity",
        "dates": "2016",
        "URL": "http://www.udacity.com"
    }, {
        "title": "Version Control",
        "school": "Udacity",
        "dates": "2016",
        "URL": "http://www.udacity.com"
    }, {
        "title": "JavaScript Syntax",
        "school": "Udacity",
        "dates": "2016",
        "URL": "http://www.udacity.com"
    }, {
        "title": "jQuery Syntax",
        "school": "Udacity",
        "dates": "2016",
        "URL": "http://www.udacity.com"
    }]
};

var work = [{
    "employer": "Bean/Stuyvesant, LLC",
    "title": "Field Engineer",
    "dates": "2005-2007",
    "location": "New Orleans, LA",
    "description": "Served as an assistant Project Engineer in several areas. Became familiar with high-accuracy GPS systems, basic hydrographic survey equipment, HyPack data collection and analysis software, and routinely served as on-call tech support for Field Operations."
}, {
    "employer": "Bean/Stuyvesant, LLC",
    "title": "Field Engineer",
    "location": "Tampa Bay, FL"
}, {
    "employer": "Fugro Pelagos, Inc.",
    "title": "Field Hydrographer",
    "dates": "2007-2010",
    "location": "San Diego, CA",
    "description": "Surveyed much of the California Coastline using advanced multibeam sonars, used multibeam and sidescan sonars to locate missing equipment, boats, and debris, and assisted in subsea cable-laying operations in Asia. Set up equipment on ships and boats, including GPS and real-time 3D postioning systems. Served as Lead Hydrographer on short-notice, rapid completion projects. Routinely tasked with testing new or updated equipment and software systems and making necessary adjustments on-the-fly."
}, {
    "employer": "Fugro Pelagos, Inc.",
    "title": "Field Engineer",
    "location": "San Francisco, CA"
}, {
    "employer": "Fugro Pelagos, Inc.",
    "title": "Data Analyst",
    "location": "Dutch Harbor, AK"
}, {
    "employer": "Fugro Pelagos, Inc.",
    "title": "Assistant Cable Engineer",
    "location": "Keelung City, Taiwan"
}, {
    "employer": "Fugro Pelagos, Inc.",
    "title": "Project Navigation Officer",
    "location": "Manila Bay"
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
}, ];
// for (var i = 0; i < work.length; i++) {
//     $("#workExperience").append(HTMLworkStart);
//     var formattedEmployer = HTMLworkEmployer.replace("%data%", work[i].employer);
//     $(".work-entry:last").append(formattedEmployer)
//     var formattedTitle = HTMLworkTitle.replace("%data%", work[i].title);
//     $(".work-entry:last").append(formattedTitle);
//     var formattedDates = HTMLworkDates.replace("%data%", work[i].dates);
//     $(".work-entry:last").append(formattedDates);
//     var formattedLocation = HTMLworkLocation.replace("%data%", work[i].location);
//     $(".work-entry:last").append(formattedLocation);
//     var formattedDescription = HTMLworkDescription.replace("%data%", work[i].description);
//     $(".work-entry:last").append(formattedDescription);
// };
function displayWork() {
    $("#workExperience").append(HTMLworkStart);
    var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work[0].employer);
    $("#workExperience").append(formattedWorkEmployer);
    var formattedWorkTitle = HTMLworkTitle.replace("%data%", work[0].title);
    $("#workExperience").append(formattedWorkTitle);
    var formattedWorkDates = HTMLworkDates.replace("%data%", work[0].dates);
    $("#workExperience").append(formattedWorkDates);
    var formattedWorkLocation = HTMLworkLocation.replace("%data%", work[0].location);
    $("#workExperience").append(formattedWorkLocation);
    var formattedWorkDescription = HTMLworkDescription.replace("%data%", work[0].description);
    $("#workExperience").append(formattedWorkDescription);

    $("#workExperience").append(HTMLworkStart);
    var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work[2].employer);
    $("#workExperience").append(formattedWorkEmployer);
    var formattedWorkTitle = HTMLworkTitle.replace("%data%", work[2].title);
    $("#workExperience").append(formattedWorkTitle);
    var formattedWorkDates = HTMLworkDates.replace("%data%", work[2].dates);
    $("#workExperience").append(formattedWorkDates);
    var formattedWorkLocation = HTMLworkLocation.replace("%data%", work[2].location);
    $("#workExperience").append(formattedWorkLocation);
    var formattedWorkDescription = HTMLworkDescription.replace("%data%", work[2].description);
    $("#workExperience").append(formattedWorkDescription);

    $("#workExperience").append(HTMLworkStart);
    var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work[7].employer);
    $("#workExperience").append(formattedWorkEmployer);
    var formattedWorkTitle = HTMLworkTitle.replace("%data%", work[7].title);
    $("#workExperience").append(formattedWorkTitle);
    var formattedWorkDates = HTMLworkDates.replace("%data%", work[7].dates);
    $("#workExperience").append(formattedWorkDates);
    var formattedWorkLocation = HTMLworkLocation.replace("%data%", work[7].location);
    $("#workExperience").append(formattedWorkLocation);
    var formattedWorkDescription = HTMLworkDescription.replace("%data%", work[7].description);
    $("#workExperience").append(formattedWorkDescription);

    $("#workExperience").append(HTMLworkStart);
    var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work[9].employer);
    $("#workExperience").append(formattedWorkEmployer);
    var formattedWorkTitle = HTMLworkTitle.replace("%data%", work[9].title);
    $("#workExperience").append(formattedWorkTitle);
    var formattedWorkDates = HTMLworkDates.replace("%data%", work[9].dates);
    $("#workExperience").append(formattedWorkDates);
    var formattedWorkLocation = HTMLworkLocation.replace("%data%", work[9].location);
    $("#workExperience").append(formattedWorkLocation);
    var formattedWorkDescription = HTMLworkDescription.replace("%data%", work[9].description);
    $("#workExperience").append(formattedWorkDescription);

    $("#workExperience").append(HTMLworkStart);
    var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work[8].employer);
    $("#workExperience").append(formattedWorkEmployer);
    var formattedWorkTitle = HTMLworkTitle.replace("%data%", work[8].title);
    $("#workExperience").append(formattedWorkTitle);
    var formattedWorkDates = HTMLworkDates.replace("%data%", work[8].dates);
    $("#workExperience").append(formattedWorkDates);
    var formattedWorkLocation = HTMLworkLocation.replace("%data%", work[8].location);
    $("#workExperience").append(formattedWorkLocation);
    var formattedWorkDescription = HTMLworkDescription.replace("%data%", work[8].description);
    $("#workExperience").append(formattedWorkDescription);
}

displayWork();

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
}
for (var i = 0; i < projects.project.length; i++) {
    $("#projects").append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.project[i].title);
    $(".project-entry:last").append(formattedTitle);
    var formattedDates = HTMLprojectDates.replace("%data%", projects.project[i].dates);
    $(".project-entry:last").append(formattedDates);
    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.project[i].description);
    $(".project-entry:last").append(formattedDescription);
    var formattedImages = HTMLprojectImage.replace("%data%", projects.project[i].images);
    $(".project-entry:last").append(formattedImages)
};

for (var i = 0; i < education.school.length; i++) {
    $("#education").append(HTMLschoolStart);
    var formattedSchool = HTMLschoolName.replace("%data%", education.school[i].name);
    $(".work-entry:last").append(formattedSchool);
    var formattedDegree = HTMLschoolDegree.replace("%data%", education.school[i].degree);
    $(".education-entry:last").append(formattedDegree);
    var formattedDates = HTMLschoolDates.replace("%data%", education.school[i].dates);
    $(".education-entry:last").append(formattedDates);
    var formattedLocation = HTMLschoolLocation.replace("%data%", education.school[i].location);
    $(".education-entry:last").append(formattedLocation);
    var formattedMajor = HTMLschoolMajor.replace("%data%", education.school[i].major);
    $(".education-entry:last").append(formattedMajor);

};
$("#education").append(HTMLonlineClasses);
for (var i = 0; i < education.onlineCourses.length; i++) {
    $("#education").append(HTMLschoolStart);
    var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
    $(".education-entry:last").append(formattedTitle);
    var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
    $(".education-entry:last").append(formattedSchool);
    var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
    $(".education-entry:last").append(formattedDates);
    var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].URL);
    $(".education-entry:last").append(formattedURL)
};

$("#mapDiv").append(googleMap);