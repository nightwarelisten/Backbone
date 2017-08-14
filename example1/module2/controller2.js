define(['module2/view2'], function (View) {

    var controller = function () {
        var view = new View();
       
        view.render('小石头');
    };
    return controller;
});