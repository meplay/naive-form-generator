import { defineComponent } from 'vue'
import { NFormItemGi, NGrid } from 'naive-ui'
import { render } from '@/utils/render'

export default defineComponent({
  name: 'DraggableItem',

  props: {
    element: {
      type: Object,
      required: true,
    },
  },

  setup(props) {
    window.console.log(props.element)
  },

  render() {
    const element = toRaw(this.element)

    return (
      <NGrid className="draggable-item">
        <NFormItemGi showFeedback={false} span={24} label={element.label}>
          {render(element)}
        </NFormItemGi>
      </NGrid>
    )
  },
})
