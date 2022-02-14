import '../../_styles/components/tabs.styl'
import { defineComponent, ref, computed, onMounted, watchEffect, nextTick } from 'vue';
import type { PropType, ComponentPublicInstance } from 'vue'
import { addClass } from '~src/lib/_utils/dom';
// ComponentPublicInstance<HTMLInputElement>

const getRect = (el: HTMLElement | null, property: string)=>{
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

    const initNavBar = () => {
      const width = getRect(selectRef.value, 'width')
      const navLeft = getRect(navRef.value, 'left')
      const selectLeft = getRect(selectRef.value, 'left')
      const left = selectLeft - navLeft
      const bar = barRef.value
      if (bar) {
        bar.style.width = width + 'px'
        bar.style.left = left + 'px'
      }

      // 强制更新一次 DOM
      void bar?.offsetHeight
      nextTick(() => {
        bar && addClass(bar, 'tu-tabs__active-bar--transition')
      })
    }

    onMounted(() => {
      nextTick(() => {
        watchEffect(initNavBar)
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