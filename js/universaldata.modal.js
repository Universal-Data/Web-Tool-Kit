'use strict';

function Modal(contentId) {
    this.name = 'modal';
    this.contentId = (contentId || 'content');
}

Modal.prototype.init = function () {
    var modal = false;
    var content = document.getElementById(this.contentId);
    var buttons = document.querySelectorAll('[data-modal]');

    [].forEach.call(buttons, function (button) {
      button.addEventListener('click', function(event) {
        content.classList.add('blur');
        var idModal = this.getAttribute('data-modal');

        if (modal == false) {

          modal = document.getElementById(idModal);
          console.log(modal);
        }

        if(modal.getAttribute('id') != idModal){
          modal = document.getElementById(idModal);
        }

        modal = document.getElementById(idModal);

        modal.classList.add('active');

      } , false);
    });


    [].forEach.call(document.getElementsByClassName('close'), function (button) {
      button.addEventListener('click', function(event) {
        content.classList.remove('blur');
        modal.classList.remove('active')
      }, false)
    });

    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            content.classList.remove('blur');
            modal.classList.remove('active');
        }
    }, false);

};

(function (global) {
    var modal = new Modal();
    global.UniversalData.addPlugin(modal);
})(this);
