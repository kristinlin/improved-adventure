//Kristin Lin & Philip Park
//Softdev pd09
//Work 16: DOMinate your HTML


//================================================
//NECESSARY DOM ELEMENTS

var heading = document.getElementById("h");
var button = document.getElementById("b");
var list = document.getElementById("thelist");
var listItems = document.getElementsByTagName("li");


//================================================
//FUNCTIONS TO MANIPULATE DOM ELEMENTS

//creates new element; adds text to element; adds to list element
//---------------------------
var addToList = function(){
    var newItem = document.createElement("li");
    newItem.textContent = "item ?";
    newItem.addEventListener("mouseover", changeHead);
	newItem.addEventListener("mouseout", returnHead);
	newItem.addEventListener("click", deleteFromList);
    list.appendChild(newItem);
};

//
//---------------------------
var changeHead = function() {
    heading.textContent = this.textContent;
}

var returnHead = function(){
	heading.textContent = "Hello World!"
}

var deleteFromList = function(){
	this.remove();
}

//================================================
//EVENTLISTENERS

//clicks the button
button.addEventListener("click", addToList);

//mouse moves on to the list item or its children
for (var num = 0; num < listItems.length; num++) {
    listItems[num].addEventListener("mouseover", changeHead);
}

//mouse moves off the list item or its children
for (var num = 0; num < listItems.length; num++) {
    listItems[num].addEventListener("mouseout", returnHead);
}

//clicks the item children
for (var num = 0; num < listItems.length; num++) {
    listItems[num].addEventListener("click", deleteFromList);
}