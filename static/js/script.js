
//  Calculate age

function showDialog(){
    var name = prompt('What is your name?');
    document.getElementById("result").innerHTML = 'Hello, ' + name;
}

function reset() {
    
    document.getElementById("result").innerHTML = "Click on \"Click Me\" ";

}



//  Generate Cat

function generateCat(){

var node = document.getElementById("cat-div");
var image = document.createElement('img');
image.src = "static/images/cat.gif";

node.appendChild(image);

}