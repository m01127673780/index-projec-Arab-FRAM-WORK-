 

 $(function() {

'use strict';
//Adjust slider Height


 
var winH=$(window).height(),
upperH = $('.upper-bar').innerHeight(),
navH   = $('.navbar').innerHeight();
     $('.slider,.carousel-item ').height(winH - (upperH + navH)); 

 

 //featured-work 

 $('.featured-work ul li').on('click', function (){
 	$(this).addClass('active').siblings().removeClass('active');
 	if ($(this).data('class')==='all') {
 		
 	}
});




/*==================*/


$('.coutn-one').countTo({
	from:0,
	to :10000,
	speed:12000,
	refreshInterval:80 
});
	 $('.coutn-tow').countTo({
	from:0,
	to :15652,
	speed:13000,
	refreshInterval:80 
});

	 $('.coutn-thre').countTo({
	from:0,
	to :80550,
	speed:12000,
	refreshInterval:80 
});

	 $('.coutn-four').countTo({
	from:0,
	to :75000,
	speed:12500,
	refreshInterval:80 
});
	 /*===================*/
	 $(".my-heden ").funnyText({
		activeColor: '#fff',
		color: '#333',
		fontSize: '7em',
		direction: 'horizontal',
		borderColor: '#00f',
		 speed:500

		 });

	 $('.h1').funnyText({
		activeColor: '#fff',
		color: '#333',
		fontSize: '7em',
		direction: 'horizontal',
		borderColor: '#00f',
		 speed:500

		 });
	 $('.my-heden-our-main').funnyText({
		activeColor: '#fff',
		color: '#333',
		fontSize: '7em',
		direction: 'horizontal',
		borderColor: '#00f',
		 speed:500

		 });
	 $('.Keep-in-touch').funnyText({
		activeColor: '#fff',
		color: '#333',
		fontSize: '7em',
		direction: 'horizontal',
		borderColor: '#00f',
		 speed:500

		 });
  	 $('.Our-Amzeng').funnyText({
		activeColor: '#fff',
		color: '#333',
		fontSize: '7em',
		direction: 'horizontal',
		borderColor: '#00f',
		 speed:500

		 });
	 $('.LETEST-POSTS').funnyText({
		activeColor: '#fff',
		color: '#333',
		fontSize: '7em',
		direction: 'horizontal',
		borderColor: '#00f',
		 speed:500

		 });
	 $('.tell-Us').funnyText({
		activeColor: '#fff',
		color: '#333',
		fontSize: '7em',
		direction: 'both',
		borderColor: '#00f',
		 speed:900

		 });
	 
	 
/*===========================================*/
	   $(".skitter-large").skitter({
		   
		   
//		   auto_play:false;
//		   controls: true;
		   
	   });
/*==================================*/

/*====================================*/
		$("html").niceScroll({
	
	
			cursorcolor:"#7A1B1D",
//		cursorwidth: "20px",
//		cursorborder:"5px solid #00f"
		scrollspeed : "60"
		

	});
/*=========================== =========*/
	 
	 /*============================*/
	 
	 $(".tybime").Typed({
		 
		 strings: ["You think were cool  Work tagether"]
 
 
	 });
	 /*============================*/
 
 });

