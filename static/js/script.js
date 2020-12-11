
function showDialog(){
    var name = prompt('What is your name?');
    document.getElementById("result").innerHTML = 'Hello, ' + name;
    // alert('Hello, ' + name);
}

function reset() {
    
    document.getElementById("result").innerHTML = "Click on \"Click Me\" ";

}
