/**
 * Detect browser language id
 * */
const getBrowserLangId = () => {
    let language;
    if (window.navigator.languages) {
        language = window.navigator.languages[0];
    } else {
        language = window.navigator.userLanguage || window.navigator.language;
    }
    return language;
};
/**
 * Get browser Locale
 * */
const getBrowserLocale = () => {
    const langId = getBrowserLangId();
    const locale = langId.split("-");
    return locale[0];
};

export {
    getBrowserLocale
}