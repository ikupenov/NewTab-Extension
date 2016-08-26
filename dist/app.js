'use strict';

/// <reference path="..\typings\index.d.ts" />

var $addBtn = $('.add-btn');

$addBtn.on('mouseover', function () {
    var $this = $(this);

    $this.addClass('pulse');

    $this.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        $this.removeClass('pulse');
    });
});