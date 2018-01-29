
const observer = lozad('.lazy', {
    rootMargin: '200px 50px',
    threshold: 0.5,
    load: function(el) {
        el.src = el.getAttribute('data-src');

        $(el).on('load', function() {
            this.classList.add('loaded');
        });
    }
});

observer.observe();

$(document).ready(function() {
	var $title = $('h1');
    var $links = $('button');	
    var $outer = $('nav');

    $title.data("color", $title.attr("data-color"));

    for (var i = 0; i++; i < $links.length) {
        var $link = $links[i];
        $link.data("color", $link.attr("data-color"));
    }

    $outer.mouseout(function() {
        $title.css("color", $(this).data("color"));
    });

    $links.mouseenter(function() {
        $title.css("color", $(this).data("color"));
    });
});
