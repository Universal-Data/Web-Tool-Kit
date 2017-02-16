'use strict';

function Grid(classAttr, classChild) {
    this.name = "grid";
    this.classAttr = (classAttr || ".row.dynamic");
}

Grid.prototype.init = function () {
    [].forEach.call(document.querySelectorAll(this.classAttr), function (element) {
        var totalChild = element.children.length;
        [].forEach.call(element.children, function (child) {
            child.style.width = (100 / totalChild).toString() + "%";
        });
    });
};

(function (global) {
    var grid = new Grid();
    global.UniversalData.addPlugin(grid);
})(this);
