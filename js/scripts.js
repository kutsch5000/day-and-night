var date= new Date();
var current_hour= date.getHours();

console.log(current_hour);

//If Night time
//Remove 'day' class
//Add 'night' class

if (current_hour >= 17){
	$('body').removeClass('day');
	$('body').addClass('night');
};
