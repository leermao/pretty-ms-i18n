const { format } = require("./index");

console.log(format(0, { locale: "zh_CN" }), "0ms");
console.log(format(0.1, { locale: "zh_CN" }), "1ms");
console.log(format(1, { locale: "zh_CN" }), "1ms");
console.log(format(999, { locale: "zh_CN" }), "999ms");
console.log(format(1000, { locale: "zh_CN" }), "1s");
console.log(format(1000 + 400, { locale: "zh_CN" }), "1.4s");
console.log(format(1000 * 2 + 400, { locale: "zh_CN" }), "2.4s");
console.log(format(1000 * 55, { locale: "zh_CN" }), "55s");
console.log(format(1000 * 67, { locale: "zh_CN" }), "1m 7s");
console.log(format(1000 * 60 * 5, { locale: "zh_CN" }), "5m");
console.log(format(1000 * 60 * 67, { locale: "zh_CN" }), "1h 7m");
console.log(format(1000 * 60 * 60 * 12, { locale: "zh_CN" }), "12h");
console.log(format(1000 * 60 * 60 * 40, { locale: "zh_CN" }), "1d 16h");
console.log(format(1000 * 60 * 60 * 999, { locale: "zh_CN" }), "41d 15h");
console.log(format(1000 * 60 * 60 * 24 * 465, { locale: "zh_CN" }), "1y 100d");
console.log(
	format(1000 * 60 * 67 * 24 * 465, { locale: "zh_CN" }),
	"1y 154d 6h"
);
console.log(format(119999, { locale: "zh_CN" }), "1m 59.9s");
console.log(format(120000, { locale: "zh_CN" }), "2m");

console.log("====options compact");
console.log(format(1000 + 4, { compact: true }), "1s");
console.log(format(1000 * 60 * 60 * 999, { compact: true }), "41d");
console.log(format(1000 * 60 * 60 * 24 * 465, { compact: true }), "1y");
console.log(format(1000 * 60 * 67 * 24 * 465, { compact: true }), "1y");

console.log("====options unitCount");
console.log(format(1000 * 60, { unitCount: 0 }), "1m");
console.log(format(1000 * 60, { unitCount: 1 }), "1m");
console.log(format(1000 * 60 * 67, { unitCount: 1 }), "1h");
console.log(format(1000 * 60 * 67, { unitCount: 2 }), "1h 7m");
console.log(format(1000 * 60 * 67 * 24 * 465, { unitCount: 1 }), "1y");
console.log(format(1000 * 60 * 67 * 24 * 465, { unitCount: 2 }), "1y 154d");
console.log(format(1000 * 60 * 67 * 24 * 465, { unitCount: 3 }), "1y 154d 6h");
