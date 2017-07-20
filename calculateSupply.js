function calculateSupply(age, amountDay) {
	var maxAge = 100;
	var amountLife = ( amountDay * 375) * (maxAge - age);

	var message = 'You will need ' + amountLife + ' to last you until the ripe old age of ' + age;
	console.log(message);
}

calculateSupply(28, 3);
calculateSupply(29, 4);
calculateSupply(30, 4);

// If i do like this:

(function(){
	var currentAge = 28;
	var maximunAge = 100;
	var ammountDay = 2;

	var total = (ammountDay * 365) * (maximunAge - currentAge);

	// I will nedd 52560 Snickers to last until ripe old age of 100
	console.log('I will nedd ' + total + ' Snickers to last until ripe old age of ' + maximunAge);
})();

// I need a lot of code for repeathe the toal result 
// But with one function i just pass the values by parameters.