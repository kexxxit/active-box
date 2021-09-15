function header() {
  var header = document.getElementById('h');
  var introH = document.getElementById("scrollblock1").clientHeight;
  var scrollPos = window.scrollY;
  window.addEventListener("scroll", function(){
    scrollPos = window.scrollY;
    if (scrollPos > introH) {
      header.classList.add("fixed");
    } else {
      header.classList.remove("fixed"); 
    }
    
  });
  window.addEventListener("resize", function(){
    introH = document.getElementById("scrollblock1").clientHeight;
    scrollPos = window.scrollY;
    
    if (scrollPos > introH) {
      header.classList.add("fixed");
    } else {
      header.classList.remove("fixed"); 
    }
    
  });
}
header();

(function() {
  var h1 = document.getElementById("scrollblock1").clientHeight;
  var btnScrollDown = document.getElementById('dd1');
  function scrollDown() {
    var windowCoords = h1;
    (function scroll() {
      if (window.pageYOffset < windowCoords) {
        window.scrollBy(0, 10);
        setTimeout(scroll, 0);
      }
      if (window.pageYOffset > windowCoords) {
        window.scrollTo({
          top: windowCoords,
          behavior: "smooth"
        });
      }
    })();
  }
  btnScrollDown.addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("menu").classList.remove("show");
  })
  btnScrollDown.addEventListener('click', scrollDown);
})();
(function() {
  var h1 = document.getElementById("scrollblock1").clientHeight;
  var h2 = document.getElementById("features").clientHeight;
  var btnScrollDown = document.getElementById('dd2');
  function scrollDown() {
    var windowCoords = h1 + h2;
    (function scroll() {
      if (window.pageYOffset < windowCoords) {
        window.scrollBy(0, 10);
        setTimeout(scroll, 0);
      }
      if (window.pageYOffset > windowCoords) {
        window.scrollTo({
          top: windowCoords,
          behavior: "smooth"
        });
      }
    })();
  }
  btnScrollDown.addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("menu").classList.remove("show");
  })
  btnScrollDown.addEventListener('click', scrollDown);
})();
(function() {
  var h1 = document.getElementById("scrollblock1").clientHeight;
  var h2 = document.getElementById("features").clientHeight;
  var h3 = document.getElementById("works").clientHeight;
  var btnScrollDown = document.getElementById('dd3');
  function scrollDown() {
    var windowCoords = h1 + h2 + h3;
    (function scroll() {
      if (window.pageYOffset < windowCoords) {
        window.scrollBy(0, 10);
        setTimeout(scroll, 0);
      }
      if (window.pageYOffset > windowCoords) {
        window.scrollTo({
          top: windowCoords,
          behavior: "smooth"
        });
      }
    })();
  }
  btnScrollDown.addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("menu").classList.remove("show");
  })
  btnScrollDown.addEventListener('click', scrollDown);
})();
(function() {
  var h1 = document.getElementById("scrollblock1").clientHeight;
  var h2 = document.getElementById("features").clientHeight;
  var h3 = document.getElementById("works").clientHeight;
  var h4 = document.getElementById("team").clientHeight;
  var btnScrollDown = document.getElementById('dd4');
  function scrollDown() {
    var windowCoords = h1 + h2 + h3 + h4 + 200;
    (function scroll() {
      if (window.pageYOffset < windowCoords) {
        window.scrollBy(0, 10);
        setTimeout(scroll, 0);
      }
      if (window.pageYOffset > windowCoords) {
        window.scrollTo({
          top: windowCoords,
          behavior: "smooth"
        });
      }
    })();
  }
  btnScrollDown.addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("menu").classList.remove("show");
  })
  btnScrollDown.addEventListener('click', scrollDown);
})();
(function() {
  var h1 = document.getElementById("scrollblock1").clientHeight;
  var h2 = document.getElementById("features").clientHeight;
  var h3 = document.getElementById("works").clientHeight;
  var h4 = document.getElementById("team").clientHeight;
  var h5 = document.getElementById("testimonals").clientHeight;
  var btnScrollDown = document.getElementById('dd5');
  function scrollDown() {
    var windowCoords = h1 + h2 + h3 + h4 + h5;
    (function scroll() {
      if (window.pageYOffset < windowCoords) {
        window.scrollBy(0, 10);
        setTimeout(scroll, 0);
      }
      if (window.pageYOffset > windowCoords) {
        window.scrollTo({
          top: windowCoords,
          behavior: "smooth"
        });
      }
    })();
  }
  btnScrollDown.addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("menu").classList.remove("show");
  })
  btnScrollDown.addEventListener('click', scrollDown);
})();

document.getElementById("trigger").addEventListener("click", function(e) {
  e.preventDefault();
  if (document.getElementById("menu").className == "nav") {
    document.getElementById("menu").classList.add("show");
  } else {
    document.getElementById("menu").classList.remove("show");
  }
  
})

(function() {
  var slider = document.getElementById("reviewsSlider");
})

