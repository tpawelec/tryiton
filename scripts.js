$(document).ready(function() {

	// HAMBURGER MENU FOR MOBILE DEVICES
	$('.toggle-menu').click(function() {
        $('.menu-section ul').toggleClass('menu-active');
    })

	// SMOOTH SCROLL ANIMATION
	$("#homeSection a").click(function(e) {
		e.preventDefault();
		var sectionId = e.currentTarget.id + "Section";
		$("body, html").animate({
			scrollTop: $("#" + sectionId).offset().top
		}, 1000)
	})

	// TO THE TOP ARROW

	var arrow = $(".to-top");
	$(window).scroll(function() {
		var $this = $(this);

		if($this.scrollTop() > 70) {
			arrow.css('display', 'block');
		} else {
			arrow.css('display', 'none');
		}
	});

	arrow.click(function() {
		$("body, html").animate({
			scrollTop: $("#homeSection").offset().top
		}, 500)
	})


})

