$('.buttonclass').click(
function(){
alert('button clicked');
}
);

var x = Math.random();
x = x.toString();

$('.random_number').click(
function(){
$('h1').text(x);
}
);