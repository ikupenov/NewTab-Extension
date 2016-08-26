'use strict';

/// <reference path="..\typings\index.d.ts" />

var editMode = function () {
    var $items = $('.add-btn');

    var isInEditMode = false;

    function toggleEditMode() {
        if (isInEditMode) {
            $items.each(function (i, el) {
                var $el = $(el);
                $el.parents('td').css('border', 'none');

                if ($el.html() === '+') {
                    $el.css('display', 'none');
                } else {
                    // TODO: Hide del btn
                }
            });

            isInEditMode = false;
        } else {
            $items.each(function (i, el) {
                var $el = $(el);
                $el.css('display', 'block');
                $el.parents('td').css('border', '1px solid black');

                if (!$el.html().length) {
                    $el.html('+');
                } else {
                    // TODO: Add del btn
                }
            });

            isInEditMode = true;
        }
    }

    $(window).on('keydown', function (ev) {
        // Shift + 'E'
        if (ev.shiftKey && ev.which === 69) {
            toggleEditMode();
        }
    });

    return {
        toggle: toggleEditMode
    };
}();