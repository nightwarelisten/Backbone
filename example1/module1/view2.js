define(["text!module1/tpl2.html"], function (tpl) {

    var View2 = Backbone.View.extend({
        el: '#container',
        template : _.template(tpl),
        

        initialize: function () {
        },

        render: function (name) {
            this.$el.html(this.template({name: "dsfsdf"}));
        },


    });

    return View2;
});