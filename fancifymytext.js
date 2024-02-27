// Assignment 5 - Fun with JavaScript
// Programmed by Connor Dominik
// for CSC 193A at CSUS for Spring 2024
// needs access to 'fancifymytext.html' in the same directory as this file.

function biggerButtonFunction() {
	document.getElementById("multiLineTextbox").style.fontSize="24pt";
}

function fancifyFunction(){
	document.getElementById("multiLineTextbox").style.textDecoration="underline"
	document.getElementById("multiLineTextbox").style.color="blue"
	document.getElementById("multiLineTextbox").style.fontWeight="bold"

}

function boringifyFunction(){
	document.getElementById("multiLineTextbox").style.textDecoration="initial"
	document.getElementById("multiLineTextbox").style.color="black"
	document.getElementById("multiLineTextbox").style.fontWeight="normal";
}

function mooButtonFunction(){
	document.getElementById("multiLineTextbox").value=document.getElementById("multiLineTextbox").value.toUpperCase();
	let preparedText = document.getElementById("multiLineTextbox").value
	let functionedText = "bla";
	functionedText = mooifyFunction(preparedText);
	document.getElementById("multiLineTextbox").value=functionedText;
}

function mooifyFunction(myInput){
	let textAreaValue = myInput;
	let splitText = textAreaValue.split(".");
	let mooifiedText = splitText.join("-Moo.");
	return mooifiedText;
}
