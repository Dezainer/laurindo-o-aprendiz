function scrollTo(id){
	var position = $(id).position().top;

	$('html, body').animate({
		scrollTop: position
	}, "slow");
}

$('#frase').click(function (e) {
	e.preventDefault();

	var id = $(this).attr('href');
	scrollTo(id);
});

$('#frase2').click(function (e) {
	e.preventDefault();

	var id = $(this).attr('href');
	scrollTo(id);
})