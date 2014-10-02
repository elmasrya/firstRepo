var button = document.getElementById('calculateBtn');
var num1 = document.getElementById('num_one');
var num2 = document.getElementById('num_two');

button.onclick = function() {



  var solution = parseInt(num1.value) + parseInt(num2.value);
  var ans = document.getElementById('answer');
  ans.innerHTML = solution;



}
