/**
 * @author coycs
 * @description: 下拉选
 * @date 2024-04-28 21:34
 */

import React from 'react'
import classNames from 'classnames'
// 组件
import * as RadixSelect from '@radix-ui/react-select'
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons'
// 样式
import './select.scss'

const SelectItem = React.forwardRef(({ children, className, ...props }, forwardedRef) => {
  return (
    <RadixSelect.Item className={classNames('SelectItem', className)} {...props} ref={forwardedRef}>
      <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
      <RadixSelect.ItemIndicator className="SelectItemIndicator">
        <CheckIcon />
      </RadixSelect.ItemIndicator>
    </RadixSelect.Item>
  )
})

export default function Select({ placeholder, options, value, changeHandler }) {
  return (
    <RadixSelect.Root value={value} onValueChange={changeHandler}>
      <RadixSelect.Trigger className="SelectTrigger">
        <RadixSelect.Value placeholder={placeholder} />
        <RadixSelect.Icon className="SelectIcon">
          <ChevronDownIcon />
        </RadixSelect.Icon>
      </RadixSelect.Trigger>
      <RadixSelect.Portal>
        <RadixSelect.Content className="SelectContent">
          <RadixSelect.ScrollUpButton className="SelectScrollButton">
            <ChevronUpIcon />
          </RadixSelect.ScrollUpButton>
          <RadixSelect.Viewport className="SelectViewport">
            {
              options.map((item, index) => (
                <SelectItem value={item?.key} key={item?.key + index}>
                  {item.name}
                </SelectItem>
              ))
            }
          </RadixSelect.Viewport>
          <RadixSelect.ScrollDownButton className="SelectScrollButton">
            <ChevronDownIcon />
          </RadixSelect.ScrollDownButton>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  )
}
