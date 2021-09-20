import { mount } from '@vue/test-utils'
import Button from '../../src/lib/button/src/Button.vue'

describe('Button', () => {
  it('create', () => {
    const wrapper = mount(Button)
    expect(wrapper.exists()).toBe(true)
  })

  it('clickable', async () => {
    const onClick = jest.fn()
    const wrapper = mount(Button, {
      props: { onClick }
    })
    await wrapper.trigger('click')
    expect(onClick).toHaveBeenCalled()
  })

  it('type', () => {
    const wrapper = mount(Button, {
      props: { type: 'primary' },
    })
    expect(wrapper.classes()).toContain('tu-button--primary')
  })

  it('nativeType', () => {
    const wrapper = mount(Button, {
      props: { nativeType: 'submit' },
    })
    expect(wrapper.attributes('type')).toBe('submit')
  })
})

