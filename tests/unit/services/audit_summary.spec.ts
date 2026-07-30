import { test } from '@japa/runner'
import { applyDiscount } from '#services/audit_summary'
import { normalizeName, wordCount } from '#services/user_presenter'

test.group('audit_summary', () => {
  test('builds a normalized audit summary', ({ assert }) => {
    assert.equal(applyDiscount(100), 90)
    assert.equal(normalizeName('  Ada   Lovelace  '), 'Ada Lovelace')
    assert.equal(wordCount('Ada Lovelace'), 2)
  })
})
