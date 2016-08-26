/// <reference path="..\typings\index.d.ts" />

let time = (function time() {
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
} ());