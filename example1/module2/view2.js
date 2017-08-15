define(["text!module2/tpl.html","text!module2/tpl.html"], function (tpl,tpl1,) {

    var View1 = Backbone.View.extend({
        el: '#container',
        template : {"tpl":_.template(tpl), "tpl1":_.template(tpl1)},
        events:{
        	"click  p":"newtrans",
        	"change #test":"test",
        },

        initialize: function () {
        },

        render: function (name) {
            
            this.$el.html(this.template.tpl({name: name}));
            this.$el.append(this.template.tpl1({name:"bitch"}));
        },

        newtrans : function(){
			alert(23343);
        },

        test :function(){
        	alert($("#test").val());
        }

    });

    return View1;
});