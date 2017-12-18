module.exports = function decamelize(string) {
  var result = []
  for (var i = 0, length = string.length; i < length; i++) {
    if (string[i].toLowerCase() !== string[i]) {
      result.push('-')
      result.push(string[i].toLowerCase())
    } else {
      result.push(string[i])
    }
  }
  return result.join('')
}
