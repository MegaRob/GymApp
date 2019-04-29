var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

const route = [

    'Grade: 5.11',
    'Expiration: 4.5.19',
    'Setter: Rob',
    'Color: red'
]

var routeOne = document.getElementById('p');
document.getElementById('one').innerHTML = route;

const routeTwo = [
    'Grade: 5.12',
    'Expiration: 5.39.10',
    'Setter: John',
    'Color: blue',
]

var two = document.getElementById('p');
document.getElementById('second').innerHTML = routeTwo;


const routeThree = [
    'Grade: 5.12',
    'Expiration: 5.39.10',
    'Setter: John',
    'Color: blue',
]

var three = document.getElementById('p');
document.getElementById('third').innerHTML = routeThree;

const routeFour = [
    'Grade: 5.9',
    'Setter: Jamie',
    'Color: Yellow',
    'Expiration: 2.1.19'
]
var fourth = document.getElementById('p');
document.getElementById('four').innerHTML = routeFour;
