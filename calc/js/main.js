var toCount = "";
var screen = document.getElementById('screen__result');
var screenlive = document.getElementById('screen__result_live');

function insert(symbol){
	if (toCount[toCount.length - 1] == '/' && (symbol == "/" || symbol == "*" || symbol == "+")) return 5;
	if (toCount[toCount.length - 1] == '*' && (symbol == "/" || symbol == "*" || symbol == "+")) return 5;
	if (toCount[toCount.length - 1] == '+' && (symbol == "/" || symbol == "*" || symbol == "+")) return 5;
	if (toCount[toCount.length - 1] == '-' && (symbol == "/" || symbol == "*" || symbol == "+" || symbol == "-")) return 5;
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
		case '-':
			toCount += '-';
			screen.textContent += '-';
			break
		case '+':
			toCount += '+';
			if (toCount[0] === '+') {
				toCount = "";
				return 1;
			}
			screen.textContent += '+';
			break
		default:
			toCount = toCount + symbol;
			screen.textContent += symbol;
			break;

	}
	
	count();
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
}
function clean(){
	toCount = toCount.slice(0, -1);
	if (screenlive.textContent == "") {
		toCount = "";
	}
	screen.textContent = screen.textContent.slice(0, -1);
	count();
	if (screenlive.textContent == "undefined") {
		screen.innerHTML = "";
		screenlive.innerHTML = "";
	}
}