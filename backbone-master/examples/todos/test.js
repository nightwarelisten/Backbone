$(function(){
	var Test = Backbone.Model.extend({
		defaults:function(){
			return {
						title:"no title",
						done:false,
						order:Tests.nextorder(),
					}
		},			
		toggle:function(){
			this.save({done:!this.get("title")});
		}
	});
	var TestList = Backbone.Collection.extend({

		model:Test,

		localStorage: new Backbone.LocalStorage("todos-backbone"),

		done:function(){
			return this.where({"done":true});
		},

		remaining:function(){
			return this.where({"done":false});
		},

		nextorder:function(){
			if(!this.length ){
				return 1;
			}else{
				return this.last().get("order") + 1;
			}
		},

		comparator:"order",
	});

	var Tests = new TestList;
	var TestView = Backbone.View.extend({

		tagName :'li',

		template: _.template($("#item-template").html()),

		events:{
			"dblclick .view":"editor",
			"blur .editor":"close",
			"keypress .editor":"updataEditor",
			"click .destroy":"clear"
		},

		initialize:function(){
			
			this.listenTo(this.model,"change",this.render);
			this.listenTo(this.model,"destroy",this.remove);
			//this.render();
		},
		
		render:function(){
			this.$el.append(this.template(this.model.toJSON()));
			this.$el.toggleClass("done",this.model.get("done"));
			this.input = this.$(".editor");
			return  this;
		},
		editor:function(){
			this.$el.addClass(".editoring");
			this.input.focus();
		},
		close:function(){
			var value = this.input.val();
			if(value == ""){
				this.clear();
			}else{
				this.model.save({"title":value});
				this.$el.removeClass("editoring");
			}
		},
		updataEditor:function(e){
			if(e.keyCode == 13) this.close();
		},
		clear:function(){
			this.model.destroy();
		}
	})
	//var  tes_view = new TestView({model:new Test({title:1,done:false,order:1})});
	var AppTest = Backbone.View.extend({
		el:$("#contain"),
		//allTemplate:$("#newTest").html(),
		initialize:function(){
			var todo = new Test({"title":1});
			this.addOne(todo);
		},
		render:function(){
			return this;	
		},
		addOne: function(todo) {

	      var view = new TestView({model: todo});
	      this.$("#todo-list").append(view.render().el);
	    },
	})
var app_test = new AppTest;
})