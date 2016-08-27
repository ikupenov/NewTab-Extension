/// <reference path="..\typings\index.d.ts" />

let editMode = (function () {
    let $items = $('.add-btn');
    let $itemsData = $items.parents('td');

    let $addNewBtn = $('a.add-btn');
    let $allInputs = $('input.input');
    let $webSiteNameInput = $('input.website-name');
    let $webSiteUrl = $('input.website-url');

    let isInEditMode = false;

    function toggleEditMode() {
        if (isInEditMode) {
            $items.each(function (i, el) {
                let $el = $(el);

                if ($el.html() === '+') {
                    $el.css('display', 'none');
                } else {
                    // TODO: Hide del btn
                }
            });

            $allInputs.each((i, el) => $(el).addClass('hide'));

            $itemsData.css('border', 'none');
        } else {
            $items.each(function (i, el) {
                let $el = $(el);

                if (!$el.html().length) {
                    $el.html('+');
                } else {
                    // TODO: Add del btn
                }
            });

            $items.css('display', 'block');
            $itemsData.css('border', '1px solid black');
        }
    }

    $(window).on('keydown', function (ev) {
        // Shift + 'E'
        if (ev.shiftKey && ev.which === 69) {
            toggleEditMode();
            if (isInEditMode) {
                isInEditMode = false;
            } else {
                isInEditMode = true;
            }
        }
    });

    $addNewBtn.on('click', function () {
        $addNewBtn.each(function(__, el) {
            let $el = $(el);
            if ($el.hasClass('hide')) {
                $el.siblings('input.input').addClass('hide');
                $el.show();
            }
        });

        let $this = $(this);

        $this.hide();
        $this.addClass('hide');

        $this.siblings('input.input').removeClass('hide');
    });

    return {
        toggle: toggleEditMode
    };
} ());