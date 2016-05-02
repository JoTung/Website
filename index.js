

var x = Math.random();
x = x.toString();

$('.random_number').click(
function(){
	var x = Math.random();
	x = x.toString();
	$('h1').text(x);
}
);