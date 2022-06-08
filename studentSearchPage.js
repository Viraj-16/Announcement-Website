//Assigning Variabes 
var studentGrade9;
var studentGrade10;
var studentGrade11;
var studentGrade12;

var studentGender;
var studentClub;

//Creating A Function to get the Student Input from elements from HTML
function getStudentInput(){
	//The getElementbyID gets the ID from the HTML code and checks here if it is checked or gets the value of the dropdown list
    studentGrade9= document.getElementById ("htmlSGrade9").checked
    studentGrade10= document.getElementById ("htmlSGrade10").checked
    studentGrade11= document.getElementById ("htmlSGrade11").checked
    studentGrade12= document.getElementById ("htmlSGrade12").checked
    studentClub= document.getElementById ("htmlSClub").value
    studentGender= document.getElementById ("htmlSGender").value

	//The .setItem stores the inputs of the user into the local storage
    localStorage.setItem("studentGrade9Key", studentGrade9);
    localStorage.setItem("studentGrade10Key", studentGrade10);
    localStorage.setItem("studentGrade11Key", studentGrade11);
    localStorage.setItem("studentGrade12Key", studentGrade12);
    localStorage.setItem("studentGenderKey", studentGender);
    localStorage.setItem("studentClubKey", studentClub);

    //This opens the Results page once the search button is pressed
    window.location = "./Results_Page.html"   
}