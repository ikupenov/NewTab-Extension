/// <reference path="..\typings\index.d.ts" />

let $addBtn = $('.add-btn');

$addBtn.on('mouseover', function() {
    let $this = $(this);

    $this.addClass('pulse');

    $this.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $this.removeClass('pulse');
        });
});