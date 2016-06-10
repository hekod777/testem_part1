

function createCalculator(){
	var result = 0;
	this.value = function (){return result};
	this.add = function (n){result = result + n; return result};
	this.subtract = function (m){result = result - m; return result};
	
	

}