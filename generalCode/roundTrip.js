// a string
var str = "Hey Buffer!";
var buffer = new Buffer(str, "utf-8");
var roundTrip = buffer.toString('utf-8');
console.log(roundTrip);