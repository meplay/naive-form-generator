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

function generateProps(element: IItemConfig) {
  const props: any = {}
  const options = ['Select'].includes(element.component.name!) ? element.slot.options : null
  if (options)
    props.options = options
  if (element.placeholder !== undefined)
    props.placeholder = element.placeholder
  if (element.type !== undefined)
    props.type = element.type

  return props
}

export function render(element: IItemConfig) {
  return h(
    toRaw(element).component,
    generateProps(element),
    () => renderChildren(element),
  )
}
