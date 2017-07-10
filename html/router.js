define(["backbone"],function(){
	var Router = Backbone.Router.extend({
		routes :{
			"module1" : "module1",
			"module2(/:name)" : "module2" ,
			"*actions" : "defaultAction" ,
		},

		// 初始化路由
		initialize:function(){
			alert(23423);
		},

		module1 :function(){
			var url = "model/controller1.js";
			require([url],function(controller){
				controller();
			})
		},	

		module2 :function(name){
			alert("se4r")
		},

		defaultAction :function(){
			alert("404");
		}
	})

	var router = new Router();
	router.on('route', function (route, params) {
        console.log('hash change', arguments);  //这里route是路由对应的方法名
    });
	return router ;
})