(function($) {
    // Define the togglebutton plugin.
    $.fn.togglebutton = function(opts) {
        // Apply the users options if exists.
        var settings = $.extend( {}, $.fn.togglebutton.defaults, opts);

        // For each select element.
        this.each(function() {
            var self = $(this);
            // Retrieve all options.
            var options = self.children('option');
            // Create buttons with the value of select options.
            var buttons = options.map(function(index, opt) {
                var button = $("<button type='button' class='btn btn-default'></button>")
                  .prop('value', opt.value)
                  .text(opt.text);

                return button[0];
            });

            // For each button, implement the click button removing and adding
            // `active` class to simulate the toggle effect. And also change the
            // select selected option.
            buttons.each(function(index, btn) {
                $(btn).click(function() {
                    $(btn).addClass("active");
                    $(btn).siblings(".active").removeClass("active");
                    self.val(btn.value);
                });
            });

            // Group all the buttons in a `div` element.
            var btnGroup = $("<div class='btn-group'>").append(buttons);
            // Include the buttons group after the select element.
            self.after(btnGroup);
            // Hide the display element.
            self.hide();
        });
    };

    // Set the defaults options of the plugin.
    $.fn.togglebutton.defaults = {

    };

}(jQuery));
