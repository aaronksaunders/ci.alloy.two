function Controller() {
    function openNextWindow(e) {
        Ti.API.info(" text " + JSON.stringify(e.source));
        var tableController = Alloy.getController("table");
        tableController.index($.tab1);
    }
    require("alloy/controllers/BaseController").call(this);
    var $ = this, exports = {};
    $.__views.index = A$(Ti.UI.createTabGroup({}), "TabGroup", null), $.__views.win1 = A$(Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Window 1",
        tabBarHidden: !0,
        layout: "vertical"
    }), "Window", null), $.__views.__alloyId1 = A$(Ti.UI.createLabel({
        text: "Label 1"
    }), "Label", $.__views.win1), $.__views.win1.add($.__views.__alloyId1), $.__views.__alloyId2 = A$(Ti.UI.createLabel({
        text: "Label 2"
    }), "Label", $.__views.win1), $.__views.win1.add($.__views.__alloyId2), $.__views.__alloyId3 = A$(Ti.UI.createLabel({
        text: "Label 3"
    }), "Label", $.__views.win1), $.__views.win1.add($.__views.__alloyId3), $.__views.__alloyId4 = A$(Ti.UI.createLabel({
        text: "Label 4"
    }), "Label", $.__views.win1), $.__views.win1.add($.__views.__alloyId4), $.__views.nextWindowBtn = A$(Ti.UI.createButton({
        title: "Open Next Window"
    }), "Button", $.__views.win1), $.__views.win1.add($.__views.nextWindowBtn), $.__views.nextWindowBtn.on("click", openNextWindow), $.__views.tab1 = A$(Ti.UI.createTab({
        title: "Tab 1",
        window: $.__views.win1
    }), "Tab", null), $.__views.index.addTab($.__views.tab1), $.__views.__alloyId6 = A$(Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Window Title",
        tabBarHidden: !0
    }), "Window", null), $.__views.__alloyId5 = A$(Ti.UI.createLabel({
        text: "Tab 2"
    }), "Label", $.__views.__alloyId6), $.__views.__alloyId6.add($.__views.__alloyId5), $.__views.tab2 = A$(Ti.UI.createTab({
        title: "Tab 2",
        window: $.__views.__alloyId6
    }), "Tab", null), $.__views.index.addTab($.__views.tab2), $.addTopLevelView($.__views.index), _.extend($, $.__views), $.index.open(), _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A;

module.exports = Controller;