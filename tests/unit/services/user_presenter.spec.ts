import { test } from '@japa/runner'
import { displayName, initials } from '#services/user_presenter'

test.group('user_presenter', () => {
  test('owns the primary presentation behavior', ({ assert }) => {
    assert.equal(displayName({ firstName: 'Ada', lastName: 'Lovelace' }), 'Ada Lovelace')
    assert.equal(initials({ firstName: 'Ada', lastName: 'Lovelace' }), 'AL')
  })
})
