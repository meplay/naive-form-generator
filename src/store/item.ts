import { defineStore } from 'pinia'
import { itemsPreset } from './items-preset'
import type { IItemConfig } from './types'

interface IState {
  itemsPreset: IItemConfig[]
  itemsAdded: IItemConfig[]
  activeId?: number
}

export const useItemStore = defineStore('item', {
  state: (): IState => ({
    itemsPreset,
    itemsAdded: [],
    activeId: undefined,
  }),

  getters: {
    activeItem(state) {
      return state.itemsAdded.find(item => item.renderId === this.activeId)!
    },
  },

  actions: {
    setActiveId(renderId: number) {
      this.activeId = renderId
    },
  },
})
