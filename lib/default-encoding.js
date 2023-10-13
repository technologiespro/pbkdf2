var defaultEncoding = 'utf-8'
/* istanbul ignore next */
//console.log(global.process)
/*
if (global.process && global.process.browser) {
  defaultEncoding = 'utf-8'
} else if (global.process && global.process.version) {
  if (typeof global.process.version !== 'string') {
    defaultEncoding = 'utf-8'
  } else {
    var pVersionMajor = parseInt(global.process.version.split('.')[0].slice(1), 10)
    defaultEncoding = pVersionMajor >= 6 ? 'utf-8' : 'binary'
  }
} else {
  defaultEncoding = 'utf-8'
}
 */
module.exports = defaultEncoding
