(function($) {
	$.fn.scrolling = function(options) {
		options = $.extend({
			leftBtn: '.top-arrow',
			bottomBtn: '.bottom-arrow',
			playBtn: '.play',
			sleftBtn: '.sleft',
			step: 1,
			interval: 10
		}, options);

		return this.each(function() {
			var $this = $(this),
				leftBtn = $(options.leftBtn),
				bottomBtn = $(options.bottomBtn),
				playBtn = $(options.playBtn),
				sleftBtn = $(options.sleftBtn),
				ul = $this.children(),
				li = ul.children(),
				text = ul.html(),
				iid,
				start,
				width = 0,
				leftBottomDisabled = true;

			li.each(function(i) {
				width += li.eq(i).outerWidth(true);
			});

			ul.html(text + text + text).css('margin-left', -width);
ul.width(width*3);
			function move() {
				var left = parseInt(ul.css('margin-left'));
				left += step;
				if (left >= 0) {
					left = -width;
				} else if (left <= 2 * -width) {
					left = -width;
				}
				ul.css('margin-left', left);
			}

			function start() {
				iid = window.setInterval(move, options.interval);
			}

			function sleft() {
				window.clearInterval(iid);
			}

			leftBtn.hover(function() {
				step = options.step;
				start();
			}, sleft);

			bottomBtn.hover(function() {
				step = -options.step;
				start();
			}, sleft);
		});
	}
})(jQuery);

window.onload = function(){
	$('.slide-wrap').scrolling();
}