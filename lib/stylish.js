var createStyleString = require('./createStyleString')
var React = require('react')
var styleElement

stylish.generateClassName = (prefix) =>
  (prefix ? prefix + '-' : 'stylish-') + Math.random().toString(36).slice(4)

function stylish(tagName, style) {
  if (! styleElement) {
    styleElement = document.createElement('style')
    document.head.appendChild(styleElement)
  }
  var className = stylish.generateClassName(tagName)
  styleElement.innerHTML += '.' + className + '{' + createStyleString(style) + '}'

  return function (props) {
    var newProps = {
      className: className
    }
    if (props) {
      for (var i = 0, keys = Object.keys(props); i < keys.length; i++) {
        if (keys[i] === 'className') {
          newProps.className += ' ' + props.className
        } else {
          newProps[keys[i]] = props[keys[i]]
        }
      }
    }
    return React.createElement(tagName, newProps)
  }
}

module.exports = stylish
