function RPNCalculator (){
    this.firstName = [];

}

RPNCalculator.prototype.plus = function(){
		if (this.firstName.length<2){throw "rpnCalculator is empty"}
		this.firstName[this.firstName.length-2] = this.firstName[this.firstName.length-1] + this.firstName[this.firstName.length-2];
    this.firstName.pop();
    };
	
RPNCalculator.prototype.minus = function(){
		if (this.firstName.length<2){throw "rpnCalculator is empty"}
		this.firstName[this.firstName.length-2] = this.firstName[this.firstName.length-2] - this.firstName[this.firstName.length-1];
    this.firstName.pop();
    };
	
RPNCalculator.prototype.times = function(){
		if (this.firstName.length<2){throw "rpnCalculator is empty"}
		this.firstName[this.firstName.length-2] = this.firstName[this.firstName.length-2] * this.firstName[this.firstName.length-1];
    this.firstName.pop();
    };

RPNCalculator.prototype.divide = function(){
		if (this.firstName.length<2){throw "rpnCalculator is empty"}
		this.firstName[this.firstName.length-2] = this.firstName[this.firstName.length-2] / this.firstName[this.firstName.length-1];
    this.firstName.pop();
    };
	
RPNCalculator.prototype.value = function(){return this.firstName[this.firstName.length-1]};

RPNCalculator.prototype.push = function(n){this.firstName.push(n);};
	
