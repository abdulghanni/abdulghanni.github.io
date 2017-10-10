(function($) {
"use strict";

    //On Window load & Resize
    $(window)
        .on('load', function() { //Load
            $('body').append('<a id="lm_demo_panel_switcher" class="lm-demo-panel-switcher right"><i class="fa fa-gear"></i></a><div id="lm_demo_panel" class="lm-demo-panel right panel-color-red active"><div class="demo-panel-title">Main Color</div><div id="main_color" class="demo-panel-options"><a data-id="red" class="current-main-color"><div class="preview color-1">&nbsp;</div></a><a data-id="blue"><div class="preview color-2">&nbsp;</div></a><a data-id="green"><div class="preview color-3">&nbsp;</div></a><a data-id="orange"><div class="preview color-4">&nbsp;</div></a><a data-id="yellow"><div class="preview color-5">&nbsp;</div></a><a data-id="violet"><div class="preview color-6">&nbsp;</div></a><a data-id="blue-2"><div class="preview color-7">&nbsp;</div></a><a data-id="green-2"><div class="preview color-8">&nbsp;</div></a></div><div class="demo-panel-title">Nav Color</div><div id="header_color" class="demo-panel-options"><a class="inverse h-color-switcher" data-id="header-color-light"><div class="preview h-color h-color-1 w-border">&nbsp;</div></a><a class="h-color-switcher" data-id="header-color-main"><div class="preview h-color h-color-2">&nbsp;</div></a><a class="current-h-color h-color-switcher" data-id="header-color-dark"><div class="preview h-color h-color-3">&nbsp;</div></a></div><div class="demo-panel-title mobile-hidden">Nav Position</div><div id="header_position" class="demo-panel-options mobile-hidden"><a class="current-layout layout-switcher" data-id="layout-menu-left"><div class="preview layout left">Left</div></a><a class="layout-switcher" data-id="layout-menu-top"><div class="preview layout top">Top</div></a><a class="layout-switcher" data-id="layout-menu-bottom"><div class="preview layout bottom">Bottom</div></a></div></div>');

        var demoPanel = $("#lm_demo_panel"),
        head = $('head'),
        demoPanelSwitcher = $("#lm_demo_panel_switcher");

        head.append('<link rel="stylesheet" href="http://lmpixels.com/wp/uniquedark/wp-content/plugins/lmpixels-wp-demo/css/main-red.css" type="text/css" data-id="custom">');

        $(this).on("click", function() {
            $("#lm_demo_panel.active").removeClass("active");
        });

        demoPanelSwitcher.on("click", function (event) {
            event.stopPropagation();
            demoPanel.toggleClass("active");
        });

        demoPanel.on("click", function (event) {
            event.stopPropagation();
        });

        // Main color
        $('#main_color').on("click", "a", function() {
            var selector = $(this).data("id");
            $('.main-color-switcher').removeClass("current-main-color");

            $('#main_color a').removeClass('current-main-color');
            $(this).addClass('current-main-color');
            $('link[data-id="custom"]').remove();
            head.append('<link rel="stylesheet" href="http://lmpixels.com/wp/uniquedark/wp-content/plugins/lmpixels-wp-demo/css/main-'+selector+'.css" type="text/css" data-id="custom">');

            demoPanel.removeClass (function (index, className) {
                return (className.match (/(^|\s)panel-color\S+/g) || []).join(' ');
            });
            demoPanel.addClass("panel-color-"+selector);
        });
        // /Main color

        // Header position
        $('#header_position').on("click", "a", function() {
            var page = $('#page'),
                selector = $(this).data("id");
            $('.layout-switcher').removeClass("current-layout");
            page.removeClass (function (index, className) {
                return (className.match (/(^|\s)layout-menu\S+/g) || []).join(' ');
            });
            $(this).addClass('current-layout');
            page.addClass(selector);
        });
        // Header position

        // Header color
        $('#header_color').on("click", "a", function() {
            var header = $('#site_header'),
                selector = $(this).data("id");
            $('.h-color-switcher').removeClass("current-h-color");
            header.removeClass (function (index, className) {
                return (className.match (/(^|\s)header-color\S+/g) || []).join(' ');
            });
            $('#header_color a').removeClass('current-h-color');
            $(this).addClass('current-h-color');
            header.addClass(selector);
        });
        // /Header color



    });

})(jQuery);
