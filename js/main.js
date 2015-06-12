$(function(){
     $('.outerblock').delay(1400).animate({
          opacity: 0.4
     }, 600);
     $('.innerblock').delay(1800).animate({
          opacity: 1,
          top: '50%'
     }, 800);
     $('.vaaswords1').delay(2800).animate({
          opacity: 1
     }, 1200);
     $('.vaaswords2').delay(4350).animate({
          opacity: 1
     }, 1300);
     $('.vaaswords3').delay(6400).animate({
          opacity: 1
     }, 1600);

     $('.vaaswords1').delay(5100).animate({
          opacity: 0
     }, 600);
     $('.vaaswords2').delay(3600).animate({
          opacity: 0
     }, 600);
     $('.vaaswords3').delay(1400).animate({
          opacity: 0
     }, 600);
     $('.vaas').delay(9950).animate({
          opacity: 0
     }, 600);
     $('.lineforphone').delay(9950).animate({
          opacity: 0
     }, 600);

     $('.ubidiv').delay(10800).animate({
          opacity: 1
     }, 1000);
     var myVideo=document.getElementById("vidd");
     myVideo.volume = 0.5;


     $( ".closepls" ).click(function() {
          $('.outerblock').delay(400).animate({
               opacity: 0
          }, 300);
          $('.innerblock').animate({
               opacity: 0,
               top: '48%'
          }, 400);
          var myVideo=document.getElementById("vidd");
          myVideo.pause();
          $( ".openpls" ).delay(500).animate({
               opacity: 1,
               left: 0
          }, 400);         
     });

     $( ".outerblock" ).click(function() {
          $('.outerblock').delay(400).animate({
               opacity: 0
          }, 300);
          $('.innerblock').animate({
               opacity: 0,
               top: '48%'
          }, 400);
          var myVideo=document.getElementById("vidd");
          myVideo.pause();
          $( ".openpls" ).delay(500).animate({
               opacity: 1,
               left: 0
          }, 400);         
     });

     $( ".openpls" ).click(function() {
          $( ".openpls" ).animate({
               opacity: 0,
               left: '-100px'
          }, 400);
          $('.outerblock').delay(200).animate({
               opacity: 0.4
          }, 600);
          $('.innerblock').delay(600).animate({
               opacity: 1,
               top: '50%'
          }, 1400);


          $('.ubidiv').delay(10800).animate({
               opacity: 1
          }, 1000);
     });
});  