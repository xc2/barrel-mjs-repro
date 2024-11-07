import {test, expect} from 'bun:test'

const exp = {foo: 'bar'}

test('barrel exports', async () => {
  const barrel = import('./dist/barrel.js')
  expect([exp, {default:exp}]).toContainEqual(await barrel)
})

test('named re-exports', async () => {
  const named = import('./dist/named-re-exports.js')
  expect([exp, {default:exp}]).toContainEqual(await named)
})