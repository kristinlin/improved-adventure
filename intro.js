//Kristin Lin & Philip Park
//Softdev pd09
//Work 16: DOMinate your HTML


//================================================
//NECESSARY DOM ELEMENTS

var heading = document.getElementById("h");
var button = document.getElementById("b");
var list = document.getElementById("thelist");
var listItems = document.getElementsByTagName("li");
var n = 7;
var fbutton = document.getElementById("bfib");
var fibList = document.getElementById("fiblist");
var f = 0;
var lsbutton = document.getElementById("lsb");
var lsList = document.getElementById("lookseelist");
var ls = 1;


//================================================
//SEQUENCE FUNCTIONS

var fibonacci = function(n) {
	if (n == 0) {
		return 0;
	} else if (n == 1) {
		return 1;
	} else {
		return fibonacci(n-1) + fibonacci(n-2);
	};
};

//look-and-say sequence: https://en.wikipedia.org/wiki/Look-and-say_sequence
//---------------------------
var seesay = function(n){
    var temp = n % 10;
    var count = 0;
    var ans = "";
    while (n > 0){
	//if the next digit equals the last, increase count
	if (n % 10 == temp){
	    count++;
	}
	//if it doesn't, finish and restart round by resetting vars, add to ans
	else{
	    ans = String(count) + String(temp) + ans;
	    temp = n % 10;
	    count = 1;
	}
	n = parseInt(n / 10);
    }
    return String(count) + String(temp) + ans;
}


//================================================
//FUNCTIONS TO MANIPULATE DOM ELEMENTS

//creates new element; adds text to element; adds to list element
//---------------------------
var addToList = function(){
    var newItem = document.createElement("li");
    n++;
    newItem.textContent = "item " + n;
    newItem.addEventListener("mouseover", changeHead);
    newItem.addEventListener("mouseout", returnHead);
    newItem.addEventListener("click", deleteFromList);
    list.appendChild(newItem);
};

//same as addToList, except add to fibList and use fib function
//---------------------------
var fibToList = function(){
    var newItem = document.createElement("li");
    newItem.textContent = fibonacci(f++);
    newItem.addEventListener("mouseover", changeHead);
    newItem.addEventListener("mouseout", returnHead);
    newItem.addEventListener("click", deleteFromList);
    fiblist.appendChild(newItem); 
}

//same as addToList, except add to lsList and use seesay function
//---------------------------
var lsToList = function(){
    var newItem = document.createElement("li");
    newItem.textContent = ls;
    ls = seesay(ls);
    newItem.addEventListener("mouseover", changeHead);
    newItem.addEventListener("mouseout", returnHead);
    newItem.addEventListener("click", deleteFromList);
    lsList.appendChild(newItem); 
}

//fiddle with textContent of heading
//---------------------------
var changeHead = function() {
    heading.textContent = this.textContent;
}
var returnHead = function(){
    heading.textContent = "Hello World!"
}

//remove element
//---------------------------
var deleteFromList = function(){
    this.remove();
}

//================================================
//EVENTLISTENERS

//clicks the button
button.addEventListener("click", addToList);

//clicks the second button
fbutton.addEventListener("click", fibToList);

//clicks the third button
lsbutton.addEventListener("click", lsToList);

//mouse moves on to the list item or its children
for (var num = 0; num < listItems.length; num++) {
    listItems[num].addEventListener("mouseover", changeHead);
    listItems[num].addEventListener("mouseout", returnHead);
    listItems[num].addEventListener("click", deleteFromList);
}

