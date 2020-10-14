window.addEventListener("load", function () {
  const loader = document.querySelector(".loader");
  loader.className += " hidden";
});

window.onload = function () {
   AOS.init();
  
  
  anime({
    targets: "div.box1",
    delay: 100,
    translateX: [
      { value: -30, duration: 0 },
      { value: 0, duration: 3000 },
    ]
  });
  anime({
    targets: "div.box2",
    delay: 200,
    translateX: [
      { value: -30, duration: 0 },
      { value: 0, duration: 3000 },
    ]
  });
  anime({
    targets: "div.box3",
    delay: 300,
    translateX: [
      { value: -30, duration: 0 },
      { value: 0, duration: 3000 },
    ]
  }); 

  anime({
    targets: "div.sec1div1",
    delay: 300,
    translateY: [
      { value: 30, duration: 0 },
      { value: 0, duration: 3000 },
    ]
  });
  
  
  lax.setup() // init

  const updateLax = () => {
    lax.update(window.scrollY)
    window.requestAnimationFrame(updateLax)
  }

  window.requestAnimationFrame(updateLax)
};

var form2 = anime({
    targets: "div.contact-form",
    delay: 50,
    translateY: [
      { value: -80, duration: 0 },
      { value: 0, duration: 1500 },
  ],
  easing: "easeInOutQuart",
  });
  document.querySelector(".thirdlist").onclick = form2.play;


var form2 = anime({
  targets: "div.contact-form",
  delay: 50,
  translateY: [
    { value: -80, duration: 0 },
    { value: 0, duration: 1500 },
  ],
  easing: "easeInOutQuart",
});
document.querySelector(".thirdlist2'").onclick = form2.play;




   var theme2 = anime({
     targets: "div.theme",
     delay: 50,
     translateY: [
       { value: -100, duration: 0 },
       { value: 0, duration: 1000 },
     ],
     easing: 'easeInOutQuart',
   });
  document.querySelector(".fakediv1").onclick = theme2.play;
 
  var themebox1 = anime({
    targets: "div.color-set1",
    delay: 50,
    translateY: [
      { value: 1500, duration: 0 },
      { value: 0, duration: 1000 },
    ],
    easing: "easeInOutQuart",
  });
  document.querySelector(".fakediv2").onclick = themebox1.play;

  var themebox2 = anime({
    targets: "div.color-set2",
    delay: 100,
    translateY: [
      { value: 1500, duration: 0 },
      { value: 0, duration: 1000 },
    ],
    easing: "easeInOutQuart",
  });
  document.querySelector(".fakediv3").onclick = themebox2.play;

  var themebox3 = anime({
    targets: "div.color-set3",
    delay: 150,
    translateY: [
      { value: 1500, duration: 0 },
      { value: 0, duration: 1000 },
    ],
    easing: "easeInOutQuart",
  });
  document.querySelector(".fakediv4").onclick = themebox3.play;

    var themebox4 = anime({
      targets: "div.color-set4",
      delay: 200,
      translateY: [
        { value: 1500, duration: 0 },
        { value: 0, duration: 1000 },
      ],
      easing: "easeInOutQuart",
    });
    document.querySelector(".fakediv5").onclick = themebox4.play;
  
 
        
    	  	$(document).ready(function () {
            $("#theme-button").click(function () {
              $("#fakebtn1").click();
              $("#fakebtn2").click();
              $("#fakebtn3").click();
              $("#fakebtn4").click();
              $("#fakebtn5").click();
            });
          });


var theme2 = anime({
  targets: "div.theme",
  delay: 50,
  translateY: [
    { value: -100, duration: 0 },
    { value: 0, duration: 1000 },
  ],
  easing: 'easeInOutQuart',
});
document.querySelector(".fakediv6").onclick = theme2.play;

var themebox1 = anime({
  targets: "div.color-set1",
  delay: 50,
  translateY: [
    { value: 1500, duration: 0 },
    { value: 0, duration: 1000 },
  ],
  easing: "easeInOutQuart",
});
document.querySelector(".fakediv7").onclick = themebox1.play;

var themebox2 = anime({
  targets: "div.color-set2",
  delay: 100,
  translateY: [
    { value: 1500, duration: 0 },
    { value: 0, duration: 1000 },
  ],
  easing: "easeInOutQuart",
});
document.querySelector(".fakediv8").onclick = themebox2.play;

var themebox3 = anime({
  targets: "div.color-set3",
  delay: 150,
  translateY: [
    { value: 1500, duration: 0 },
    { value: 0, duration: 1000 },
  ],
  easing: "easeInOutQuart",
});
document.querySelector(".fakediv9").onclick = themebox3.play;

var themebox4 = anime({
  targets: "div.color-set4",
  delay: 200,
  translateY: [
    { value: 1500, duration: 0 },
    { value: 0, duration: 1000 },
  ],
  easing: "easeInOutQuart",
});
document.querySelector(".fakediv10").onclick = themebox4.play;



