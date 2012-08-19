function Controller() {
    require("alloy/controllers/BaseController").call(this);
    var $ = this, exports = {};
    _.extend($, $.__views), _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A;

module.exports = Controller;