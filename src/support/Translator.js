class Translator {
  constructor(langs, locale) {
    this.langs = langs
    this.locale = locale
  }

  t(message) {
    return this.langs[this.locale][message]
  }
}

export default Translator
