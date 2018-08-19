function check (){

var question1 = document.quiz.question1.value;
var question2 = document.quiz.question2.value;
var question3 = document.quiz.question3.value;
var correct = 0;

    if (question1 == "ECMAscript") {
       correct = correct + 10;
}
    if (question2 == "ECMAscript") {
       correct+15;
}
    if (question3 == "Hypertext Markup Language") {
       correct+15;
    }

var messages = {"Great job1", "That is just okay", "You really need to do better"};
var pictures = {"img/pNR5FDm.gif", "img/images.jpeg", "img/download.jpeg"};

document.getElementbyId("after_submit").style.visibility ="visible";
document.getElementbyId("correct_number").innerHTML = "You got " + correct + " correct .";
document.getElementbyId("picture").src = pictures{score};
}
