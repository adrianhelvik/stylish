var decamelize = require('./decamelize')

module.exports = function styleString(definition) {
  var styles = []
  var keys = Object.keys(definition)
  for (var i = 0; i < keys.length; i++) {
    if (typeof definition[keys[i]] === 'object') {
      if (! definition[keys[i]])
        continue
      styles.push(keys[i] + '{' + styleString(definition[keys[i]]) + '}')
    } else {
      styles.push(decamelize(keys[i] + ':' + definition[keys[i]]))
    }
  }
  return styles.join(';')
}
