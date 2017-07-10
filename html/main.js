(function(win){
	//配置 baseUrl ;
	var baseUrl = document.getElementById("main").getAttribute("data-baseurl"); 

	/*文件依赖*/

	var config = {
		baseUrl : baseUrl , // 依赖路径

		paths: {
			"jquery":"libs/jquery-1.8.3.min",
			"underscore":"libs/underscore",
			"backbone":"libs/backbone",
			"text":"libs/text"
		},
		shim : {
			"jquery":{
				exports:"$"
			},
			"underscore":{
				exports:"_"
			},
			"backbone":{
				deps:["jquery","underscore"],
				exports:{
					exports:"Bakcbone"
				}
			}
		}
	}

	require.config(config);

	 //Backbone会把自己加到全局变量中
    require(['backbone', 'underscore', 'router'], function(){
        Backbone.history.start();   //开始监控url变化
    });

})(window)