'use strict';

function Lists(classAttr) {
    this.name = "lists";
    this.classAttr = (classAttr || ".lists");
}

Lists.prototype.init = function () {
    var dragSrcEl = null;

    function handleDragStart(e) {
        this.style.opacity = '0.4';  // this / e.target is the source node.
        dragSrcEl = this;

        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', this.innerHTML);
    }

    function handleDragOver(e) {
        if (e.preventDefault) {
            e.preventDefault(); // Necessary. Allows us to drop.
        }
        e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.

        return false;
    }

    function handleDragEnter(e) {
        // this / e.target is the current hover target.
        this.classList.add('over');
    }

    function handleDragLeave(e) {
        this.classList.remove('over');  // this / e.target is previous target element.
    }

    function handleDrop(e) {
        // this / e.target is current target element.

        if (e.stopPropagation) {
            e.stopPropagation(); // stops the browser from redirecting.
        }

        if (dragSrcEl != this) {
            // Set the source column's HTML to the HTML of the column dropped on.
            dragSrcEl.innerHTML = this.innerHTML;
            this.innerHTML = e.dataTransfer.getData('text/html');
        }

        // See the section on the DataTransfer object.

        return false;
    }

    function handleDragEnd(e) {
        this.style.opacity = '1.0';
        // this/e.target is the source node.

        [].forEach.call(cols, function (col) {
            col.classList.remove('over');
        });
    }

    function handleSelect(event) {
        if (event.preventDefault) {
            event.preventDefault();
        }
        if (this.classList.contains('selected')) {
            this.classList.remove('selected');
        } else {
            this.classList.add('selected');
        }

    }

    [].forEach.call(document.querySelectorAll('.lists .item'), function (col) {
        col.addEventListener('dragstart', handleDragStart, false);
        col.addEventListener('dragenter', handleDragEnter, false);
        col.addEventListener('dragover', handleDragOver, false);
        col.addEventListener('dragleave', handleDragLeave, false);
        col.addEventListener('drop', handleDrop, false);
        col.addEventListener('dragend', handleDragEnd, false);
        col.addEventListener('click', handleSelect, false);
    });


    function removeItems(event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        }
        [].forEach.call(document.querySelectorAll('.selected'), function (element) {
            element.remove();
        })


    }


    [].forEach.call(document.querySelectorAll('[data-button="rmv"]'), function (element) {
        element.addEventListener('click', removeItems, false);
    });

};

(function (global) {
    var lists = new Lists();
    global.UniversalData.addPlugin(lists);
})(this);
