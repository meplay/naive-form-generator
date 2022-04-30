import type { Component } from 'vue'

export interface IItemConfig {
  component: Component
  renderId?: number
  label: string
  field: string
  span: number
  required: boolean
  icon: string
  placeholder?: string
  maxLength?: number
  counter?: boolean
  clearable?: boolean
  slot?: any
  type?: string
}
