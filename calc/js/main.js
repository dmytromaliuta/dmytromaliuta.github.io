var toCount = "";
var screen = document.getElementById('screen__result');
var screenlive = document.getElementById('screen__result_live');
function insert(symbol){
	toCount = toCount + symbol;
	if (toCount[0] === '+') {
		toCount = "";
		return 1;
	}
	screen.textContent += symbol;
	count();
}
function devideMultiply(symbol){
	switch (symbol) {
		case '/':
			toCount += '/';
			if (toCount[0] === '/') {
				toCount = "";
				return 1;
			}
			screen.textContent += '÷';
			break
		case '*':
			toCount += '*';
			if (toCount[0] === '*') {
				toCount = "";
				return 1;
			}
			screen.textContent += '×';
			break
	}
}
function count(){
	if (eval(toCount) == 'Infinity' || eval(toCount) == '-Infinity') {
		screenlive.textContent = 'На 0 ділити не можна';
		return 2;
	}
	if (eval(toCount) == NaN) {
		screenlive.textContent = 'Помилка';
		return 3;
	}
	screenlive.innerHTML = eval(toCount);
}
function equal(){
	screen.innerHTML = screenlive.textContent;
	screenlive.textContent = "";
	toCount = "";
}
function clean(){
	toCount = toCount.slice(0, -1);
	screen.textContent = screen.textContent.slice(0, -1);
	count();
	if (screenlive.textContent == "undefined") {
		screen.innerHTML = "";
		screenlive.innerHTML = "";
	}
}