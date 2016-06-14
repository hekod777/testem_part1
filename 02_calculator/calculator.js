

function createCalculator(){
	var result = 0;
	// What does "this" refer to here?
	this.value = function (){return result};
	this.add = function (n){result = result + n; return result};
	this.subtract = function (m){result = result - m; return result};
	// What does this function return as a value?
}
