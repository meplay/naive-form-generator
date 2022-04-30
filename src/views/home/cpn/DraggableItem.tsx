import type { PropType } from 'vue'
import { defineComponent } from 'vue'
import { NFormItemGi, NGrid } from 'naive-ui'
import { render } from '@/utils/render'
import type { IItemConfig } from '@/store/types'
import { useItemStore } from '@/store/item'

export default defineComponent({
  name: 'DraggableItem',

  props: {
    element: {
      type: Object as PropType<IItemConfig>,
      required: true,
    },
  },

  setup() {
    const itemStore = useItemStore()
    const activeRenderId = toRef(itemStore, 'activeId')

    const clickItem = (renderId: number) => {
      itemStore.setActiveId(renderId)
    }

    return {
      activeRenderId,
      clickItem,
    }
  },

  render() {
    return (
      <NGrid>
        <NFormItemGi
          className={`draggable-item ${this.element.renderId === this.activeRenderId ? 'active-item' : ''}`}
          showFeedback={false}
          span={this.element.span}
          label={this.element.label}
          onClick={() => this.clickItem(this.element.renderId!)}
          style={{ height: `${this.element.type === 'textarea' ? 'auto' : '60px'}` }}
        >
          {render(this.element)}
        </NFormItemGi>
      </NGrid>
    )
  },
})
