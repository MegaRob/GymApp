var route = [
    'Setter: Brain ',
    ' Grade: 5.12 ',
    ' Experasion: Today'
]

var routeTwo = [
    'Setter: Jeff',
    ' Grade: 5.11',
    ' Experation: today'
]
var thirdRoute = [
    'Setter: Brain',
    ' Grade: 5.10',
    ' Experasion: Tuesday '
]

var fourthRoute = [
    'Setter: Brian',
    ' Grade: 5.9',
    '  Experation: Today'
]

var fifthRoute = [
    'Setter: Brian',
    ' Grade: 5.9',
    '  Experation: Today'
]

var sixthRoute = [
    'Setter: Henry',
    ' Grade: 5.10',
    ' Experation: Today'
]
//alerts start here

// document.getElementById('first').addEventListener("click", function() {
//     alert(route);
//  });

// document.getElementById('second').addEventListener("click", function() {
//     alert(routeTwo);
//  });

// document.getElementById('three').addEventListener("click", function() {
//     alert(thirdRoute);
//  });

// document.getElementById('four').addEventListener("click", function() {
//     alert(fourthRoute);
//   });

// document.getElementById('five').addEventListener("click", function() {
//      alert(fifthRoute);
//   });

  
var x = document.getElementById("hover");
x.addEventListener("mouseover", myFunction);
x.addEventListener("click", mySecondFunction);
var x = document.getElementById("one");
x.addEventListener("mouseout", myThirdFunction);
  
  

for (var x = 0; x < x.length; x++) {
    function myFunction() {
        document.getElementById("one").innerHTML += route;
      }
      
      function mySecondFunction() {
        document.getElementById("one").addEventListener(route);
      }
    
      function myThirdFunction() {
       x.innerHTML = "";
      }
};



//   var x = document.getElementById("hoverTwo");
//   x.addEventListener("mouseover", myFunction);
//   x.addEventListener("click", mySecondFunction);
//   var x = document.getElementById('two');
//   x.addEventListener("mouseout", myThirdFunction);
  
//   function myFunction() {
//     document.getElementById("two").innerHTML += routeTwoe;
//   }
  
//   function mySecondFunction() {
//     document.getElementById("two").addEventListener(routeTwo);
//   }

//   function myThirdFunction() {
//    x.innerHTML = "";
//   }


//********************functions 
//function routeOne() {
    //     document.getElementById('demo').innerHTML =  route;
    // }
  // function myFunction() {
//     document.getElementById('text').innerHTML = routeTwo;
// }



// function routeThree() {
//     document.getElementById('three').innerHTML = thirdRoute;
// }

// function routefour() {
//     document.getElementById('four').innerHTML = fourthroute;
// }
