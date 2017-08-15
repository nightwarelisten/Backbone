define(['module2/view2','module2/model1'], function (View,Model) {

    var controller = function () {
        var view = new View();
       	var model = new Model();
        view.render(model.get("name"));
    };
    return controller;
});