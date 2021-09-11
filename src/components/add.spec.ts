import { add } from './add'

describe('测试函数', () => {
  it('数字相加函数', () => {
    const result = add(2, 3)
    expect(result).toBe(5)
  })
})