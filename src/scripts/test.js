const { locales } = require("./translate");
const locale = locales.map((lc) => lc.trim());

const template = (url, lang) =>
  `<xhtml:link rel="alternate" hreflang="${lang}" href="${url}?hl=${lang}"/>`;

let innerContent = [];

innerContent = locale.map((lc) =>
  template("https://imagetext.xyz/request-demo", lc)
);

console.log(innerContent.join("\n"));
