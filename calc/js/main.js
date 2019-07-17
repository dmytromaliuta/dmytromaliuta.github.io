var toCount = "";
var screen = document.getElementById('screen__result');
var screenlive = document.getElementById('screen__result_live');

function insert(symbol){
	if (toCount.length === 12) {
		screen.style.fontSize = '27px';
		screenlive.style.fontSize = '17px';
	}
	if (toCount.length === 18) {
		screenlive.innerHTML = 'Переповнено';
		return;
	}
	if (toCount[toCount.length - 1] == '/' && (symbol == "/" || symbol == "*" || symbol == "+")) return;
	if (toCount[toCount.length - 1] == '*' && (symbol == "/" || symbol == "*" || symbol == "+")) return;
	if (toCount[toCount.length - 1] == '+' && (symbol == "/" || symbol == "*" || symbol == "+")) return;
	if (toCount[toCount.length - 1] == '-' && (symbol == "/" || symbol == "*" || symbol == "+" || symbol == "-")) return;
	switch (symbol) {
		case '/':
			toCount += '/';
			if (toCount[0] === '/') {
				toCount = "";
				return;
			}
			screen.textContent += '÷';
			break
		case '*':
			toCount += '*';
			if (toCount[0] === '*') {
				toCount = "";
				return;
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
				return;
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
		return;
	}
	if (eval(toCount) == NaN) {
		screenlive.textContent = 'Помилка';
		return;
	}
	screenlive.innerHTML = eval(toCount);
}
function equal(){
	screen.innerHTML = screenlive.textContent;
	screenlive.textContent = "";
}
function clean(){
	toCount = "";
	screen.innerHTML = "";
	screenlive.innerHTML = "";
}