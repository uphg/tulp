import { mount } from '@vue/test-utils'
import { Button } from '../../src/lib/index'

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

  it('size', () => {
    const wrapper = mount(Button, {
      props: { size: 'large' }
    })
    expect(wrapper.classes()).toContain('tu-button--large')
  })

  it('icon', () => {
    const wrapper = mount(Button, {
      props: { icon: 'close' }
    })
    expect(wrapper.find('.tu-icon-close').exists()).toBeTruthy()
  })

  it('nativeType', () => {
    const wrapper = mount(Button, {
      props: { nativeType: 'submit' },
    })
    expect(wrapper.attributes('type')).toBe('submit')
  })

  it('loading', () => {
    const wrapper = mount(Button, {
      props: { loading: true }
    })
    expect(wrapper.find('.tu-button__loading-icon').exists()).toBeTruthy()
  })

  it('disabled', async () => {
    const wrapper = mount(Button, {
      props: { disabled: true }
    })
    /* 测试 disabled 样式，暂时省略 */
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeUndefined()
  })
})