$(document).ready(function () {
  $("#theme-button2").click(function () {
    $("#fakebtn6").click();
    $("#fakebtn7").click();
    $("#fakebtn8").click();
    $("#fakebtn9").click();
    $("#fakebtn10").click();
  });
});
 
//  var markerTop = anime({
//    targets: "div.markerdiv",
//    translateY: [{ value: -78, duration: 800 }],
//    easing: "easeOutQuart",
//  });

//   var markerMid = anime({
//     targets: "div.markerdiv",

//     translateY: [{ value: -37, duration: 800 }],
//     easing: "easeOutQuart",
//   });


//     var markerBottom = anime({
//       targets: "div.markerdiv",

//       translateY: [{ value: 1, duration: 800 }],
//       easing: "easeOutQuart",
//     });

// document.querySelector('.topList').onclick = markerTop.play;
// document.querySelector('.midList').onclick = markerMid.play;
// document.querySelector('.bottomList').onclick = markerBottom.play;

document.getElementById("contact-button2").addEventListener("click", function () {
  document.querySelector(".form-container").style.display = "flex"
})
document.getElementById("contact-cross").addEventListener("click", function () {
  document.querySelector(".form-container").style.display = "none"
})
document.getElementById("contact-button2").addEventListener("click", function () {
  document.querySelector("body").style.overflow = "hidden"
})
document.getElementById("contact-cross").addEventListener("click", function () {
  document.querySelector("body").style.overflow = "auto"
});
document.getElementById("contact-button2").addEventListener("click", function () {
  document.querySelector(".theme-container").style.display = "none"
})


document.getElementById("theme-button").addEventListener("click", function () {
  document.querySelector(".theme-container").style.display = "flex";
});

document.getElementById("theme-cross").addEventListener("click", function () {
  document.querySelector(".theme-container").style.display = "none";
});
document.getElementById("theme-button").addEventListener("click", function () {
  document.querySelector("body").style.overflow = "hidden";
});
document.getElementById("theme-cross").addEventListener("click", function () {
  document.querySelector("body").style.overflow = "auto";
});
document.getElementById("theme-button").addEventListener("click", function () {
  document.querySelector(".form-container").style.display = "none";
});







document.getElementById("contact-button3").addEventListener("click", function () {
  document.querySelector(".form-container").style.display = "flex"
})

document.getElementById("contact-cross").addEventListener("click", function () {
  document.querySelector(".form-container").style.display = "none"
})
document.getElementById("contact-button3").addEventListener("click", function () {
  document.querySelector("body").style.overflow = "hidden"
})
document.getElementById("contact-cross").addEventListener("click", function () {
  document.querySelector("body").style.overflow = "auto"
});
document.getElementById("contact-button3").addEventListener("click", function () {
  document.querySelector(".theme-container").style.display = "none"
})



document.getElementById("theme-button2").addEventListener("click", function () {
  document.querySelector(".theme-container").style.display = "flex";
});

document.getElementById("theme-cross").addEventListener("click", function () {
  document.querySelector(".theme-container").style.display = "none";
});
document.getElementById("theme-button2").addEventListener("click", function () {
  document.querySelector("body").style.overflow = "hidden";
});
document.getElementById("theme-cross").addEventListener("click", function () {
  document.querySelector("body").style.overflow = "auto";
});
document.getElementById("theme-button2").addEventListener("click", function () {
  document.querySelector(".form-container").style.display = "none";
});




document.getElementById("contact-link3").addEventListener("click", function () {
  document.querySelector(".form-container").style.display = "flex"
})
document.getElementById("contact-link3").addEventListener("click", function () {
  document.querySelector("body").style.overflow = "hidden"
})
document.getElementById("contact-link3").addEventListener("click", function () {
  document.querySelector(".theme-container").style.display = "none"
})
$(document).ready(function () {
  $("#contact-link3").click(function () {
    $("#contact-button3").click();
  });
});

	var theme = document.querySelectorAll("div .colors1");
  var root = document.querySelector(":root");
  theme.forEach((swatch) => {
    swatch.addEventListener("click", (e) => {
      root.style.setProperty("--color1", e.target.style.background);
    });
  });

  var background = document.querySelectorAll("div .colors2");
  var root = document.querySelector(":root");
  background.forEach((swatch) => {
    swatch.addEventListener("click", (e) => {
      root.style.setProperty("--color2", e.target.style.background);
    });
  });
    


    
    	  	$(document).ready(function(){  
	    $("#mainButton1").click(function(){
	        $( "#subButton1" ).click();
	        $( "#subButton2" ).click();
	    });
	});

	    		$(document).ready(function(){  
	    $("#mainButton2").click(function(){
	        $( "#subButton3" ).click();
	        $( "#subButton4" ).click();
	    });
	});

	    			$(document).ready(function(){  
	    $("#mainButton3").click(function(){
	        $( "#subButton5" ).click();
	        $( "#subButton6" ).click();
	    });
	});
	    				$(document).ready(function(){  
	    $("#mainButton4").click(function(){
	        $( "#subButton7" ).click();
	        $( "#subButton8 " ).click();
	    });
	});



