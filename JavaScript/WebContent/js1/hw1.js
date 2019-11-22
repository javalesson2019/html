/**
 * 
 */

function task1(start, end){
	  start = prompt("starts with: ", 0);
	  end = prompt("ends with: ", 0);
	  if (start > end) {
	    let t = start;
	    start=end;
	    end=t;
	  }
	  let res = 0;
	  for (let i = start; i <= end; i++) {
	    res += i;
	  }
	  return res;
}

function task2(a, b){
	  if(a == null){
	  a = prompt("a: ", 0);
	  b = prompt("b: ", 0);
	  }
	  if (!b) {
	        return a;
	  }
	  return task2(b, a % b);
}
function task3(a){
		a = prompt("a: ", 0);
		let arr = [];
		let j=0;
		for(let i = 0; i<=a; i++){
			if(a%i==0){
				arr[j]=i;
				j++;
			}
		}
	return arr;
}
function task4(a){
	a = prompt("a: ", 0);
	if(a<0){
		a=-a;
	}
	let count=0;
	do{
		a=a/10;
		count++;
	}while(a>1);
	return count;
		
}
function task5(){
	let pos = 0;
	let neg = 0;
	let zero = 0;
	let even = 0;
	let odd = 0;
	for (let i = 0; i < 10; i++) {
	   let a = prompt(`num ${(i+1)}`, i);
	   if(a>0){
		   pos++;
	   }else if(a<0){
		   neg++;
	   }else{
		   zero++;
	   }
	   
	   if (a % 2 === 0) {
	        even++;
	    }else {
	        odd++;
	    }
	   
	 }

	return {pos, neg, zero, even, odd};
}

function task6(){
	do{
		let a = prompt("a", 0);
		let b = prompt("b", 0);
		let operation;
		let res =0;
		do{
		operation = prompt("operation", '+')
		if(operation==='+'){
			a+=b;
			res=a;
			a-=b;
			break;
		}else if(operation==='-'){
			res=a-b;
			break;
		}else if(operation==='*'){
			res=a*b;
			break;
		}else if(operation==='/'){
			res=a/b;
			break;
		}}while(true);
		
		alert(a+operation+b+"="+res);
		if(!confirm("another one?")){
			break;
		}
	}while(true)
		
}
function task7(str, count){
	str=prompt("line", 123456);
	count=prompt("shift",2);
	for (let i = 0; i < count; i++) {
		str += str.substr(0, 1);
	    str = str.substr(1);
     }
    return str;
}

function task8(){
	let arr=["monday", "tuesday", "wednesday", "thursday", "friday", "saturnday", "sunday"];
	let i=0;
	do{
		if(!confirm(arr[i]+". another one?")){
			break;
		}
		i++;
		if(i==7){
			i=0;
		}
		
	}while(true);
}
function task9(){
	document.write('<table border="1" cellspacing="0">');
	for(let i=1;i<11;i++) {
		 document.write("<tr>");
		for(let j =2; j<10;j++){
	    document.write("<td>" + j*i + "</td>");
		}
		document.write("</tr>");
	}
	 
	document.write("</table>");
}
function task10(min, max){
	min = prompt("min", 0);
	max = prompt("max", 10);
	alert(`make a number between ${min} and ${max}`);
	max++;
	let ans;
	let guess;
	  do {
	    guess= Math.floor(min+((max-min)/2));
	    ans = prompt(`Your number is ${guess}? enter >, < or ==`);
	    if(ans===">"){
	    	min = +min + +(max - min) / 2;
	    }
	    if(ans==="<"){
	    	 max = +max -(max - min) / 2;
	    }
	  }while (ans !== "==");
	  alert("thanks for the game:)");
}