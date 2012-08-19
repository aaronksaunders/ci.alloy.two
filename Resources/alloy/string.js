exports.trim = function(line) {
    return String(line).replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}, exports.trimZeros = function(num) {
    var str = new String(num || "0");
    return str.indexOf(".") == -1 ? str : str.replace(/\.?0*$/, "");
}, exports.ucfirst = function(text) {
    return text ? text[0].toUpperCase() + text.substr(1) : text;
}, exports.lcfirst = function(text) {
    return text ? text[0].toLowerCase() + text.substr(1) : text;
}, exports.formatCurrency = String.formatCurrency;