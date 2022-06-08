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
        //Creating if statement to compare whether the teachers announcement details the ones of the students search details
		if(
			(teacherClub[i] == studentClub || teacherClub[i] == 'All' || studentClub == 'All' || studentClub == '') && 
            (teacherGender[i] == studentGender || teacherGender[i] == 'All' || studentGender == 'All' || studentGender == '') && 
            ((studentGrade9 == teacherGrade9[i] && teacherGrade9[i] != false) || studentGrade9 == false) && 
            ((studentGrade10 == teacherGrade10[i] && teacherGrade10[i] != false) || studentGrade10 == false) && 
            ((studentGrade11 == teacherGrade11[i] && teacherGrade11[i] != false) || studentGrade11 == false) && 
            ((studentGrade12 == teacherGrade12[i] && teacherGrade12[i] != false) || studentGrade12 == false)) {

            //Making the announcementTextHolder variable equal to the announcement details    
			announcementTextHolder += '- ' + teacherDetails[i]  + "&#13;&#10";
			matches++;
		}
        //Here we are setting a condition on the mathches, if there are no matches "Unfortunately there are no announcements at this time." will be displayed. Else it will display the announcement details
		if(matches == 0) {
			document.getElementById("sResults").innerHTML = "Unfortunately there are no announcements at this time.";
		} else {
			document.getElementById("sResults").innerHTML = announcementTextHolder;
		}
	}
}