function ieneConverter(valor){
	let valorIene = parseFloat(valor); 
	let valorReal = valorIene * 0.05;
	
	document.getElementById("valorReal").innerHTML = valorReal.toFixed(2);
}