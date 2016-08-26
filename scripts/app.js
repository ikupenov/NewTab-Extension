/// <reference path="..\typings\index.d.ts" />

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'Septemper', 'October', 'November', 'December'];

let date = new Date();

let $timeWrapper = $('#time-wrapper');
let $currentTime = $('#current-time');
let $currentDate = $('#current-date');

(function initializeTime() {
    let hours = padIfNecessary(date.getHours().toString(), '0');
    let minutes = padIfNecessary(date.getMinutes().toString(), '0');

    $currentTime.html(`${hours}:${minutes}`);
    $currentDate.html(`${DAYS[date.getDay()]}, ${MONTHS[date.getMonth()]} ${date.getDate()}`);
} ());

function updateTime() {
    let date = new Date();

    let hours = padIfNecessary(date.getHours().toString(), '0');
    let minutes = padIfNecessary(date.getMinutes().toString(), '0');

    $currentTime.html(`${hours}:${minutes}`);
    $currentDate.html(`${DAYS[date.getDay()]}, ${MONTHS[date.getMonth()]} ${date.getDate()}`);
}

setInterval(updateTime, 1000);

function padIfNecessary(element, padSymb) {
    if (+element < 10) {
        return padSymb + element;
    } else {
        return element;
    }
}

let $closeBtns = $('.hide-container-btn');

$closeBtns.on('click', function () {
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
            changeBtnText();

            $itemContainer.css('display', 'none');
        });
    }
    else {
        $itemContainer.css('display', 'block');

        if ($itemContainer.hasClass('left-icon-container')) {
            $itemContainer.removeClass('fadeOutLeft');
            $itemContainer.addClass('fadeInLeft');
        } else if ($itemContainer.hasClass('right-icon-container')) {
            $itemContainer.removeClass('fadeOutRight');
            $itemContainer.addClass('fadeInRight');
        }

        $itemContainer.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            changeBtnText();
            
            $itemContainer.css('display', 'block');
        });
    }

    function changeBtnText() {
        if ($this.html() === '&lt;&lt;') {
            $this.html('&gt;&gt;');
        } else {
            $this.html('&lt;&lt;');
        }
    }
});