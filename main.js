var typed = new Typed(".text" , {
    strings:["Frontend Developer." , "Web Developer."] , 
    typeSpeed:100,
    backSpeed:100, 
    backDelay:1000,
    loop:true
});


function respNav() {
    var x = document.getElementById("myNav");
    var y = document.querySelectorAll("a");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }