let input = parseInt(prompt());
let fibo = [0, 1];
let i = 0;
function fib_adder (x) {
	if (input <=2){
		alert("Type higher value than 2");
	}
	else {
		
		while (fibo.length != input){
			let tiv = 0;
			tiv = fibo[i] + fibo[i+1];
			fibo.push(tiv);
			i += 1;
		}
	}
}
fib_adder(input);
alert (fibo);