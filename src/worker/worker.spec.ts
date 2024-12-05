import { expect, test } from 'vitest'
import { testDemo } from './load_wasm'

test('5 square should be 25', async () => {
    const result = await testDemo()
    expect(result).toEqual(25)
})