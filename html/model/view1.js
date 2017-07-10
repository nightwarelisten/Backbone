define(["text!model/tp1.html"],function(tp1){
	var View = Backbone.View.extend({
		el:"#test",
		template : _.template(tp1),
		events : {
			"click  .test" : "clickTest",
		},
		initialize :function(){

		},
		render :function(name){

		},
		clickTest :function(){
			alert("test");
		}
	})

	return View ;

})