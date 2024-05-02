/**
 * @author coycs
 * @description: popup主体
 * @date 2024-04-27 16:49
 */

import { useEffect, useState } from 'react'
// 组件
import * as Tabs from '@radix-ui/react-tabs'
import Tools from './Tools'
import Setting from './Setting'
// 样式
// import './body.scss'

export default function Body() {
  // 标签页列表
  const tabList = [
    {
      key: 'tools',
      name: 'Tools',
    },
    {
      key: 'setting',
      name: 'Setting',
    },
  ]

  return (
    <div className="body px-4 py-2 flex-1 overflow-x-hidden overflow-y-auto scrollbar-hide">
      <Tabs.Root className="TabsRoot" defaultValue={tabList[0].key}>
        {/* 标签页列表 */}
        <Tabs.List className="TabsList text-sm font-medium text-center text-gray-500 border-b border-gray-200 flex flex-wrap -mb-px hidden">
          {
          tabList.map(tab => (
            <Tabs.Trigger
              className="TabsTrigger flex-1 text-center inline-block p-2.5 text-gray-400 border-b-2 border-transparent [&[data-state='active']]:font-bold [&[data-state='active']]:text-green-600 [&[data-state='active']]:border-green-600 cursor-pointer"
              value={tab.key}
              key={tab.key}
            >
              {tab.name}
            </Tabs.Trigger>
          ))
        }
        </Tabs.List>
        {/* tools */}
        <Tabs.Content className="TabsContent py-2" value="tools">
          <Tools />
        </Tabs.Content>
        <Tabs.Content className="TabsContent py-2" value="setting">
          <Setting />
        </Tabs.Content>
      </Tabs.Root>
    </div>
  )
}
