function setPropertiesOnObjLiteral(Object){
	Object.x = 7;
	Object.y = 8;
	Object.onePlus = function(n){return n+1;}
	
	}
	
function setPropertiesOnArrayObj(arrayObject){
	arrayObject.hello = function (){return "Hello!"};
	arrayObject['full'] = "stack";
	arrayObject[0] = 5;
	arrayObject.twoTimes = function(n){return n*2};
	
	
	
	}
	
function setPropertiesOnFunctionObj(functionObject){

	functionObject.year = 2015;
	functionObject.divideByTwo = function(n){return n/2};
	functionObject.prototype.helloWorld = function (){return "Hello World"};
	
}