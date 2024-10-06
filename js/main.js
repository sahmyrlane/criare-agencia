 var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
jQuery('.gallery').eq(0).initGallery({
    nav: ['<i class="material-icons">keyboard_arrow_left</i>', '<i class="material-icons">keyboard_arrow_right</i>'],
    close: "<i class='material-icons'>close</i>",
    aspectRatio: 3/2,
    showDots: true,
    showNavIfOneItem: false,
    showNav: false,
    arrows: true,
    transition: "fade",
    fullScreen: false,
    autoplay: false,
});



// jQuery('.gallery').trigger('change', 'prev');
