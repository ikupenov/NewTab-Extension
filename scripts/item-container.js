/// <reference path="..\typings\index.d.ts" />

let containers = (function () {
    let $toggleContainerBtn = $('.hide-container-btn');

    $toggleContainerBtn.on('click', function () {
        let $this = $(this);
        let $itemContainer = $this.next();

        if ($itemContainer.css('display') === 'block') {
            if ($itemContainer.hasClass('left-icon-container')) {
                $itemContainer.removeClass('fadeInLeft');
                $itemContainer.addClass('fadeOutLeft');
            } else if ($itemContainer.hasClass('right-icon-container')) {
                $itemContainer.removeClass('fadeInRight');
                $itemContainer.addClass('fadeOutRight');
            }

            $itemContainer.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                changeBtnText($this);

                $itemContainer.css('display', 'none');
            });
        } else {
            $itemContainer.css('display', 'block');

            if ($itemContainer.hasClass('left-icon-container')) {
                $itemContainer.removeClass('fadeOutLeft');
                $itemContainer.addClass('fadeInLeft');
            } else if ($itemContainer.hasClass('right-icon-container')) {
                $itemContainer.removeClass('fadeOutRight');
                $itemContainer.addClass('fadeInRight');
            }

            $itemContainer.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                changeBtnText($this);

                $itemContainer.css('display', 'block');
            });
        }
    });

    function changeBtnText(element) {
        if (element.html() === '&lt;&lt;') {
            element.html('&gt;&gt;');
        } else {
            element.html('&lt;&lt;');
        }
    }
} ()); 