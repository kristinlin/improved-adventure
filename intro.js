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


//================================================
//FUNCTIONS TO MANIPULATE DOM ELEMENTS

var fibonacci = function(n) {
	if (n == 0) {
		return 0;
	} else if (n == 1) {
		return 1;
	} else {
		return fibonacci(n-1) + fibonacci(n-2);
	};
};

var seesay = function(n){
    var temp = -1;
    var count = 0;
    var ans = "";
    while (n > 0){
	if (n % 10 == temp){
	    count++;
	}
	else{
	    ans = count + temp + ans;
	    temp = n % 10;
	    count = 1;
	}
	n = n / 10
    }
}

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

var fibToList = function(){
    var newItem = document.createElement("li");
    newItem.textContent = fibonacci(f++);
    newItem.addEventListener("mouseover", changeHead);
    newItem.addEventListener("mouseout", returnHead);
    newItem.addEventListener("click", deleteFromList);
    fiblist.appendChild(newItem); 
}

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

//clicks the second button
fbutton.addEventListener("click", fibToList);

//mouse moves on to the list item or its children
for (var num = 0; num < listItems.length; num++) {
    listItems[num].addEventListener("mouseover", changeHead);
    listItems[num].addEventListener("mouseout", returnHead);
    listItems[num].addEventListener("click", deleteFromList);
}

