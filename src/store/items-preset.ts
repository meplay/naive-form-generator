import {
  NCheckboxGroup,
  NInput,
  NRadioGroup,
  NSelect,
  NSlider,
} from 'naive-ui'
import type { IItemConfig } from './types'

export const itemsPreset: IItemConfig[] = [
  {
    component: NInput,
    field: 'field01',
    required: false,
    span: 24,
    clearable: false,
    counter: false,
    label: '文本',
    icon: 'text',
    placeholder: '请输入',
    type: 'text',
  },
  {
    component: NSelect,
    label: '下拉选择',
    icon: 'select',
    placeholder: '请选择',
    field: 'field02',
    required: false,
    span: 24,
    clearable: false,
    slot: {
      options: [
        { label: '选项一', value: 1 },
        { label: '选项二', value: 2 },
      ],
    },
  },
  {
    component: NSlider,
    label: '滑块',
    icon: 'slider',
    field: 'field03',
    required: false,
    span: 24,
  },
  {
    component: NRadioGroup,
    label: '单选框组',
    icon: 'radio',
    field: 'field04',
    span: 24,
    required: false,
    slot: {
      options: [
        { label: '选项一', value: 1 },
        { label: '选项二', value: 2 },
      ],
    },
  },
  {
    component: NCheckboxGroup,
    label: '多选框组',
    icon: 'checkbox',
    field: 'field05',
    required: false,
    span: 24,
    slot: {
      options: [
        { label: '选项一', value: 1 },
        { label: '选项二', value: 2 },
      ],
    },
  },
]
