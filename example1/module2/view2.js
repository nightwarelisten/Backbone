define(["text!module2/tpl.html"], function (tpl) {

    var View1 = Backbone.View.extend({
        el: '#container',
        template : _.template(tpl),
        events:{
        	"click  p":"newtrans",
        	"change #test":"test",
        },

        initialize: function () {
        },

        render: function (name) {
            this.$el.html(this.template({name: name}));
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