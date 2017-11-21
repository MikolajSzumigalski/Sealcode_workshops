function funkcja($a) {
    console.log($a);
    console.log($a.closest('section'));
    console.log($a.parent());
	console.log($a.next());
    console.log($a.prev());
    console.log($a.children());
};

$a = $('.popular-recipes');

funkcja($a);

$a = $('nav');

funkcja($a);

$a = $('aside');

funkcja($a);

$a = $('form');

funkcja($a);