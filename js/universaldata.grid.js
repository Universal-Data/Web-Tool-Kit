'use strict';

function Grid(classAttr, classChild) {
    this.name = "grid";
    this.classAttr = (classAttr || ".row.dynamic");
    this.classChild = (classChild || ".cols");
}

Grid.prototype.init = function () {
    var $rows = $(this.classAttr);
    $rows.each(function () {
        var $target = $(this).children(this.classChild);
        $target.css(
            "width", (100 / $target.length).toString() + "%"
        );
    });
};

(function (global) {
    var grid = new Grid();
    global.UniversalData.addPlugin(grid);
})(this);
