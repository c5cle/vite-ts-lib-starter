import { expect, it } from 'vitest'
import { sum } from '../src/index'

it('check that test.sum works', () => {
  expect(sum(1, 2)).toBe(3)
})
