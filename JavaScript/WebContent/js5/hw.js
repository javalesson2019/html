function add(){
	var add = document.getElementById("input");
	add.addEventListener("keydown", function (e) {
	    if (e.keyCode === 13) {  //enter
	        newElement();
	    }
	});
}

function closeB(){
	var myNodelist = document.getElementsByTagName("LI");
	for (let i = 0; i < myNodelist.length; i++) {
  		var span = document.createElement("SPAN");
  		var txt = document.createTextNode("\u00D7");
  		span.className = "close";
  		span.appendChild(txt);
 		myNodelist[i].appendChild(span);
	}
}

function clickClose(){
	var close = document.getElementsByClassName("close");
	for (let i = 0; i < close.length; i++) {
	  close[i].onclick = function() {
	    var div = this.parentElement;
	    div.style.display = "none";
	  }
	}
}

function listChecked(){
	var list = document.querySelector('ul');
	list.addEventListener('click', function(e) {
	  if (e.target.tagName === 'LI') {
	    e.target.classList.toggle('checked');
	  }
	}, false);
}

function newElement() {
	  var li = document.createElement("li");
	  var inputValue = document.getElementById("input").value;
	  var t = document.createTextNode(inputValue);
	  li.appendChild(t);
	  if (inputValue === '') {
	    alert("empty field");
	  } else {
	    document.getElementById("list").appendChild(li);
	  }
	  document.getElementById("input").value = "";
	  closeB();
	  clickClose();
	}

function task(){
	add();
	closeB();
	clickClose();
	listChecked();
}