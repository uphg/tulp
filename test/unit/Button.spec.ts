import { mount } from '@vue/test-utils'
import Button from '../../src/lib/Button.vue'

describe('Button', () => {
  it('Button 组件存在', () => {
    const wrapper = mount(Button)
    expect(wrapper.exists()).toBe(true)
  })
})