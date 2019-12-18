'use strict';
/**
 *  блочный элемент (div) закрашенный цветом color
 */
var color = "red";
function task1() {
	color = random();
	document.writeln(`<div style="background:${color()};height:100px;width:100px;"></div>`)
	printColor();
}

function setColor() {
	return function () {
		return "black";
	}
}

function printColor() {
	var color = setColor();
	console.log(`Local color = ${color()} global color = ${window.color}`);
}

function random() {
	return function () {
		if ((Math.random() * 10) <= 5) {
			return "red";
		} else {
			return "black";
		}
	}
}
/**
 * тест: творческая ли вы натура? 
 */
function task2() {
	var questions = [
		"1. Обнаружив, что любимые джинсы порвались, вы\nвыкидываете их — 0\nделаете еще несколько художественных разрезов и продолжаете носить — 1",
		"2. Подружка попросила вас побыть с ее ребенком-непоседой. Вы\nвключите ему телевизор или видеоигру  — 0\nокунетесь в детство и вместе придумаете веселую увлекательную игру — 1",
		"3. Часто ли вам снятся сны? Да, вы обычно помните сновидения, они яркие и интересные — 1\nНет, вы редко запоминаете сны — 0",
		"4. Какую работу вы предпочтете — ту, где известно, что и как делать, или ту, в которой необходимо что-то придумывать?\nИнтереснее самостоятельно искать решения проблем, даже если это требует временных затрат — 1 \nВам проще работать, когда существует четкий алгоритм — 0",
		"5. Подружка выходит замуж, и вам предстоит организовать выкуп невесты, вы\nизучите литературу и подберете конкурсы  — 0 \nпостараетесь придумать конкурсы сами, чтобы они были оригинальными — 1",
		"6. Изучая меню в ресторане, вы, скорее всего, остановитесь на\nзнакомом блюде — 0\nблюде с самым экстравагантным, названием — 1",
		"7. Если в процессе создания стенгазеты потребуется нарисовать какое-то животное, вы\nпостараетесь найти фотографию или другое изображение и срисуете — 0\nнарисуете животное сами, даже если не очень хорошо имеете — 1",
		"8. Для новогоднего маскарада в детском саду необходимо найти малышу костюм. Вы \nсошьете его сами — 1 \nкупите в магазине — 0",
		"9. Любили ли вы в детстве читать сказки?\nВам интереснее было смотреть мультики — 0\nДа, вы любили читать не меньше, чем смотреть телевизор — 1",
		"10. Ваши фотографии в альбоме —\nчаше традиционные — 0 \nживые позы в необычных ракурсах — 1"
	]
	var ans;
	// лучше использовать аттрибут length вместо магического числа 10
	for (let i = 0; i < questions.length; i++) {
		let tmp = prompt(questions[i]);
		if (tmp < 2) { // я так понимаю, что сдесь была попытка проверить на вводимые данные
			// но она не работает если оставить поле пустым!
			ans += tmp;
		} else {
			i--;
		}
	}
	if (ans > 7) {
		alert("7 баллов и более. Вы очень творческий человек. Вы умеете видеть необычные решения, которые незаметны для окружающих. ");
	} else if (ans < 4) {
		alert("Менее 4 баллов. Вы придерживаетесь традиционных взглядов на решение проблемных ситуаций.");
	} else {
		alert("От 4 до 6 баллов. Вы достаточно креативны по натуре, но не всегда считаете нужным пользоваться этими способностями. ");
	}


}

/**
 * поиск наиболее часто встречающегося элемента в массиве
 */
function task3(arr) {
	let count = 1;
	let maxCount = 0;
	let elem;
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (arr[i] === elem) {
				break;
			}
			if (arr[i] === arr[j]) {
				count++;
			}
			if (count > maxCount) {
				maxCount = count;
				elem = arr[i];
			}
		}
		count = 1;
	}
	console.log(` ${elem} ( ${maxCount} times )`);
}

/**
 * функция для клонирования массива
 */
function task4(arr) { // Здесь должна быть рекурсия!
	var copy = [];
	for (let i = 0; i < arr.length; i++) {
		copy[i] = arr[i];
	}
	return copy;
}

/**
 * получение первого элемента массива
 */
function task5(arr) {
	let ans = [];
	if (typeof arr[0] !== 'undefined') {
		for (let i = 0; i < arr[0].length; i++) {
			ans[i] = arr[0][i];
		}
	}
	if (ans.length == 0) {
		return arr[0];
	}
	return ans;
}

/**
 * принимает число и вставляет тире (-) послекаждого четного числа
 */
function task6(num) {
	num = num.toString();
	let arr = num.split('');
	let ans = '';
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			ans += arr[i];
			ans += '-';
		} else {
			ans += arr[i];
		}
	}
	return ans;
}

/**
 * нахождение суммы квадратов чисел массива
 */
function task7(arr) {
	var ans = 0;
	for (let i = 0; i < arr.length; i++) {
		if (typeof arr[i] == "number") {
			ans += arr[i] * arr[i];
		}
	}
	return ans;
}

/**
 * перемешивает элементы в массиве
 */
function task8(arr) {
	var n = arr.length;
	while (n) {
		let i = Math.floor(Math.random() * n--);
		let tmp = arr[n];
		arr[n] = arr[i];
		arr[i] = tmp;
	}
	return arr;
}

/**
 * возвращает уникальные элементы в массиве
 */
function task9(arr) {
	let frequency = [];
	for (let i = 0; i < arr.length; i++) {
		let count = 1;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] == arr[j]) {
				count++;
				frequency[j] = 0;
			}
		}

		if (frequency[i] != 0) {
			frequency[i] = count;
		}
	}
	let copy = [];
	let j = 0;
	for (let i = 0; i < arr.length; i++) {
		if (frequency[i] == 1) {
			copy[j] = arr[i];
			j++;
		}
	}
	return copy;

}