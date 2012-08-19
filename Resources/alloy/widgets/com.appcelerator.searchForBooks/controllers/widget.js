function Controller() {
    function processBookData(data) {
        var books = [];
        try {
            var items = JSON.parse(data).items;
        } catch (e) {
            alert("Invalid response from server. Try again.");
            return;
        }
        for (var i = 0; i < Math.min(items.length, MAX_BOOKS); i++) {
            var info = items[i].volumeInfo;
            if (!info) continue;
            var links = info.imageLinks || {}, authors = (info.authors || []).join(", ");
            books.push({
                title: info.title || "",
                authors: authors,
                image: links.smallThumbnail || links.thumbnail || "none"
            });
        }
        handlers.success(books);
    }
    function searchForBooks(e) {
        $.text.blur();
        var value = encodeURIComponent($.text.value);
        if (!value) {
            alert("You need to enter search text");
            return;
        }
        model.set("loading", !0);
        var xhr = Ti.Network.createHTTPClient({
            onload: function(e) {
                handlers.success && processBookData(this.responseText), model.set("loading", !1);
            },
            onerror: function(e) {
                handlers.error ? handlers.error(e) : (alert("There was an error processing your search. Make sure you have a network connection and try again."), Ti.API.error("[ERROR] " + (e.error || JSON.stringify(e)))), model.set("loading", !1);
            },
            timeout: 5e3
        });
        xhr.open("GET", API_URL + value), xhr.send();
    }
    require("alloy/controllers/BaseController").call(this);
    var $ = this, exports = {};
    exports.setHandlers = function(args) {
        _.each(HANDLERS, function(h) {
            args[h] && (handlers[h] = args[h]);
        });
    }, $.__views.bar = A$(Ti.UI.createView({
        top: 0,
        height: "50dp",
        width: Ti.UI.FILL,
        backgroundGradient: {
            type: "linear",
            startPoint: {
                x: "0%",
                y: "0%"
            },
            endPoint: {
                x: "0%",
                y: "100%"
            },
            colors: [ {
                color: "#a00",
                offset: 0
            }, {
                color: "#800",
                offset: 1
            } ]
        }
    }), "View", null), $.addTopLevelView($.__views.bar), $.__views.text = A$(Ti.UI.createTextField({
        top: "6dp",
        bottom: "6dp",
        left: "7dp",
        right: "60dp",
        color: "#111",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        hintText: "search for books"
    }), "TextField", $.__views.bar), $.__views.bar.add($.__views.text), $.__views.text.on("return", searchForBooks), $.__views.__alloyId0 = A$(Ti.UI.createView({
        height: "48dp",
        width: "3dp",
        top: "1dp",
        right: "50dp",
        backgroundGradient: {
            type: "linear",
            startPoint: {
                x: "0%",
                y: "0%"
            },
            endPoint: {
                x: "100%",
                y: "0%"
            },
            colors: [ {
                color: "#666",
                offset: 0
            }, {
                color: "#ccc",
                offset: .5
            }, {
                color: "#666",
                offset: 1
            } ]
        }
    }), "View", $.__views.bar), $.__views.bar.add($.__views.__alloyId0), $.__views.searchView = A$(Ti.UI.createView({
        top: 0,
        bottom: 0,
        right: 0,
        width: "50dp"
    }), "View", $.__views.bar), $.__views.bar.add($.__views.searchView), $.__views.searchView.on("click", searchForBooks), $.__views.search = A$(Ti.UI.createImageView({
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        color: "#fff",
        backgroundColor: "transparent",
        image: "/com.testing.searchForBooks/ic_search.png",
        touchEnabled: !1
    }), "ImageView", $.__views.searchView), $.__views.searchView.add($.__views.search), $.__views.loading = Alloy.getWidget("com.appcelerator.loading", "widget", {
        opacity: 0,
        right: "8dp",
        top: "8dp",
        height: "34dp",
        width: "34dp",
        touchEnabled: !1
    }), $.__views.loading.setParent($.__views.searchView), _.extend($, $.__views);
    var API_URL = "https://www.googleapis.com/books/v1/volumes?q=", HANDLERS = [ "success", "error" ], MAX_BOOKS = 10, AppModel = require("alloy/backbone").Model.extend({
        loading: !1
    }), model = new AppModel, handlers = {};
    model.on("change:loading", function(m) {
        m.get("loading") ? ($.searchView.touchEnabled = !1, $.search.opacity = 0, $.loading.setOpacity(1)) : ($.loading.setOpacity(0), $.search.opacity = 1, $.searchView.touchEnabled = !0);
    }), _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A;

module.exports = Controller;