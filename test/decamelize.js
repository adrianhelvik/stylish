var decamelize = require('../lib/decamelize')
var assert = require('assert')

describe('decamelize', () => {
  it('decamelizes a string', () => {
    assert.equal(decamelize('fooBar'), 'foo-bar')
  })
})
