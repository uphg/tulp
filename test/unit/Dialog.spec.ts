import { mount } from '@vue/test-utils'
import { Dialog } from '../../src/lib/index'

describe('Dialog', () => {
  it('create', () => {
    const wrapper = mount(Dialog)
    expect(wrapper.exists()).toBe(true)
  })
})