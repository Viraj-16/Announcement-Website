var teacherGrade9
var teacherGrade10
var teacherGrade11
var teacherGrade12
var teacherClub
var teacherGender
var teacherDetails

function displayResults() {
    //Takes the teachers input/selections for the announcement and applies JSON.parse to turn it into a readable array
	teacherGrade9 = JSON.parse(localStorage.getItem("teacherGrade9Key"))
	teacherGrade10 = JSON.parse(localStorage.getItem("teacherGrade10Key"))
	teacherGrade11 = JSON.parse(localStorage.getItem("teacherGrade11Key"))
	teacherGrade12 = JSON.parse(localStorage.getItem("teacherGrade12Key"))
	teacherClub = JSON.parse(localStorage.getItem("teacherClubKey"))
	teacherGender = JSON.parse(localStorage.getItem("teacherGenderKey"))
	teacherDetails = JSON.parse(localStorage.getItem("teacherDetailsKey"))

    //Takes the students input/selections for the announcement and applies JSON.parse to turn it into a readable array, more so done so problems don't occur in if statements
	studentGrade9 = JSON.parse(localStorage.getItem("studentGrade9Key"))
	studentGrade10 = JSON.parse(localStorage.getItem("studentGrade10Key"))
	studentGrade11 = JSON.parse(localStorage.getItem("studentGrade11Key"))
	studentGrade12 = JSON.parse(localStorage.getItem("studentGrade12Key"))
	studentClub = localStorage.getItem("studentClubKey")
	studentGender = localStorage.getItem("studentGenderKey")
	announcementTextHolder = "";
	matches = 0;

	//Creating a for loop to go through the array to see if there are matches
	for(let i = 0; i < teacherGender.length; i++) {
		{
            //Making the announcementTextHolder variable equal to the announcement details    
			announcementTextHolder += '- ' + teacherDetails[i] + "&#13;&#10";
		} {
			document.getElementById("sResults").innerHTML = announcementTextHolder;
		} 
	}
}