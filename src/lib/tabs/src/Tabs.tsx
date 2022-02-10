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
    const { titles, handleTabClick, content } = this
    return (
      <div class="tu-tabs">
        <div class="tu-tabs-nav">
          {titles?.map((item) => (
            <button
              onClick={() => handleTabClick(item)}
            >{item.label}</button>
          ))}
          {<div class={'tu-tabs__active-bar'}></div>}
        </div>
        {content}
      </div>
    )
  }
})