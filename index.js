const en_US = require("./lang/en_US");
const zh_CN = require("./lang/zh_CN");

const { register } = require("./lib/register");
const format = require("./lib/index");

register("en_US", en_US);
register("zh_CN", zh_CN);

module.exports = {
	format,
	register,
};
