'use strict';

/// <reference path="..\typings\index.d.ts" />

var time = function time() {
    var DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'Septemper', 'October', 'November', 'December'];

    var date = new Date();

    var $timeWrapper = $('#time-wrapper');
    var $currentTime = $('#current-time');
    var $currentDate = $('#current-date');

    (function initializeTime() {
        var hours = padIfNecessary(date.getHours().toString(), '0');
        var minutes = padIfNecessary(date.getMinutes().toString(), '0');

        $currentTime.html(hours + ':' + minutes);
        $currentDate.html(DAYS[date.getDay()] + ', ' + MONTHS[date.getMonth()] + ' ' + date.getDate());
    })();

    function updateTime() {
        var date = new Date();

        var hours = padIfNecessary(date.getHours().toString(), '0');
        var minutes = padIfNecessary(date.getMinutes().toString(), '0');

        $currentTime.html(hours + ':' + minutes);
        $currentDate.html(DAYS[date.getDay()] + ', ' + MONTHS[date.getMonth()] + ' ' + date.getDate());
    }

    setInterval(updateTime, 1000);

    function padIfNecessary(element, padSymb) {
        if (+element < 10) {
            return padSymb + element;
        } else {
            return element;
        }
    }
}();