(function($) {

    $.fn.togglebutton = function(opts) {

        var settings = $.extend( {}, $.fn.togglebutton.defaults, opts);

        var self = this;
        var options = self.find('option');
        var buttons = options.map(function(index, opt) {
            var button = $("<button type='button' class='btn btn-default'></button>")
              .prop('value', opt.value)
              .text(opt.text);

            return button[0];
        });

        buttons.each(function(index, btn) {
            $(btn).click(function() {
                $(btn).addClass("active");
                $(btn).siblings(".active").removeClass("active");
                self.val(btn.value);
            });
        });

        var btnGroup = $("<div class='btn-group'>").append(buttons);
        self.after(btnGroup);
        self.hide();
    };

    $.fn.togglebutton.defaults = {

    };
}(jQuery));
