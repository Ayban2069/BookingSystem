//test
let port = document.getElementById("port");
let destination = document.getElementById("destination");
let boat = documnet.getElementById("boat");
let date = document.getElementById("date");
let btn = document.getElementById("book-btn");


btn.onclick = function() {
    document.getElementById("from").textContent = port;
    document.getElementById("to").textContent = destination;
}