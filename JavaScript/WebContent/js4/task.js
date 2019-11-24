var i=1;
var images=[];

images[0]="img/img0.jpg";
images[1]="img/img1.jpg";
images[2]="img/img2.jpg";
images[3]="img/img3.jpg";
images[4]="img/img4.jpg";
images[5]="img/img5.jpg";
images[6]="img/img6.jpg";
images[7]="img/img7.jpg";
images[8]="img/img7.jpg";
images[9]="img/img8.jpg";
images[10]="img/img9.jpg";
images[11]="img/img10.jpg";
images[12]="img/img11.jpg";
images[13]="img/img12.jpg";
images[14]="img/img13.jpg";
images[15]="img/img14.jpg";
images[16]="img/img15.jpg";
images[17]="img/img16.jpg";
images[18]="img/img17.jpg";
images[19]="img/img18.jpg";

class Gallery {
	
	constructor(images) {
        this.images = images;
    }
	changeImg(){
		document.slide.src = images[i];
		if(i<images.length-1){
			i++;
		}else{
			i=0;
		}
	}

	prevImg(){
		if(i>0){
			i--;
		}else{
			i=images.length-1;
		}
	document.slide.src = images[i];
	}

	nextImg(){
		if(i<images.length-1){
			i++;
		}else{
			i=0;
		}
		document.slide.src = images[i];
	}
 
	run() {
		let time;
		let timer;
		let reg = /^[0-9]+$/;
		let user;
		while(!reg.test(user)){
			user=prompt("Time (ms): ");
		}
		time = +user;
		timer = setInterval(function () {
			if(i<images.length-1){
				i++;
			}else{
				i=0;
			}
    	document.slide.src = images[i];
		}, time);
		stop.onclick = function(){
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