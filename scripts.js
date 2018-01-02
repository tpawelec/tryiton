$(document).ready(function() {

	$('.toggle-menu').click(function() {
        $('.menu-section ul').toggleClass('menu-active');
    })

	setBindings();

})

function setBindings() {
	$("#homeSection a").click(function(e) {
		e.preventDefault();
		var sectionId = e.currentTarget.id + "Section";
		$("body, html").animate({
			scrollTop: $("#" + sectionId).offset().top
		}, 1000)
	})
}