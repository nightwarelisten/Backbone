(function(win){
	var baseUrl = document.getElementById("main").getAttribute("data-baseurl");
	var config = {
		baseUrl : baseUrl, //依赖路径

		paths:{
			jquery:"libs/jquery-1.8.3.min",
			underscore:"libs/underscore",
			backbone:"libs/backbone",
			text:"text.js"
		},

		shim:{
			jquery:{
				exports:"$",
			},
			underscore:{
				exports:"_",
			},
			backbone:{
				deps:["jquery","underscore"],
				exports:"Backbone",
			}
		}
	}
	require.config(config);

	require(["jquery","underscore","backbone"],function(){
		
	})
})(window)