
var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       0,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null // optional scroll container selector, otherwise use window
    }
  );
  wow.init();

window.addEventListener('scroll', function(){
  let pageTop = document.querySelector('#btnScrolltoTop');
  let windowPosition = window.scrollY > 120;
  pageTop.classList.toggle('active', windowPosition);
})

const btnScrolltoTop = document.querySelector('#btnScrolltoTop');
btnScrolltoTop.addEventListener('click', function(){
  $('html, body').animate({scrollTop: 0}, 'slow');
});

const menuBtn = document.querySelector('.btn-bar');
    let menuOpen = false;
    menuBtn.addEventListener('click', () => {
      if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
      }else{
        menuBtn.classList.remove('open');
        menuOpen = false;
      }
    });

$('.btn-bar').click(function(){
  $('.menu').slideToggle();
})
