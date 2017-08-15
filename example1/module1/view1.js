define(["text!module1/tpl.html","require"], function (tpl) {

    var View1 = Backbone.View.extend({
        el: '#container',
        template : _.template(tpl),
        events:{
        	"click  .prompt":"newtrans",
        	"change #test":"test",
          
        },

        initialize: function () {
        },

        render: function (name) {
            this.$el.html(this.template({name: name}));
        },

        newtrans : function(){
			
        },

        test :function(){

            var url = 'module1/view2.js';
            //这里不能用模块依赖的写法，而改为url的写法，是为了grunt requirejs打包的时候断开依赖链，分开多个文件
            require([url], function (view) {
                var a =new view();
                a.render();
            });

        }

    });

    return View1;
});