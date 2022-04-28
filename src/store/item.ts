import { defineStore } from 'pinia'
import { itemsPreset } from './items-preset'

export const useItemStore = defineStore('item', {
  state: () => ({
    itemsPreset,
    activeItem: null,
    itemsAdded: [],
  }),

  getters: {},

  actions: {},
})
