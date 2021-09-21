import { defineComponent, ref, withDirectives, vShow } from 'vue'

export default defineComponent({
  setup() {
    const visible = ref(false)
    return { visible }
  },
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.visible = !this.visible
          }}
        >on/off</button>
        {
          withDirectives(
            <div>hi</div>,
            [
              [vShow, this.visible]
            ]
          )
        }
      </div>
    )
  }
})