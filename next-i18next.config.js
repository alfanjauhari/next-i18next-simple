const HttpBackend = require('i18next-http-backend/cjs')
const ChainedBackend= require('i18next-chained-backend').default
const LocalStorageBackend = require('i18next-localstorage-backend').default

const isBrowser = typeof window !== 'undefined'

module.exports = {
  backend: {
    backendOptions: [{ expirationTime: 60 * 60 * 1000 }, {}],
    backends: isBrowser ? [LocalStorageBackend, HttpBackend]: [],
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'id'],
  },
  serializeConfig: false,
  use: isBrowser ? [ChainedBackend] : [],
}