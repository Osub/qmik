$.define("demo/Demo3",function(require, exports, module){

	module.exports = {
		doing:function(msg){
			var Demo4 = require("demo/Demo4");
			//console.log("Demo4 .....",Demo4, msg);
			console.log("doing demo3",msg);
			$("#result").append("<p>doing demo3 "+msg+"</p>");
		},
		do1:function(msg){
			console.log("do1 demo3 ",msg);
			$("#result").append("<p>do1 demo3 "+msg+"</p>");
		}

	};
});