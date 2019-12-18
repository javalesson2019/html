var i = 1;
var images = [];
// Циклом нельзя было как-то обойтись?
for (let i = 0; i < 19; i++) {
	images.push(`img/img${i}.jpg`);
}

class Gallery {

	constructor(images) {
		this.images = images;
	}
	changeImg() {
		document.slide.src = images[i];
		if (i < images.length - 1) {
			i++;
		} else {
			i = 0;
		}
	}

	prevImg() {
		if (i > 0) {
			i--;
		} else {
			i = images.length - 1;
		}
		document.slide.src = images[i];
	}

	nextImg() {
		if (i < images.length - 1) {
			i++;
		} else {
			i = 0;
		}
		document.slide.src = images[i];
	}

	run() {
		let time;
		let timer;
		let reg = /^[0-9]+$/;
		let user;
		while (!reg.test(user)) {
			user = prompt("Time (ms): ");
		}
		time = +user;
		timer = setInterval(function () {
			if (i < images.length - 1) {
				i++;
			} else {
				i = 0;
			}
			document.slide.src = images[i];
		}, time);
		stop.onclick = function () {
			clearInterval(timer);
		}
	}
}


let gallery = new Gallery(images);

let next = document.getElementById("next");
let previous = document.getElementById("prev");
let run = document.getElementById("run_slideshow");
let stop = document.getElementById("stop_slideshow");
next.onclick = gallery.nextImg;
previous.onclick = gallery.prevImg;
run.onclick = gallery.run;