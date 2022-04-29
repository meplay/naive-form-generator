import {
  NCheckboxGroup,
  NInput,
  NRadioGroup,
  NSelect,
  NSlider,
} from 'naive-ui'

export const itemsPreset = [
  {
    tag: NInput,
    label: '文本输入',
    icon: 'text',
    placeholder: '请输入',
  },
  {
    tag: NSelect,
    label: '下拉选择',
    icon: 'select',
    placeholder: '请选择',
    options: [
      { label: '选项一', value: 1 },
      { label: '选项二', value: 2 },
    ],
  },
  {
    tag: NSlider,
    label: '滑块',
    icon: 'slider',
  },
  {
    tag: NRadioGroup,
    label: '单选框组',
    icon: 'radio',
    options: [
      { label: '选项一', value: 1 },
      { label: '选项二', value: 2 },
    ],
  },
  {
    tag: NCheckboxGroup,
    label: '多选框组',
    icon: 'checkbox',
    options: [
      { label: '选项一', value: 1 },
      { label: '选项二', value: 2 },
    ],
  },
]
