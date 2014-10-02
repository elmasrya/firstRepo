/*The onload event is very useful in content control. I used it in the body to
execute the script main.js to load all the functions of questions 1 to 6.
It's actually pretty neat*/


function fnOnLoad(){
  question1();
  question2();
  question3();
  question4();
  question5();
  question6();
}


/*I could have used map
var all_prices = items.map ( function(item)  {

return item.price;}
);

var add_together;
add_together = all_prices.reduce(function (initial, current) {

  return initial + current;
}
);

var sum = add_together/items.length;

Question 2

var mid_price_items = items.filter(function(item) {
return item.price > 14.00 && item.price < 18.00 && item.currency_code=='USD';

});

*/




function question1()
{
	//I initialized my sum//

  var sum = 0;

	var count = items.length;
	items.forEach(
	    function addNumber(value) { sum += value.price; }
	);
	console.log("Solution 1");
	console.log("The average price is $"+formatNumber(sum/count));
}


function question2()
{
	console.log("Solution 2");
	var filteredArr = items.filter(filterPriceRange);//I defined filterPriceRange under question 6
	console.log("Items that cost between $14.00 USD and $18.00 USD: ");

	//Use map to create new array having subset of values
	var resultArr = filteredArr.map(function(value) {
		  return '{title: "'+value.title+'",price:"'+value.price+'"}';
	});
	console.log(resultArr);

}

function question3()
{
	console.log("Solution 3");
	var filteredArr = items.filter(filterCurrencyCode);
	console.log("GBP Items: ");
	filteredArr.forEach(
		function print(value) { console.log(value.title+" £"+value.price); }
	);
}

function question4()
{
	console.log("Solution 4");
	var filteredArr = items.filter(filterWood);
	filteredArr.forEach(
		function print(value) { console.log(value.title+" is made of wood"); }
	);

}
function question5()
{
	console.log("Solution 5");
	var filteredArr = items.filter(filterMaterial);
	//Now for filtered array use reduce to get desired output
	var result = filteredArr.reduce(appendMaterialCount,"");
	console.log(result);
}
function question6()
{
	console.log("Solution 6");
	var filteredArr = items.filter(filterSellerCount);
	//Now for filtered array use reduce to get desired output
	console.log(filteredArr.length+" were made by their sellers");
}
