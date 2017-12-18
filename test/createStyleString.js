var createStyleString = require('../lib/createStyleString')
var assert = require('assert')

describe('createStyleString', () => {
  it('handles objects', () => {
    var actual = createStyleString({
      backgroundColor: 'black',
      color: 'white',
    })
    var expected = 'background-color:black;color:white'
    assert.equal(actual, expected)
  })
  it('handles nested objects', () => {
    var actual = createStyleString({
      '@media(max-width: 200px)': {
        backgroundColor: 'black',
        color: 'white',
      }
    })
    var expected = '@media(max-width: 200px){background-color:black;color:white}'
    assert.equal(actual, expected)
  })
})
