
var tooltip_text = document.getElementsByClassName("tooltip-text");

window.onmousemove = function(e) {
	var x = e.clientX;
	var y = e.clientY;

	for (var i = 0; i < tooltip_text.length; i++) {
		var element_height = $(tooltip_text[i]).height();
		var element_width = $(tooltip_text[i]).width();
		
		if (y + 10 < $(window).height() - element_height - 20)
			tooltip_text[i].style.top = (y + 10) + 'px';
		else
			tooltip_text[i].style.top = (y - element_height - 20) + 'px';
		
		tooltip_text[i].style.left = Math.min((x + 10), $(window).width() - element_width - 10) + 'px';
	}
}