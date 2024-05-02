/**
 * @author coycs
 * @description: 开关
 * @date 2024-04-28 21:45
 */

import React from 'react'
// 组件
import * as RadixSwitch from '@radix-ui/react-switch'
// 样式
import './switch.scss'

export default function Switch({ checked, clickHandler }) {
  return (
    <RadixSwitch.Root className="SwitchRoot w-9 h-5 rounded-full bg-gray-300 relative [&[data-state='checked']]:bg-green-500 cursor-pointer" checked={checked} onClick={clickHandler}>
      <RadixSwitch.Thumb className="SwitchThumb block w-3.5 h-3.5 bg-white rounded-full" />
    </RadixSwitch.Root>
  )
}
