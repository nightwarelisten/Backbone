(function(win){
	var baseUrl = document.getElementById("main").getAttribute("data-baseurl");
	var config = {
		baseUrl : baseUrl,
		paths:{
			"jquery":"libs/jquery-1.8.3.min",
			"underscore":"libs/underscore",
			"backbone":"libs/backbone",
			"text":"libs/text"
		},
		shim:{
			"jquery":{
				exports:"$",
			},
			"underscore":{
				exports:"_",
			},
			"backbone":{
				deps:["jquery","underscore"],
				exports:"Backbone",
			}
		}
	}
	require.config(config);
	require(['backbone', 'underscore', 'router'], function(){
        Backbone.history.start();   //开始监控url变化
    });
})(window)