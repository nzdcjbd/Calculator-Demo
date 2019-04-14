var calc, ans;

function pushItem(key) {

	calc += key;

	// show
	$('.ans')[0].innerHTML = calc;
}

function calcAns() {
	ans = eval(calc);

	// show
	$('.ans')[0].innerHTML = ans;
	$('.calc')[0].innerHTML = calc;

	// prepare next calc
	calc = ans;
}

(function reset() {
	calc = "";
	ans = 0;

	$('.ans')[0].innerHTML = 0;
	$('.calc')[0].innerHTML = "";
})();