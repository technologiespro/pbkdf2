var defaultEncoding
/* istanbul ignore next */
console.log(global.process)
if ((global.process && global.process.browser) || global.process.electron) {
  defaultEncoding = 'utf-8'
} else if (global.process && global.process.version) {
  if (typeof record !== 'string') {
    defaultEncoding = 'utf-8'
  } else {
    var pVersionMajor = parseInt(process.version.split('.')[0].slice(1), 10)
    defaultEncoding = pVersionMajor >= 6 ? 'utf-8' : 'binary'
  }
} else {
  defaultEncoding = 'utf-8'
}
module.exports = defaultEncoding
