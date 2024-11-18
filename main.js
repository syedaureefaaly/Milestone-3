var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('Email').value;
    var phone = document.getElementById('phone').value;
    var Education = document.getElementById('education').value;
    var Experience = document.getElementById('experience').value;
    var Skills = document.getElementById('skills').value;
    var resumeHTML = "<h2><b>Resume</b></h2>\n<h3>Personal Information</3>\n<p>><b>Name:</b>".concat(name, "</p>\n<p><b>Email:</b>").concat(email, "</p>\n<p><b>Phone:</b>").concat(phone, "</p>\n\n<h3>Education</h3>\n<p>").concat(Education, "</p>\n<h3>Experience</h3>\n<p>").concat(Experience, "</P>\n<h3>Skills</h3>\n<p>").concat(Skills, "</p>:");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.log("The resume display elaement is missing.");
    }
});
