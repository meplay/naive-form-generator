import { NCheckbox, NRadio } from 'naive-ui'

function renderChildren(element: any) {
  let children = null
  switch (element.tag.name) {
    case 'RadioGroup':
      children = element.options.map((opt: any) => <NRadio value={opt.value}>{opt.label}</NRadio>)
      break
    case 'CheckboxGroup':
      children = element.options.map((opt: any) => <NCheckbox value={opt.value} label={opt.label} />)
      break
  }

  return children
}

export function render(element: any) {
  const props: any = {}
  const options = ['Select'].includes(element.tag.name) ? element.options : null
  if (options)
    props.options = options

  return h(element.tag, props, () => renderChildren(element))
}
