(function(){
  var nav = document.getElementById('nav');
  var onScroll = function(){ if(nav) nav.classList.toggle('scrolled', window.scrollY > 50); };
  onScroll();
  window.addEventListener('scroll', onScroll, {passive: true});

  var targets = document.querySelectorAll('section > .wrap > *');
  for(var i = 0; i < targets.length; i++){
    if(!targets[i].closest('.hero')) targets[i].classList.add('rv', 'rv-u');
  }
  var all = document.querySelectorAll('.rv');
  if('IntersectionObserver' in window){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, {threshold: 0.05, rootMargin: '0px 0px -5% 0px'});
    for(var k = 0; k < all.length; k++) io.observe(all[k]);
  } else {
    for(var j = 0; j < all.length; j++) all[j].classList.add('in');
  }
})();
