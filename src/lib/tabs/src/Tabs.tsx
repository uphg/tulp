import '../../_styles/components/tabs.styl'
import { defineComponent, ref, computed, onMounted, watchEffect, nextTick } from 'vue';
import type { PropType, ComponentPublicInstance } from 'vue'
// ComponentPublicInstance<HTMLInputElement>

const getRect = (el: HTMLElement | null, property: string)=>{
  console.log('el')
  console.log(el)
  return el?.getBoundingClientRect()[property as keyof DOMRect] as number
}

export default defineComponent({
  props: {
    value: {
      type: [String, Number, Boolean] as PropType<string | number | boolean>
    }
  },
  emits: ['update:value'],
  setup(props, context) {
    const slots = context.slots
    const navRef = ref<HTMLElement | null>(null)
    const barRef = ref<HTMLElement | null>(null)
    const selectRef = ref<HTMLElement | null>(null)

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
      nextTick(() => {
        watchEffect(() => {
          const width = getRect(selectRef.value, 'width')
          const navLeft = getRect(navRef.value, 'left')
          const selectLeft = getRect(selectRef.value, 'left')
          const left = selectLeft - navLeft
          if (barRef.value) {
            barRef.value.style.width = width + 'px'
            barRef.value.style.left = left + 'px'
          }
        })
      })
      
    })

    return () => (
      <div class="tu-tabs">
        <div ref={navRef} class="tu-tabs-nav">
          {titles.value?.map((item) => (
            <div
              ref={(el) => {
                if (item.name === props.value) {
                  selectRef.value = el as HTMLElement
                }
              }}
              class={[
                'tu-tabs-tab',
                item.name === props.value && 'tu-tabs-tab--active'
              ]}
              onClick={() => handleTabClick(item)}
            >
              <span
                class="tu-tabs-tab__label"
              >{item.label}</span>
            </div>
          ))}
          <div ref={barRef} class={'tu-tabs__active-bar'}></div>
        </div>
        {content.value}
      </div>
    )
  }
})