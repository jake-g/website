// Adaptive header
var lastScrollTop = 0;
window.addEventListener("scroll", function() {
  var st = window.pageYOffset || document.documentElement.scrollTop;
  if (st > lastScrollTop) {
    document.getElementById("header").style.top = "-100%";
  } else {
    document.getElementById("header").style.top = "0";
  }
  lastScrollTop = st;
}, false);

// Google Analytics
(function(i, s, o, g, r, a, m) {
  i['GoogleAnalyticsObject'] = r;
  i[r] = i[r] || function() {
      (i[r].q = i[r].q || []).push(arguments)
    },
    i[r].l = 1 * new Date();
  a = s.createElement(o),
    m = s.getElementsByTagName(o)[0];
  a.async = 1;
  a.src = g;
  m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-70620937-1', 'auto');
ga('send', 'pageview');