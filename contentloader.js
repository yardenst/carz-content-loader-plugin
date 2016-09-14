/**
 * Created by yardenst on 14/09/16.
 */
(function ($) {

    $.fn.carzcontent = function (options) {

        var obj = this;

        // This is the easiest way to have default options.
        var settings = $.extend({
            // These are the defaults.
            generation_id: "",
            style_sheet_url: "",
            content_url: "",
            object_name_tag: "h1"
        }, options);

        //prepare the url of the iframe
        var url = settings['content_url'];
        if (settings['style_sheet_url']) {
            url = url + "?stylesheeturl=" + settings['style_sheet_url']
        }

        //create the iframe and place it on the page
        var iframe = $("<iframe></iframe>");
        iframe.attr("src", url);
        iframe.css('width', '100%');
        iframe.css('border-width', '0');
        iframe.on('load', function () {
            console.log('content loaded from carz.co.il: ' + url);
            obj.trigger('load');
        });
        this.append(iframe);

        //create a readmore on carz website
        var readMoreDiv = $("<div></div>");
        var obj_name = $(settings['object_name_tag']).text();
        var obj_url = "http://www.carz.co.il/gen/" + settings['generation_id'] + "/overview/";

        readMoreDiv.html("<a href='" + obj_url + "'>" + obj_name + "</a> באדיבות אתר חוות דעת הרכב carz.co.il");

        this.append(readMoreDiv);

    };

}(jQuery));