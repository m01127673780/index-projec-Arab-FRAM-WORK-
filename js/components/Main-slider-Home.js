 

 $(function() {

'use strict';
//Adjust slider Height


 
var winH=$(window).height(),
upperH = $('.upper-bar').innerHeight(),
navH   = $('.navbar').innerHeight();
     $('.slider,.carousel-item ').height(winH - (upperH + navH)); 

 
 
 
 });

