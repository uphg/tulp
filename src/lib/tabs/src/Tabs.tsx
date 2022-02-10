import '../../_styles/components/tabs.styl'
import { defineComponent, computed, onMounted, useSlots } from 'vue';
import type { PropType } from 'vue'

export default defineComponent({
  props: {
    value: {
      type: [String, Number, Boolean] as PropType<string | number | boolean>
    }
  },
  emits: ['update:value'],
  setup(props, context) {
    const slots = useSlots()

    const content = computed(() => slots.default?.().find((item) => {
      return item.props?.name === props.value
    }))
    const titles = computed(() => slots.default?.().map((item) => {
      const { label, name } = item.props || {}
      return { label, name }
    }))

    const handleTabClick = (item: { label: string | number | boolean, name: string | number | boolean }) => {
      context.emit('update:value', item.name)
    }

    onMounted(() => {
      console.log('content')
      console.log(content.value)
    })

    return {
      content,
      titles,
      handleTabClick,
    }
  },
  render() {
    const { titles, handleTabClick, content, value } = this
    console.log('content')
    console.log(content)
    console.log('value')
    console.log(value)
    return (
      <div class="tu-tabs">
        <div class="tu-tabs-nav">
          {titles?.map((item) => (
            <div
              class={[
                'tu-tabs-tab',
                item.name === value && 'tu-tabs-tab--active'
              ]}
              onClick={() => handleTabClick(item)}
            >
              <span
                class="tu-tabs-tab__label"
              >{item.label}</span>
            </div>
          ))}
          {{/* <div class={'tu-tabs__active-bar'} style={{ width: , left:  }}></div> */}}
        </div>
        {content}
      </div>
    )
  }
})