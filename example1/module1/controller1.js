define(['module1/view1'], function (View) {

    var controller = function () {
        var view = new View();
        console.log(view)
        view.render('kenko');
    };
    return controller;
});