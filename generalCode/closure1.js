function outerFunction(arg) {
var variableInOuterFunciton = arg;
	function bar() {
		console.log(variableInOuterFunciton);
	}
	bar(); //call local function to demo that it has access to arg
}

outerFunction('hello closure!');