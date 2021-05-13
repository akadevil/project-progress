let equality = [];
let result = 0;
let number1 = [];
let number2 = [];


let button10 = document.getElementById("button10");
button10.addEventListener("click", function10);
function function10 () {
	document.getElementById("display").innerHTML+="1";
	equality.push("1");
}

let button2 = document.getElementById("button2");
button2.addEventListener("click", function2);
function function2 () {
	document.getElementById("display").innerHTML+="7";
	equality.push("7");
}

let button3 = document.getElementById("button3");
button3.addEventListener("click", function3);
function function3 () {
	document.getElementById("display").innerHTML+="8";
	equality.push("8");
}

let button4 = document.getElementById("button4");
button4.addEventListener("click", function4);
function function4 () {
	document.getElementById("display").innerHTML+="9";
	equality.push("9");
}

let button6 = document.getElementById("button6");
button6.addEventListener("click", function6);
function function6 () {
	document.getElementById("display").innerHTML+="4";
	equality.push("4");
}

let button7 = document.getElementById("button7");
button7.addEventListener("click", function7);
function function7 () {
	document.getElementById("display").innerHTML+="5";
	equality.push("5");
}

let button8 = document.getElementById("button8");
button8.addEventListener("click", function8);
function function8 () {
	document.getElementById("display").innerHTML+="6";
	equality.push("6");
}

let button11 = document.getElementById("button11");
button11.addEventListener("click", function11);
function function11 () {
	document.getElementById("display").innerHTML+="2";
	equality.push("2");
}

let button12 = document.getElementById("button12");
button12.addEventListener("click", function12);
function function12 () {
	document.getElementById("display").innerHTML+="3";
	equality.push("3");
}

let button14 = document.getElementById("button14");
button14.addEventListener("click", function14);
function function14 () {
	document.getElementById("display").innerHTML+="0";
	equality.push("0");
}

let button5 = document.getElementById("button5");
button5.addEventListener("click", function5);
function function5 () {
	document.getElementById("display").innerHTML+="+";
	equality.push("+");
}

let button9 = document.getElementById("button9");
button9.addEventListener("click", function9);
function function9 () {
	document.getElementById("display").innerHTML+="-";
	equality.push("-");
}

let button13 = document.getElementById("button13");
button13.addEventListener("click", function13);
function function13 () {
	document.getElementById("display").innerHTML+="/";
	equality.push("/");
}

let button15 = document.getElementById("button15");
button15.addEventListener("click", function15);
function function15 () {
	document.getElementById("display").innerHTML+=".";
	equality.push(".");
}

let button17 = document.getElementById("button17");
button17.addEventListener("click", function17);
function function17 () {
	document.getElementById("display").innerHTML+="*";
	equality.push("*");
}
let buttoncc = document.getElementById("buttoncc");
buttoncc.addEventListener("click", ccfunction);
function ccfunction () {
	while (equality.length > 0) {
		equality.pop();
	}
	document.getElementById("display").innerHTML=""
} 

let button16 = document.getElementById("button16");
button16.addEventListener("click", function16);
function function16 () {
    
	document.getElementById("display").innerHTML=""
	equality.push("=");
    
	let r1 = equality.toString();
	let i = 0;
	let index = 0;
	let r = 0;
	let r2 = "";
	let num1 = "";
	let num2 = "";
	let slPlace = 0;
	let oper = 0;
	
	

	for (i in r1){
		if (r1[i] == "," ) {
			r2 = r1.replace(/,/gi , "");
		}
		
	}
    
	for (index in r2) {
		slPlace +=1;
		if (r2[index] == "+" || r2[index] == "-" || r2[index] == "/" || r2[index] == "*") {
			num1 = r2.slice(0, index);
			break;
		}
		
	} 

	for (r in r2) {
		if (r2[r] == "="){
			num2 = r2.slice(slPlace, r);

			break;
		}
	}
    let lastNum1 = parseFloat(num1);
	let lastNum2 = parseFloat(num2);

	for (oper in r2) {
        if (r2[oper] == "+"){
            let answer = lastNum1 + lastNum2;
			document.getElementById("display").innerHTML+=answer;
			while (equality.length > 0) {
				equality.pop();
			}
            if (answer != NaN) {
				equality.push(answer);
			}
			else {
				equality.push("0")
			}
			
			
		}
		if (r2[oper] == "*"){
			let answer = lastNum1 * lastNum2;
			document.getElementById("display").innerHTML+=answer;
			while (equality.length > 0) {
				equality.pop();
			}
            if (answer != NaN) {
				equality.push(answer);
			}
			else {
				equality.push("0")
			}
		}
		if (r2[oper] == "/"){
            let answer = lastNum1 / lastNum2;
			document.getElementById("display").innerHTML+=answer;
			while (equality.length > 0) {
				equality.pop();
			}
            if (answer != NaN) {
				equality.push(answer);
			}
			else {
				equality.push("0")
			}
		}
		if (r2[oper] == "-"){
			let answer = lastNum1 - lastNum2;
			document.getElementById("display").innerHTML+=answer;
			while (equality.length > 0) {
				equality.pop();
			}
            if (answer != NaN) {
				equality.push(answer);
			}
			else {
				equality.push("0")
			}
		}
	}

    
}
