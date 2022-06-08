// Assigning Variabes 
var teacherGrade9 = [];
var teacherGrade10 = [];
var teacherGrade11 = [];
var teacherGrade12 = [];
var teacherGender = [];
var teacherClub = [];
var teacherDetails = [];
var counter = 0;

//  Creating A Function to get the Teacher Input from elements from HTML
function getTeacherInput() {
	// The getElementbyID gets the ID from the HTML code and checks here if it is checked or gets the value of the dropdown list
	teacherGrade9[counter] = document.getElementById("htmlTGrade9").checked;
	teacherGrade10[counter] = document.getElementById("htmlTGrade10").checked;
	teacherGrade11[counter] = document.getElementById("htmlTGrade11").checked;
	teacherGrade12[counter] = document.getElementById("htmlTGrade12").checked;
	teacherClub[counter] = document.getElementById("htmlTClub").value;
	teacherGender[counter] = document.getElementById("htmlTGender").value;
	teacherDetails[counter] = document.getElementById("htmlTAnnouncementDescription").value;
	//The .setItem stores the inputs of the user into the local storage
	localStorage.setItem("teacherGrade9Key", JSON.stringify(teacherGrade9));
	localStorage.setItem("teacherGrade10Key", JSON.stringify(teacherGrade10));
	localStorage.setItem("teacherGrade11Key", JSON.stringify(teacherGrade11));
	localStorage.setItem("teacherGrade12Key", JSON.stringify(teacherGrade12));
	localStorage.setItem("teacherGenderKey", JSON.stringify(teacherGender));
	localStorage.setItem("teacherClubKey", JSON.stringify(teacherClub));
	localStorage.setItem("teacherDetailsKey", JSON.stringify(teacherDetails));
	counter++
}

//creating a function to get the local storage already saved from before.
function getExistingAnnoucement() {
	//checks for no null scenarios to reduce null related problems.
	if(JSON.parse(localStorage.getItem("teacherGrade9Key")) != null) {
        // The .getItem get the values from each of the keys and uses the function to store the annnouncements
		teacherGrade9 = JSON.parse(localStorage.getItem("teacherGrade9Key"));
		teacherGrade10 = JSON.parse(localStorage.getItem("teacherGrade10Key"));
		teacherGrade11 = JSON.parse(localStorage.getItem("teacherGrade11Key"));
		teacherGrade12 = JSON.parse(localStorage.getItem("teacherGrade12Key"));
		teacherGender = JSON.parse(localStorage.getItem("teacherGenderKey"));
		teacherClub = JSON.parse(localStorage.getItem("teacherClubKey"));
		teacherDetails = JSON.parse(localStorage.getItem("teacherDetailsKey"));
		counter = teacherGrade9.length;
	}
}