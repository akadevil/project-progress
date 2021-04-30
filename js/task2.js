let input = parseInt(prompt());
let table = [];
let output = "";
function mtable() {
	let m = 0;
	while (m != 11){
		let result = 0;
		let row = "";
		result = input * m;
		row = row + "\n" + String(input) + "x" + String(m) + "=" + String(result);
		table.push(row)
		m +=1;
		
	}
   alert(table)
}
mtable(input);
