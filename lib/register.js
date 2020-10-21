const Locales = new Map();

const register = (locale, obj) => {
	Locales.set(locale, obj);
};

const getLocale = (locale = "en_US") => {
	return Locales.get(locale) || Locales.get("en_US");
};

module.exports = {
	register,
	getLocale,
};
