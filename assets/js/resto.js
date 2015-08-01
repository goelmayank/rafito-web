
var s;

initializeSkrollr();

$(".header2 ul li").click(function() {
	$(".header2 ul li").removeClass("active-tab");
	$(this).addClass('active-tab');
	$(".main-block").fadeOut('100');
	$(".block-"+$(this).attr("tab")).delay(400).fadeIn(100);
});

var starred = 0;


// STARS

$(".main-button-star").click(function() {
	if(starred == 0) {
		starred = 1
		/* AJAX TO NOTE THE STAR BY USER */
		$(this).css({"background-color": "#c0392b", "border" : "1px solid #c0392b"});
		$(".star-count").html( parseInt($(".star-count").html())+1 );
	}
	else {
		starred = 0
		/* AJAX TO NOTE THE de-STAR BY USER */
		$(this).css({"background-color": "transparent", "border" : "1px solid #fff"});
		$(".star-count").html( parseInt($(".star-count").html())-1 );
	}
});



function initializeSkrollr() {
	s  = skrollr.init();
	$("body").css("height", "auto");
}



// INITIALIZING MAPS

function initialize() {
	var mapOptions = {
	  center: { lat: 19.418574, lng: 80.2477477},
	  zoom: 8
	};
	var map = new google.maps.Map(document.getElementById('map-canvas'),
	    mapOptions);
}
google.maps.event.addDomListener(window, 'load', initialize);
