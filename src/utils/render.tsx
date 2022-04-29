import { NCheckbox, NRadio } from 'naive-ui'
import type { IItemConfig } from '@/store/types'

function renderChildren(element: IItemConfig) {
  let children = null
  switch (element.component.name) {
    case 'RadioGroup':
      children = element.slot.options.map((opt: any) => <NRadio value={opt.value}>{opt.label}</NRadio>)
      break
    case 'CheckboxGroup':
      children = element.slot.options.map((opt: any) => <NCheckbox value={opt.value} label={opt.label} />)
      break
  }

  return children
}

export function render(element: IItemConfig) {
  const props: any = {}
  const options = ['Select'].includes(element.component.name!) ? element.slot.options : null
  if (options)
    props.options = options

  return h(toRaw(element).component, props, () => renderChildren(element))
}
