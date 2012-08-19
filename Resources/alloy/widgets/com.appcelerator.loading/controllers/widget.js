function Controller() {
    require("alloy/controllers/BaseController").call(this);
    var $ = this, exports = {};
    exports.setOpacity = function(opacity) {
        $.loading.opacity = opacity;
    }, $.__views.loading = A$(Ti.UI.createImageView({
        height: 20,
        width: 20,
        images: [ "/images/com.appcelerator.loading/00.png", "/images/com.appcelerator.loading/01.png", "/images/com.appcelerator.loading/02.png", "/images/com.appcelerator.loading/03.png", "/images/com.appcelerator.loading/04.png", "/images/com.appcelerator.loading/05.png", "/images/com.appcelerator.loading/06.png", "/images/com.appcelerator.loading/07.png", "/images/com.appcelerator.loading/08.png", "/images/com.appcelerator.loading/09.png", "/images/com.appcelerator.loading/10.png", "/images/com.appcelerator.loading/11.png" ]
    }), "ImageView", null), $.addTopLevelView($.__views.loading), _.extend($, $.__views);
    var args = arguments[0] || {};
    for (var k in args) $.loading[k] = args[k];
    Ti.Platform.osname === "mobileweb" && ($.loading.duration = 100), $.loading.start(), _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A;

module.exports = Controller;