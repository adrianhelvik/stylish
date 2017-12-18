var stylish
var assert = require('assert')

describe('stylish', () => {
  beforeEach(() => {
    delete require.cache[require.resolve('../lib/stylish')]
    stylish = require('../lib/stylish')

    global.document = {
      createElement(tagName) {
        return {
          _isElement: true,
          tagName: tagName,
          innerHTML: '',
        }
      },
      head: {
        _appended: [],
        appendChild(child) {
          this._appended.push(child)
        }
      },
      body: {
        _appended: [],
        appendChild(child) {
          this._appended.push(child)
        }
      }
    }
  })

  it('appends a new style element', () => {
    stylish('div', {
      backgroundColor: 'green'
    })

    assert.equal(global.document.head._appended.length, 1)
  })

  it('doesn\'t reappend the style element', () => {
    stylish('div', {
      backgroundColor: 'green'
    })
    stylish('div', {
      backgroundColor: 'green'
    })

    assert.equal(global.document.head._appended.length, 1)
  })

  it('inserts the style into the element', () => {
    stylish.generateClassName = (prefix) => prefix + '-my-class'

    stylish('div', {
      backgroundColor: 'green'
    })

    assert.equal(global.document.head._appended[0].innerHTML, '.div-my-class{background-color:green}')
  })

  it('returns a new React element with the correct class name', () => {
    stylish.generateClassName = () => 'the-class'
    var component = stylish('div', {
      backgroundColor: 'green'
    })
    var element = component()

    assert.equal(element.$$typeof, Symbol.for('react.element'))
    assert.equal(element.props.className, 'the-class')
  })

  it('creates a random className by default', () => {
    assert.equal(typeof stylish.generateClassName(), 'string')
    var classA = stylish.generateClassName()
    var classB = stylish.generateClassName()
    assert(classA !== classB)
  })
})
